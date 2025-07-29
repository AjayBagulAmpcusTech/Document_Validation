"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  FileText,
  Shield,
  User,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Info,
  CalendarDays,
  Upload,
  Camera,
  Scan,
  Loader2,
  FileImage,
  Briefcase,
  Home,
  GraduationCap,
} from "lucide-react";
import React from "react";
import type { JSX } from "react";
import Link from "next/link";

// Import template components
import { PassportTemplate } from "@/components/document-templates/passport-template";
import UANEmployeeDetails from "@/components/document-templates/un-document-template";
import EducationVerification from "@/components/document-templates/education-template";
import NewPANCard from "@/components/document-templates/newPanCard";
import { EAadhaarTemplate } from "@/components/document-templates/e-aadhaar-template";
import VerificationDetails from "@/components/verificationDetails/verificationDetails";
import NewAadhaarCard from "@/components/document-templates/NewAadhaarCard";
import NewPassport from "@/components/document-templates/NewPassport";

type DocumentType = "aadhaar" | "pan" | "passport" | "education" | "un";

interface DocumentConfig {
  id: DocumentType;
  name: string;
  icon: JSX.Element;
  color: string;
  fields: Array<{
    name: string;
    label: string;
    type: string;
    required: boolean;
    placeholder: string;
    suggestion?: string;
    example?: string;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    errorMessage?: string;
    consentText?: string;
  }>;
  description: string;
  requirements: string[];
}

