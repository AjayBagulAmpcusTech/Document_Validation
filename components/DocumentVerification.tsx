"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Upload,
  FileText,
  CreditCard,
  BookOpen,
  BadgeIcon as IdCard,
  StampIcon as Passport,
} from "lucide-react";
import Image from "next/image";

const documentTypes = [
  { id: "aadhaar", name: "Aadhaar Card", icon: IdCard, color: "bg-blue-500" },
  { id: "pan", name: "PAN Card", icon: CreditCard, color: "bg-green-500" },
  { id: "passport", name: "Passport", icon: Passport, color: "bg-purple-500" },
  {
    id: "education",
    name: "Education Certificate",
    icon: BookOpen,
    color: "bg-orange-500",
  },
  { id: "lan", name: "LAN Document", icon: FileText, color: "bg-orange-600" },
];

export default function DocumentVerification() {
  const [selectedDocument, setSelectedDocument] = useState("aadhaar");
  const [isVerified, setIsVerified] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const verificationData = {
    name: "PRIYA SHARMA",
    dob: "1990-10-22",
    gender: "FEMALE",
    phone: "987654321098",
    address: "123, Sample Street, Mumbai, Maharashtra - 400001",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Document Type Selection */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Select Document Type
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Choose the document you want to verify
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                {documentTypes.map((doc) => {
                  const IconComponent = doc.icon;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDocument(doc.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                        selectedDocument === doc.id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className={`p-2 rounded ${doc.color} text-white`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">{doc.name}</span>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Success Message */}
            {isVerified && (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                    <div>
                      <h2 className="text-2xl font-bold text-green-700">
                        Verification Successful!
                      </h2>
                      <p className="text-green-600">
                        Your Aadhaar Card has been successfully verified and
                        authenticated.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image Upload/Change Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Document Image
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {uploadedImage ? (
                      <div className="space-y-4">
                        <Image
                          src={uploadedImage || "/placeholder.svg"}
                          alt="Uploaded document"
                          width={300}
                          height={200}
                          className="mx-auto rounded-lg object-cover"
                        />
                        <Button
                          variant="outline"
                          onClick={() => setUploadedImage(null)}
                        >
                          Change Image
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Upload className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            Upload Document Image
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PNG, JPG up to 10MB
                          </p>
                        </div>
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Button variant="outline" asChild>
                            <span>Choose File</span>
                          </Button>
                          <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Sample Document Preview */}
                  <div className="border rounded-lg p-4 bg-orange-50">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-orange-500 text-white">
                        GOVT OF INDIA
                      </Badge>
                      <div className="w-16 h-16 bg-gray-200 rounded border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Photo</span>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="font-semibold text-center">
                        {verificationData.name}
                      </p>
                      <p className="text-center text-xs">
                        DOB: {verificationData.dob}
                      </p>
                      <p className="text-center text-xs">
                        {verificationData.gender}
                      </p>
                      <p className="text-center font-bold text-lg">
                        {verificationData.phone}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Verification Details Section */}
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
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Name:
                        </span>
                        <span className="text-sm font-semibold">
                          {verificationData.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Date of Birth:
                        </span>
                        <span className="text-sm">{verificationData.dob}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Gender:
                        </span>
                        <span className="text-sm">
                          {verificationData.gender}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Phone:
                        </span>
                        <span className="text-sm font-mono">
                          {verificationData.phone}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Address:
                      </span>
                      <p className="text-sm mt-1">{verificationData.address}</p>
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">
                          Digital Verification
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Scan QR for verification
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-white border rounded flex items-center justify-center">
                        <div className="w-12 h-12 bg-black/10 rounded grid grid-cols-3 gap-px">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="bg-black/60 rounded-sm" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => setIsVerified(false)}>
                Try Again
              </Button>
              <Button onClick={() => window.location.reload()}>
                Verify Another Document
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
