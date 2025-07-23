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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  FileText,
  GraduationCap,
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
} from "lucide-react";
import React from "react";
import type { JSX } from "react";
import { PassportTemplate } from "@/components/document-templates/passport-template";
import { DigitalEPanTemplate } from "@/components/document-templates/digital-epan-template";
import { EAadhaarTemplate } from "@/components/document-templates/e-aadhaar-template";
import AadhaarCard from "@/components/document-templates/AadhaarCard";
import PANCard from "@/components/document-templates/PANCard";
import Passport from "@/components/document-templates/Passport";
import Link from "next/link";
import UANEmployeeDetails from "@/components/document-templates/un-document-template";
import EducationVerification from "@/components/document-templates/education-template";

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
    requirements: ["12-digit Aadhaar number", "Full name", "Date of birth"],
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
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "As per Aadhaar card",
        suggestion:
          "Enter your complete name exactly as printed on your Aadhaar",
        example: "Example: Rajesh Kumar Singh",
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]+$/,
        errorMessage: "Name must be 2-50 characters, letters only",
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        required: true,
        placeholder: "",
        suggestion: "Select your date of birth as mentioned in Aadhaar card",
        example: "Must match Aadhaar records",
        errorMessage: "Please select a valid date of birth",
      },
    ],
  },
  {
    id: "pan",
    name: "PAN Card",
    icon: <CreditCard className="h-5 w-5" />,
    color: "bg-green-500",
    description: "Permanent Account Number issued by Income Tax Department",
    requirements: [
      "10-character PAN number",
      "Full name as per PAN",
      "Date of birth",
    ],
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
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "As per PAN card",
        suggestion: "Enter your name exactly as printed on your PAN card",
        example: "Example: RAJESH KUMAR SINGH",
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]+$/,
        errorMessage: "Name must be 2-50 characters, letters only",
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        required: true,
        placeholder: "",
        suggestion: "Select your date of birth as registered with PAN",
        example: "Must match PAN records",
        errorMessage: "Please select a valid date of birth",
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
      "Full name as per passport",
      "Date of birth",
      "Passport expiry date",
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
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "As per passport",
        suggestion: "Enter your complete name as printed in your passport",
        example: "Example: RAJESH KUMAR SINGH",
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]+$/,
        errorMessage: "Name must be 2-50 characters, letters only",
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        required: true,
        placeholder: "",
        suggestion: "Select your date of birth as mentioned in passport",
        example: "Must match passport records",
        errorMessage: "Please select a valid date of birth",
      },
      {
        name: "expiryDate",
        label: "Expiry Date",
        type: "date",
        required: true,
        placeholder: "",
        suggestion: "Select the expiry date of your passport",
        example: "Check page 2 of your passport",
        errorMessage: "Please select a valid expiry date",
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
    requirements: ["12-digit UAN", "Full name as per EPFO", "Employer Name"],
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
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "As per EPFO records",
        suggestion: "Enter your complete name exactly as registered with EPFO",
        example: "Example: Rajesh Kumar Singh",
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]+$/,
        errorMessage: "Name must be 2-50 characters, letters only",
      },
      {
        name: "employerName",
        label: "Employer Name",
        type: "text",
        required: true,
        placeholder: "Current Employer",
        suggestion:
          "Enter the name of your current employer as per EPFO records",
        example: "Example: Acme Corp Pvt Ltd",
        minLength: 2,
        maxLength: 100,
        pattern: /^[a-zA-Z0-9\s.,&()-]+$/,
        errorMessage: "Employer name must be 2-100 characters",
      },
    ],
  },
];

// Mock OCR function
const performOCR = async (
  file: File,
  documentType: DocumentType
): Promise<Record<string, string>> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const mockData: Record<DocumentType, Record<string, string>> = {
    aadhaar: {
      aadhaarNumber: "987654321098",
      fullName: "PRIYA SHARMA",
      dateOfBirth: "1992-11-22",
    },
    pan: {
      panNumber: "ABCDE1234F",
      fullName: "RAJESH KUMAR SINGH",
      dateOfBirth: "1990-05-15",
    },
    passport: {
      passportNumber: "A1234567",
      fullName: "RAJESH KUMAR SINGH",
      dateOfBirth: "1990-05-15",
      expiryDate: "2030-05-15",
    },
    education: {
      certificateName: "Bachelor of Technology",
      institutionName: "Indian Institute of Technology Delhi",
      rollNumber: "2019CSE001",
      yearOfPassing: "2023",
    },
    un: {
      uanNumber: "101010101010",
      fullName: "ANIL KUMAR",
      employerName: "Tech Solutions Pvt Ltd",
    },
  };

  return mockData[documentType] || {};
};