const documentConfigs: DocumentConfig[] = [
  {
    id: "aadhaar",
    name: "Aadhaar Card",
    icon: <User className="h-5 w-5" />,
    color: "bg-blue-700",
    description: "Digitally signed Aadhaar card for online use",
    requirements: ["12-digit Aadhaar number", "Consent for verification"],
    fields: [
      {
        name: "aadhaarNumber",
        label: "Aadhaar Number",
        type: "text",
        required: true,
        placeholder: "XXXX XXXX XXXX",
        suggestion: "Enter your 12-digit Aadhaar number",
        example: "Example: 123456789012",
        minLength: 12,
        maxLength: 12,
        pattern: /^\d{4}\s?\d{4}\s?\d{4}$/,
        errorMessage: "Aadhaar number must be exactly 12 digits",
      },
      {
        name: "consent",
        label: "Consent",
        type: "checkbox",
        required: true,
        placeholder: "",
        suggestion: "Please read and accept the consent terms",
        consentText:
          "I hereby authorize [Your Company Name] to use my Aadhaar number for the purpose of identity verification with my full consent in accordance with the Aadhaar Act and applicable laws.",
        errorMessage: "You must provide consent to proceed",
      },
    ],
  },
  {
    id: "pan",
    name: "PAN Card",
    icon: <CreditCard className="h-5 w-5" />,
    color: "bg-green-500",
    description: "Permanent Account Number issued by Income Tax Department",
    requirements: ["10-character PAN number", "Consent for verification"],
    fields: [
      {
        name: "panNumber",
        label: "PAN Number",
        type: "text",
        required: true,
        placeholder: "ABCDE1234F",
        suggestion: "Enter your 10-character PAN number in uppercase letters",
        example: "Example: ABCDE1234F (5 letters + 4 digits + 1 letter)",
        minLength: 10,
        maxLength: 10,
        pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
        errorMessage:
          "PAN must be 10 characters (5 letters, 4 digits, 1 letter)",
      },
      {
        name: "consent",
        label: "Consent",
        type: "checkbox",
        required: true,
        placeholder: "",
        suggestion: "Please read and accept the consent terms",
        consentText:
          "I hereby authorize [Your Company Name] to verify my PAN number for the purpose of identity verification.",
        errorMessage: "You must provide consent to proceed",
      },
    ],
  },
  {
    id: "passport",
    name: "Passport",
    icon: <FileText className="h-5 w-5" />,
    color: "bg-purple-500",
    description: "Indian Passport issued by Ministry of External Affairs",
    requirements: [
      "Passport number",
      "Date of birth",
      "Consent for verification",
    ],
    fields: [
      {
        name: "passportNumber",
        label: "Passport Number",
        type: "text",
        required: true,
        placeholder: "A1234567",
        suggestion: "Enter your 8-character passport number",
        example: "Example: A1234567, B9876543",
        minLength: 8,
        maxLength: 8,
        pattern: /^[A-Z][0-9]{7}$/,
        errorMessage:
          "Passport number must be 8 characters (1 letter + 7 digits)",
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        required: true,
        placeholder: "",
        suggestion: "Select your date of birth as per your passport.",
        example: "Must match passport records",
        errorMessage: "Please select a valid date of birth",
      },
      {
        name: "consent",
        label: "Consent",
        type: "checkbox",
        required: true,
        placeholder: "",
        suggestion: "Please read and accept the consent terms",
        consentText:
          "I hereby authorize [Your Company Name] to verify my passport number for identity validation purposes.",
        errorMessage: "You must provide consent to proceed",
      },
    ],
  },
  {
    id: "education",
    name: "Education Certificate",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "bg-orange-500",
    description: "Educational qualification certificates and marksheets",
    requirements: [
      "Certificate/Degree name",
      "Institution name",
      "Roll number",
      "Year of passing",
    ],
    fields: [
      {
        name: "certificateName",
        label: "Certificate/Degree",
        type: "text",
        required: true,
        placeholder: "B.Tech, MBA, etc.",
        suggestion: "Enter the full name of your degree or certificate",
        example:
          "Example: Bachelor of Technology, Master of Business Administration",
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s.]+$/,
        errorMessage:
          "Certificate name must be 2-50 characters, letters and dots only",
      },
      {
        name: "institutionName",
        label: "Institution Name",
        type: "text",
        required: true,
        placeholder: "College/University name",
        suggestion: "Enter the complete name of your educational institution",
        example: "Example: Indian Institute of Technology Delhi",
        minLength: 5,
        maxLength: 100,
        pattern: /^[a-zA-Z\s.,-]+$/,
        errorMessage: "Institution name must be 5-100 characters",
      },
      {
        name: "rollNumber",
        label: "Roll Number",
        type: "text",
        required: true,
        placeholder: "Student ID",
        suggestion: "Enter your roll number from the certificate",
        example: "Example: 2019CSE001, REG123456",
        minLength: 3,
        maxLength: 20,
        pattern: /^[a-zA-Z0-9]+$/,
        errorMessage: "Roll number must be 3-20 characters, alphanumeric only",
      },
      {
        name: "yearOfPassing",
        label: "Year of Passing",
        type: "number",
        required: true,
        placeholder: "2023",
        suggestion: "Enter the year when you completed your course",
        example: "Example: 2023, 2022",
        minLength: 4,
        maxLength: 4,
        pattern: /^(19|20)\d{2}$/,
        errorMessage: "Year must be between 1900-2099",
      },
    ],
  },
  {
    id: "un",
    name: "UAN Document",
    icon: <Briefcase className="h-5 w-5" />,
    color: "bg-orange-600",
    description: "Unified Account Number (UAN) document from EPFO",
    requirements: ["12-digit UAN", "Consent for verification"],
    fields: [
      {
        name: "uanNumber",
        label: "UAN Number",
        type: "text",
        required: true,
        placeholder: "101010101010",
        suggestion: "Enter your 12-digit Universal Account Number (UAN)",
        example: "Example: 101010101010",
        minLength: 12,
        maxLength: 12,
        pattern: /^\d{12}$/,
        errorMessage: "UAN must be exactly 12 digits",
      },
      {
        name: "consent",
        label: "Consent",
        type: "checkbox",
        required: true,
        placeholder: "",
        suggestion: "Please read and accept the consent terms",
        consentText:
          "I hereby authorize [Your Company Name] to verify my UAN number for employment and identity validation purposes.",
        errorMessage: "You must provide consent to proceed",
      },
    ],
  },
];

// Mock OCR function - Enhanced to extract more data
const performOCR = async (
  file: File,
  documentType: DocumentType
): Promise<Record<string, string>> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const mockData: Record<DocumentType, Record<string, string>> = {
    aadhaar: {
      aadhaarNumber: "987654321098",
      fullName: "RAJESH KUMAR SINGH",
      dateOfBirth: "1992-11-22",
      gender: "M",
      address: "123 Main Street, Bangalore, Karnataka - 560001",
    },
    pan: {
      panNumber: "ABCDE1234F",
      fullName: "RAJESH KUMAR SINGH",
      dateOfBirth: "1990-05-15",
      fatherName: "SURESH KUMAR SINGH",
    },
    passport: {
      passportNumber: "A1234567",
      fullName: "RAJESH KUMAR SINGH",
      dateOfBirth: "1990-05-15",
      expiryDate: "2030-05-15",
      issueDate: "2020-05-15",
      placeOfBirth: "New Delhi",
      nationality: "Indian",
    },
    education: {
      certificateName: "Bachelor of Technology",
      institutionName: "Indian Institute of Technology Delhi",
      rollNumber: "2019CSE001",
      yearOfPassing: "2023",
      grade: "First Class",
      subjects: "Computer Science and Engineering",
    },
    un: {
      uanNumber: "101010101010",
      fullName: "ANIL KUMAR",
      employerName: "Tech Solutions Pvt Ltd",
      pfNumber: "KA/BGE/12345/67890",
      dateOfJoining: "2020-01-15",
    },
  };

  return mockData[documentType] || {};
};

const sendOTP = async (aadhaarNumber: string): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Mock OTP sending - in real implementation, this would call your OTP service
  console.log(`OTP sent to Aadhaar number: ${aadhaarNumber}`);
  return true;
};

const verifyOTP = async (otp: string): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // Mock OTP verification - in real implementation, this would verify the OTP
  return otp === "123456"; // Mock OTP for demo
};

const validateField = (field: any, value: string | boolean): string => {
  if (
    field.required &&
    (field.type === "checkbox" ? !value : !String(value).trim())
  ) {
    return field.errorMessage || `${field.label} is required`;
  }

  if (field.type !== "checkbox" && String(value).trim()) {
    const stringValue = String(value);
    if (field.minLength && stringValue.length < stringValue.length) {
      return `${field.label} must be at least ${field.minLength} characters`;
    }

    if (field.maxLength && stringValue.length > stringValue.length) {
      return `${field.label} must not exceed ${field.maxLength} characters`;
    }

    if (field.pattern && !field.pattern.test(stringValue)) {
      return field.errorMessage || `${field.label} format is invalid`;
    }

    if (field.type === "date" && stringValue) {
      const date = new Date(stringValue);
      const today = new Date();

      if (field.name === "dateOfBirth" && date > today) {
        return "Date of birth cannot be in the future";
      }

      if (field.name === "expiryDate" && date < today) {
        return "Expiry date cannot be in the past";
      }
    }
  }

  return "";
};

const validateForm = (
  currentConfig: DocumentConfig,
  formData: Record<string, string>,
  setErrors: any,
  setIsFormValid: any
) => {
  const newErrors: Record<string, string> = {};
  let isValid = true;

  currentConfig.fields.forEach((field) => {
    const value = formData[field.name] || "";
    const error = validateField(field, value);

    if (error) {
      newErrors[field.name] = error;
      isValid = false;
    }
  });

  setErrors(newErrors);
  setIsFormValid(isValid);
  return { isValid, errors: newErrors };
};