const validateField = (field: any, value: string): string => {
  if (field.required && !value.trim()) {
    return `${field.label} is required`;
  }

  if (value.trim()) {
    if (field.minLength && value.length < field.minLength) {
      return `${field.label} must be at least ${field.minLength} characters`;
    }

    if (field.maxLength && value.length > field.maxLength) {
      return `${field.label} must not exceed ${field.maxLength} characters`;
    }

    if (field.pattern && !field.pattern.test(value)) {
      return field.errorMessage || `${field.label} format is invalid`;
    }

    if (field.type === "date" && value) {
      const date = new Date(value);
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
  const [formData, setFormData] = useState<Record<string, string>>({});
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

  const handleInputChange = (name: string, value: string) => {
    const field = currentConfig.fields.find((f) => f.name === name);
    if (field?.maxLength && value.length > field.maxLength) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

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
      setFormData((prev) => ({ ...prev, ...extractedData }));
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
    fieldRefs.current = {};
  };

  useEffect(() => {
    fieldRefs.current = {};
    setUploadedImage(null);
    // Scroll the form area to top when document type changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedDocument]);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
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
                      className="space-y-10 max-h-[calc(100vh-200px)] overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 p-8"
                    >
                      {/* OCR Upload Section */}
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

                            {uploadedImage && !isOCRProcessing && (
                              <div className="mt-4 flex flex-col md:flex-row items-center gap-6">
                                {/* Left: Image */}
                                <div className="flex-shrink-0">
                                  <img
                                    src={uploadedImage || "/placeholder.svg"}
                                    alt="Uploaded document"
                                    className="max-w-xs rounded-lg border-2 border-green-300 shadow-md"
                                  />
                                </div>
                                {/* Right: Details */}
                                <div className="flex-1 text-left">
                                  <p className="text-lg text-green-700 font-semibold mb-2">
                                    ✓ Data extracted successfully!
                                  </p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    {currentConfig.fields.map((field) =>
                                      formData[field.name] ? (
                                        <li key={field.name}>
                                          <span className="font-medium">
                                            {field.label}:
                                          </span>{" "}
                                          {formData[field.name]}
                                        </li>
                                      ) : null
                                    )}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

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
                          <span>Force Verification Result (Demo Only)</span>
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
                            className={`${
                              field.type === "textarea" ? "md:col-span-2" : ""
                            } flex flex-col`}
                            ref={(el) => {
                              fieldRefs.current[field.name] = el;
                            }}
                          >
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
                              {field.type === "textarea" ? (
                                <div className="w-full">
                                  <Textarea
                                    id={field.name}
                                    placeholder={field.placeholder}
                                    value={formData[field.name] || ""}
                                    onChange={(e) =>
                                      handleInputChange(
                                        field.name,
                                        e.target.value
                                      )
                                    }
                                    className={`w-full ${
                                      errors[field.name]
                                        ? "border-red-500 focus:border-red-500 ring-red-200"
                                        : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                                    } text-base p-4 min-h-[120px] transition-all duration-200 resize-none border-2 ${
                                      formData[field.name]
                                        ? "bg-green-50 border-green-300"
                                        : ""
                                    }`}
                                    rows={4}
                                    maxLength={field.maxLength}
                                  />
                                  {field.maxLength && (
                                    <div className="flex justify-end mt-2">
                                      <span className="text-xs text-slate-500">
                                        {(formData[field.name] || "").length}/
                                        {field.maxLength} characters
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ) : field.type === "date" ? (
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
                                    className={`w-full ${
                                      errors[field.name]
                                        ? "border-red-500 focus:border-red-500 ring-red-200"
                                        : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                                    } text-base p-4 h-14 transition-all duration-200 pr-12 border-2 ${
                                      formData[field.name]
                                        ? "bg-green-50 border-green-300"
                                        : ""
                                    }`}
                                  />
                                  <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                                </div>
                              ) : (
                                <div className="w-full">
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
                                    className={`w-full ${
                                      errors[field.name]
                                        ? "border-red-500 focus:border-red-500 ring-red-200"
                                        : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                                    } text-base p-4 h-14 transition-all duration-200 border-2 ${
                                      formData[field.name]
                                        ? "bg-green-50 border-green-300"
                                        : ""
                                    }`}
                                    maxLength={field.maxLength}
                                  />
                                  {field.maxLength &&
                                    field.type !== "date" &&
                                    field.type !== "file" && (
                                      <div className="flex justify-end mt-2">
                                        <span className="text-xs text-slate-500">
                                          {(formData[field.name] || "").length}/
                                          {field.maxLength} characters
                                        </span>
                                      </div>
                                    )}
                                </div>
                              )}
                            </div>

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
                      </div>

                      <div className="flex justify-end pt-8 gap-4">
                        <Button
                          onClick={resetForm}
                          variant="outline"
                          className="px-6 py-3 text-base font-semibold"
                          type="button"
                        >
                          Reset
                        </Button>
                        <Button
                          onClick={handleVerify}
                          size="sm"
                          className="px-6 py-3 text-base font-semibold"
                          disabled={Object.keys(formData).length === 0}
                        >
                          <Shield className="h-5 w-5 mr-2" />
                          Verify Document
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
                            <DigitalEPanTemplate formData={formData} />
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
                    <CardContent className="space-y-8 max-h-[calc(100vh-200px)] overflow-y-auto pr-4 py-8 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
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
                                        <AadhaarCard formData={formData} />
                                      );
                                    case "pan":
                                      return <PANCard formData={formData} />;
                                    case "passport":
                                      return <Passport formData={formData} />;
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
                                {/* Add this line wherever you want the DocumentVerification to appear */}
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                      <FileText className="h-5 w-5" />
                                      Verification Details
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                      <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-600">
                                          Status:
                                        </span>
                                        <Badge className="bg-green-100 text-green-800">
                                          Verified
                                        </Badge>
                                      </div>

                                      <Separator />

                                      <div className="space-y-2">
                                        {currentConfig.fields.map((field) => (
                                          <div
                                            className="flex justify-between"
                                            key={field.name}
                                          >
                                            <span className="text-sm font-medium text-gray-600">
                                              {field.label}:
                                            </span>
                                            <span className="text-sm font-semibold">
                                              {formData[field.name] || "-"}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    <Separator />
                                  </CardContent>
                                </Card>

                                {/* ...rest of your existing code... */}
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
                          className="py-3 px-6 text-base"
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