function Verification() {
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentType>("aadhaar");
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [currentStep, setCurrentStep] = useState<"form" | "preview" | "result">(
    "form"
  );
  const [verificationResult, setVerificationResult] = useState<
    "success" | "failed" | null
  >(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isOCRProcessing, setIsOCRProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [forceResult, setForceResult] = useState<
    "default" | "success" | "invalid" | "server"
  >("default");
  const [failureReason, setFailureReason] = useState<string | null>(null);
  const [extractedOCRData, setExtractedOCRData] = useState<
    Record<string, string>
  >({});

  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);

  const fieldRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentConfig = documentConfigs.find(
    (doc) => doc.id === selectedDocument
  )!;

  const scrollToFirstError = (errorFields: Record<string, string>) => {
    const firstErrorField = Object.keys(errorFields)[0];
    if (firstErrorField && fieldRefs.current[firstErrorField]) {
      const errorElement = fieldRefs.current[firstErrorField];
      const scrollContainer = scrollContainerRef.current;

      if (errorElement && scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const elementRect = errorElement.getBoundingClientRect();
        const relativeTop =
          elementRect.top - containerRect.top + scrollContainer.scrollTop;

        scrollContainer.scrollTo({
          top: Math.max(0, relativeTop - 100),
          behavior: "smooth",
        });

        setTimeout(() => {
          const inputElement = errorElement.querySelector(
            "input, textarea, select"
          ) as HTMLElement;
          if (inputElement) {
            inputElement.focus();
          }
        }, 300);
      }
    }
  };

  const handleInputChange = (name: string, value: string | boolean) => {
    const field = currentConfig.fields.find((f) => f.name === name);
    if (
      field?.maxLength &&
      typeof value === "string" &&
      value.length > field.maxLength
    ) {
      return;
    }

    setFormData((prev: any) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (JPG, PNG, etc.)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);

    setIsOCRProcessing(true);
    try {
      const extractedData = await performOCR(file, selectedDocument);
      setExtractedOCRData(extractedData);

      // Auto-populate form fields with extracted data
      const updatedFormData = { ...formData };
      Object.keys(extractedData).forEach((key) => {
        // Only populate if the field exists in current config and is not a checkbox
        const field = currentConfig.fields.find((f) => f.name === key);
        if (field && field.type !== "checkbox") {
          updatedFormData[key] = extractedData[key];
        }
      });
      setFormData(updatedFormData);
      setErrors({});
    } catch (error) {
      console.error("OCR processing failed:", error);
      alert(
        "Failed to extract data from image. Please try again or fill manually."
      );
    } finally {
      setIsOCRProcessing(false);
    }
  };

  const handleVerify = async () => {
    const validation = validateForm(
      currentConfig,
      formData,
      setErrors,
      setIsFormValid
    );

    if (!validation.isValid) {
      scrollToFirstError(validation.errors);
      return;
    }

    // Special handling for Aadhaar - send OTP first
    if (selectedDocument === "aadhaar" && !otpSent) {
      setIsVerifying(true);
      try {
        const success = await sendOTP(formData.aadhaarNumber as string);
        if (success) {
          setOtpSent(true);
          setIsVerifying(false);
          return;
        }
      } catch (error) {
        console.error("Failed to send OTP:", error);
        alert("Failed to send OTP. Please try again.");
        setIsVerifying(false);
        return;
      }
    }

    // For Aadhaar, verify OTP first
    if (selectedDocument === "aadhaar" && otpSent) {
      if (!otpValue.trim()) {
        setOtpError("Please enter the OTP");
        return;
      }

      setIsOtpVerifying(true);
      try {
        const otpValid = await verifyOTP(otpValue);
        if (!otpValid) {
          setOtpError("Invalid OTP. Please try again.");
          setIsOtpVerifying(false);
          return;
        }
      } catch (error) {
        console.error("OTP verification failed:", error);
        setOtpError("OTP verification failed. Please try again.");
        setIsOtpVerifying(false);
        return;
      }
      setIsOtpVerifying(false);
    }

    // Proceed with verification
    setIsVerifying(true);
    setCurrentStep("preview");

    setTimeout(() => {
      let result: "success" | "failed" = "success";
      let reason: string | null = null;

      if (forceResult === "success") {
        result = "success";
      } else if (forceResult === "invalid") {
        result = "failed";
        reason = "invalid";
      } else if (forceResult === "server") {
        result = "failed";
        reason = "server";
      } else {
        // Default random
        result = Math.random() > 0.3 ? "success" : "failed";
        reason = result === "failed" ? "invalid" : null;
      }

      setVerificationResult(result);
      setFailureReason(reason);
      setCurrentStep("result");
      setIsVerifying(false);
    }, 3000);
  };

  const resetForm = () => {
    setCurrentStep("form");
    setVerificationResult(null);
    setFormData({});
    setErrors({});
    setIsFormValid(false);
    setUploadedImage(null);
    setExtractedOCRData({});
    setOtpSent(false);
    setOtpValue("");
    setOtpError("");
    fieldRefs.current = {};
  };

  useEffect(() => {
    fieldRefs.current = {};
    setUploadedImage(null);
    setExtractedOCRData({});
    // Scroll the form area to top when document type changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedDocument]);

  return (
    <div className="h-screen overflow-auto bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Dashboard Button with Home Icon */}
              <Link href="/dashboard" className="mr-4">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <Home className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-700">Dashboard</span>
                </Button>
              </Link>
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  DocuVerify Pro
                </h1>
                <p className="text-sm text-slate-600">
                  Streamlined Document Verification
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Secure & Verified
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-[calc(100vh-200px)] h-full">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-fit lg:sticky lg:top-8">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Select Document Type</CardTitle>
                <CardDescription>
                  Choose the document you want to verify
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {documentConfigs.map((doc) => (
                  <Button
                    key={doc.id}
                    variant={
                      selectedDocument === doc.id ? "secondary" : "ghost"
                    }
                    className="w-full justify-start h-14 text-base"
                    onClick={() => {
                      setSelectedDocument(doc.id);
                      resetForm();
                    }}
                  >
                    <div
                      className={`p-2 rounded-md ${doc.color} text-white mr-3`}
                    >
                      {doc.icon}
                    </div>
                    <span className="font-medium">{doc.name}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-4 relative">
            <AnimatePresence mode="wait">
              {currentStep === "form" && (
                <motion.div
                  key="form"
                  initial={{ x: 0 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="h-fit">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-lg ${currentConfig.color} text-white`}
                        >
                          {React.cloneElement(
                            currentConfig.icon as JSX.Element,
                            { className: "h-6 w-6" }
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {currentConfig.name} Verification
                          </CardTitle>
                          <CardDescription className="text-base">
                            {currentConfig.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent
                      ref={scrollContainerRef}
                      className="space-y-6 max-h-[calc(100vh-180px)] overflow-y-auto px-4 md:px-6 lg:px-8 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
                    >
                      {/* OCR Upload Section */}
                      {selectedDocument !== "un" && (
                        <div className="mb-8">
                          <h3 className="font-semibold text-slate-900 mb-4 text-xl flex items-center">
                            <Scan className="h-6 w-6 mr-2 text-blue-600" />
                            Smart OCR Upload
                          </h3>
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-dashed border-blue-300 rounded-lg p-6">
                            <div className="text-center">
                              <div className="flex justify-center mb-4">
                                {isOCRProcessing ? (
                                  <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
                                ) : (
                                  <FileImage className="h-12 w-12 text-blue-600" />
                                )}
                              </div>

                              {isOCRProcessing ? (
                                <div>
                                  <p className="text-lg font-medium text-blue-800 mb-2">
                                    Processing Document...
                                  </p>
                                  <p className="text-sm text-blue-600">
                                    Extracting data from your image using AI
                                  </p>
                                </div>
                              ) : (
                                <div>
                                  <p className="text-lg font-medium text-slate-800 mb-2">
                                    Upload {currentConfig.name} Image
                                  </p>
                                  <p className="text-sm text-slate-600 mb-4">
                                    Take a photo or upload an image of your
                                    document. Our AI will automatically extract
                                    the required information.
                                  </p>

                                  <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                  />

                                  <div className="flex gap-3 justify-center">
                                    <Button
                                      onClick={() =>
                                        fileInputRef.current?.click()
                                      }
                                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                                      disabled={isOCRProcessing}
                                    >
                                      <Upload className="h-5 w-5 mr-2" />
                                      Upload Image
                                    </Button>

                                    <Button
                                      onClick={() => {
                                        fileInputRef.current?.setAttribute(
                                          "capture",
                                          "environment"
                                        );
                                        fileInputRef.current?.click();
                                      }}
                                      variant="outline"
                                      className="border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-3"
                                      disabled={isOCRProcessing}
                                    >
                                      <Camera className="h-5 w-5 mr-2" />
                                      Take Photo
                                    </Button>
                                  </div>
                                </div>
                              )}

                              {uploadedImage &&
                                !isOCRProcessing &&
                                Object.keys(extractedOCRData).length > 0 && (
                                  <div className="mt-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                      {/* Left: Image */}
                                      <div className="flex justify-center">
                                        <img
                                          src={
                                            uploadedImage || "/placeholder.svg"
                                          }
                                          alt="Uploaded document"
                                          className="max-w-full h-64 object-contain rounded-lg border-2 border-green-300 shadow-md"
                                        />
                                      </div>

                                      {/* Right: Extracted Data */}
                                      <div className="text-left">
                                        <div className="bg-white rounded-lg border-2 border-green-300 p-4">
                                          <div className="flex items-center mb-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                                            <h4 className="text-lg font-semibold text-green-800">
                                              Data Extracted Successfully!
                                            </h4>
                                          </div>

                                          <div className="space-y-2 max-h-48 overflow-y-auto">
                                            {Object.entries(
                                              extractedOCRData
                                            ).map(([key, value]) => (
                                              <div
                                                key={key}
                                                className="flex justify-between items-start py-1 border-b border-gray-100 last:border-b-0"
                                              >
                                                <span className="font-medium text-gray-700 capitalize text-sm">
                                                  {key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .replace(/^./, (str) =>
                                                      str.toUpperCase()
                                                    )}
                                                  :
                                                </span>
                                                <span className="text-gray-900 text-sm font-mono ml-2 flex-1 text-right">
                                                  {value}
                                                </span>
                                              </div>
                                            ))}
                                          </div>

                                          <div className="mt-3 pt-3 border-t border-gray-200">
                                            <p className="text-xs text-green-600 flex items-center">
                                              <Info className="h-3 w-3 mr-1" />
                                              Form fields have been
                                              automatically populated with
                                              extracted data
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      )}

                      <Separator className="my-8" />

                      {/* Requirements */}
                      <div className="mb-8">
                        <h3 className="font-semibold text-slate-900 mb-6 text-xl">
                          Required Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentConfig.requirements.map((req, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3 text-base text-slate-600 p-3 bg-slate-50 rounded-lg"
                            >
                              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                              <span className="font-medium">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator className="my-2" />

                      {/* Form Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* DEMO CONTROL: Force Verification Result */}
                        <div className="md:col-span-2 mb-2 w-80">
                          <span>Force Verification Result</span>
                          <select
                            value={forceResult}
                            onChange={(e) =>
                              setForceResult(e.target.value as any)
                            }
                            className="border rounded px-3 py-2"
                          >
                            <option value="default">Default (Random)</option>
                            <option value="success">Force Success</option>
                            <option value="invalid">
                              Force Failure: Invalid Document
                            </option>
                            <option value="server">
                              Force Failure: Server Issue
                            </option>
                          </select>
                        </div>
                        {/* END DEMO CONTROL */}
                        {currentConfig.fields.map((field) => (
                          <div
                            key={field.name}
                            className={`${field.type === "textarea" ? "md:col-span-2" : ""
                              } flex flex-col`}
                            ref={(el) => {
                              fieldRefs.current[field.name] = el;
                            }}
                          >
                            {field.type === "checkbox" ? (
                              <div className="space-y-4 mt-9">
                                {/* For Aadhaar, PAN, and UAN - inline layout */}
                                {selectedDocument === "aadhaar" ||
                                  selectedDocument === "pan" ||
                                  selectedDocument === "un" ? (
                                  <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <input
                                      type="checkbox"
                                      id={field.name}
                                      checked={!!formData[field.name]}
                                      onChange={(e) =>
                                        handleInputChange(
                                          field.name,
                                          e.target.checked
                                        )
                                      }
                                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                                    />
                                    <Label
                                      htmlFor={field.name}
                                      className="text-sm text-blue-800 leading-relaxed cursor-pointer"
                                    >
                                      {field.consentText}
                                      <span className="text-red-500 ml-1">
                                        *
                                      </span>
                                    </Label>
                                  </div>
                                ) : (
                                  /* For other documents - separate layout */
                                  <>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                      <p className="text-sm text-blue-800 leading-relaxed">
                                        {field.consentText}
                                      </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                      <input
                                        type="checkbox"
                                        id={field.name}
                                        checked={!!formData[field.name]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            field.name,
                                            e.target.checked
                                          )
                                        }
                                        className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                      />
                                      <Label
                                        htmlFor={field.name}
                                        className="text-sm font-medium cursor-pointer"
                                      >
                                        I agree to the above terms and
                                        conditions
                                        <span className="text-red-500 ml-1">
                                          *
                                        </span>
                                      </Label>
                                    </div>
                                  </>
                                )}
                              </div>
                            ) : (
                              <>
                                <Label
                                  htmlFor={field.name}
                                  className="text-base font-semibold mb-3 block"
                                >
                                  {field.label}
                                  {field.required && (
                                    <span className="text-red-500 ml-1">*</span>
                                  )}
                                </Label>

                                {/* Suggestion Box */}
                                {field.suggestion && (
                                  <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                      <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                      <div className="text-sm">
                                        <p className="text-blue-800 font-medium text-base">
                                          {field.suggestion}
                                        </p>
                                        {field.example && (
                                          <p className="text-blue-600 mt-2 italic text-sm">
                                            {field.example}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Input Field */}
                                <div className="flex-1">
                                  {field.type === "date" ? (
                                    <div className="w-full relative">
                                      <Input
                                        id={field.name}
                                        type="date"
                                        value={formData[field.name] || ""}
                                        onChange={(e) =>
                                          handleInputChange(
                                            field.name,
                                            e.target.value
                                          )
                                        }
                                        className={`w-full ${errors[field.name]
                                          ? "border-red-500 focus:border-red-500 ring-red-200"
                                          : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                                          } text-base p-4 h-14 transition-all duration-200 pr-12 border-2 ${formData[field.name]
                                            ? extractedOCRData[field.name]
                                              ? "bg-blue-50 border-blue-300"
                                              : "bg-green-50 border-green-300"
                                            : ""
                                          }`}
                                      />
                                      <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                                      {extractedOCRData[field.name] && (
                                        <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                                          <Scan className="h-4 w-4 text-blue-600" />
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className="w-full relative">
                                      <Input
                                        id={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        value={formData[field.name] || ""}
                                        onChange={(e) =>
                                          handleInputChange(
                                            field.name,
                                            e.target.value
                                          )
                                        }
                                        className={`w-full ${errors[field.name]
                                          ? "border-red-500 focus:border-red-500 ring-red-200"
                                          : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                                          } text-base p-4 h-14 transition-all duration-200 border-2 ${formData[field.name]
                                            ? extractedOCRData[field.name]
                                              ? "bg-blue-50 border-blue-300"
                                              : "bg-green-50 border-green-300"
                                            : ""
                                          }`}
                                        maxLength={field.maxLength}
                                      />
                                      {extractedOCRData[field.name] && (
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                          <Scan className="h-4 w-4 text-blue-600" />
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </>
                            )}

                            {/* Error Message */}
                            {errors[field.name] && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-3 w-full"
                              >
                                <div className="flex items-center bg-red-50 p-3 rounded-md border border-red-200">
                                  <XCircle className="h-4 w-4 mr-2 flex-shrink-0 text-red-500" />
                                  <p className="text-red-600 text-sm font-medium">
                                    {errors[field.name]}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        ))}

                        {/* OTP Section for Aadhaar */}
                        {selectedDocument === "aadhaar" && otpSent && (
                          <div className="md:col-span-2 mt-6 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                            <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                              OTP Verification
                            </h3>
                            <p className="text-sm text-yellow-700 mb-4">
                              An OTP has been sent to your registered mobile
                              number. Please enter the 6-digit OTP below.
                            </p>

                            <div className="space-y-4">
                              <div>
                                <Label
                                  htmlFor="otp"
                                  className="text-base font-semibold mb-2 block"
                                >
                                  Enter OTP{" "}
                                  <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="otp"
                                  type="text"
                                  placeholder="123456"
                                  value={otpValue}
                                  onChange={(e) => {
                                    setOtpValue(e.target.value);
                                    if (otpError) setOtpError("");
                                  }}
                                  className={`w-full max-w-xs ${otpError
                                    ? "border-red-500 focus:border-red-500 ring-red-200"
                                    : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                                    } text-base p-4 h-14 transition-all duration-200 border-2 text-center font-mono text-lg tracking-widest`}
                                  maxLength={6}
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                  Demo OTP: 123456
                                </p>
                              </div>

                              {otpError && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="w-full"
                                >
                                  <div className="flex items-center bg-red-50 p-3 rounded-md border border-red-200">
                                    <XCircle className="h-4 w-4 mr-2 flex-shrink-0 text-red-500" />
                                    <p className="text-red-600 text-sm font-medium">
                                      {otpError}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end pt-8 gap-4">
                        <Button
                          onClick={resetForm}
                          variant="outline"
                          className="px-6 py-3 text-base font-semibold bg-transparent"
                          type="button"
                        >
                          Reset
                        </Button>
                        <Button
                          onClick={handleVerify}
                          size="sm"
                          className="px-6 py-3 text-base font-semibold"
                          disabled={
                            Object.keys(formData).length === 0 ||
                            (selectedDocument === "aadhaar" &&
                              otpSent &&
                              isOtpVerifying)
                          }
                        >
                          <Shield className="h-5 w-5 mr-2" />
                          {selectedDocument === "aadhaar" && !otpSent
                            ? "Send OTP"
                            : selectedDocument === "aadhaar" && otpSent
                              ? isOtpVerifying
                                ? "Verifying OTP..."
                                : "Verify OTP & Document"
                              : "Verify Document"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === "preview" && (
                <motion.div
                  key="preview"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="h-fit">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={resetForm}
                            className="h-10 w-10"
                          >
                            <ArrowLeft className="h-5 w-5" />
                          </Button>
                          <div>
                            <CardTitle className="text-2xl">
                              Document Preview
                            </CardTitle>
                            <CardDescription className="text-base">
                              Verifying {currentConfig.name}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 text-base px-3 py-1.5"
                        >
                          {isVerifying ? "Verifying..." : "Preview"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="max-h-[calc(100vh-250px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                      {isVerifying ? (
                        <div className="flex flex-col items-center justify-center h-[500px] space-y-6">
                          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-blue-600"></div>
                          <p className="text-xl font-medium">
                            Verifying document...
                          </p>
                          <p className="text-base text-slate-600">
                            This may take a few moments
                          </p>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          {selectedDocument === "aadhaar" && (
                            <EAadhaarTemplate formData={formData} />
                          )}
                          {selectedDocument === "pan" && (
                            <NewPANCard formData={formData} />
                          )}
                          {selectedDocument === "passport" && (
                            <PassportTemplate formData={formData} />
                          )}
                          {selectedDocument === "education" && (
                            <EducationVerification formData={formData} />
                          )}
                          {selectedDocument === "un" && (
                            <UANEmployeeDetails formData={formData} />
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === "result" && (
                <motion.div
                  key="result"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="h-fit">
                    <CardContent className="space-y-6 max-h-[calc(120vh-180px)] overflow-y-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                      {verificationResult === "success" ? (
                        <>
                          <div className="bg-green-100 p-8 rounded-full mx-auto w-fit">
                            <CheckCircle className="h-20 w-20 text-green-600" />
                          </div>
                          <div className="text-center">
                            <h2 className="text-3xl font-bold text-green-800 mb-3">
                              Verification Successful!
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                              Your {currentConfig.name} has been successfully
                              verified and authenticated.
                            </p>

                            <div className="bg-white border-2 border-green-200 rounded-lg p-6 mb-8 max-w-5xl mx-auto">
                              <div className="flex justify-center">
                                {(() => {
                                  switch (selectedDocument) {
                                    case "aadhaar":
                                      return (
                                        <NewAadhaarCard formData={formData} />
                                      );
                                    case "pan":
                                      return <NewPANCard formData={formData} />;
                                    case "passport":
                                      return (
                                        <NewPassport formData={formData} />
                                      );
                                    case "education":
                                      return (
                                        <EducationVerification
                                          formData={formData}
                                        />
                                      );
                                    case "un":
                                      return (
                                        <UANEmployeeDetails
                                          formData={formData}
                                        />
                                      );
                                    default:
                                      return null;
                                  }
                                })()}
                              </div>
                              <div>
                                <VerificationDetails
                                  formData={formData}
                                  currentConfig={currentConfig}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-red-100 p-8 rounded-full mx-auto w-fit">
                            <XCircle className="h-20 w-20 text-red-600" />
                          </div>
                          <div className="text-center">
                            <h2 className="text-3xl font-bold text-red-800 mb-3">
                              Verification Failed
                            </h2>
                            <p className="text-lg text-slate-600 mb-6">
                              {failureReason === "server"
                                ? "Verification failed due to a server issue. Please try again later."
                                : "We couldn't verify your " +
                                currentConfig.name +
                                ". Please check the information and try again."}
                            </p>
                          </div>
                        </>
                      )}

                      <div className="flex space-x-4 justify-center">
                        <Button
                          onClick={resetForm}
                          variant="outline"
                          className="py-3 px-6 text-base bg-transparent"
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Try Again
                        </Button>
                        <Button
                          onClick={() => setSelectedDocument("aadhaar")}
                          className="py-3 px-6 text-base"
                        >
                          Verify Another Document
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
