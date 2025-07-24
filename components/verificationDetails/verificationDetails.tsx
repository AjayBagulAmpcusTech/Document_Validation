import type React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  User,
  Calendar,
  MapPin,
  Hash,
  Globe,
  Users,
  Phone,
  FileText,
} from "lucide-react";

interface YourComponentProps {
  formData: any;
  currentConfig: any;
}

const VerificationDetails: React.FC<YourComponentProps>=({ formData, currentConfig })=> {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Verification Details
          </CardTitle>
          <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Verified
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentConfig.fields.map((field:any) => {
            const getFieldIcon = (fieldName: string) => {
              const iconMap: Record<string, React.ReactNode> = {
                name: <User className="h-4 w-4" />,
                fullName: <User className="h-4 w-4" />,
                dateOfBirth: <Calendar className="h-4 w-4" />,
                dob: <Calendar className="h-4 w-4" />,
                gender: <Users className="h-4 w-4" />,
                address: <MapPin className="h-4 w-4" />,
                mobile: <Phone className="h-4 w-4" />,
                phone: <Phone className="h-4 w-4" />,
                aadhaarNumber: <Hash className="h-4 w-4" />,
                panNumber: <Hash className="h-4 w-4" />,
                passportNumber: <Hash className="h-4 w-4" />,
                documentNumber: <Hash className="h-4 w-4" />,
                fatherName: <User className="h-4 w-4" />,
                fathersName: <User className="h-4 w-4" />,
                category: <Users className="h-4 w-4" />,
                nationality: <Globe className="h-4 w-4" />,
                placeOfBirth: <MapPin className="h-4 w-4" />,
                birthPlace: <MapPin className="h-4 w-4" />,
                issueDate: <Calendar className="h-4 w-4" />,
                expiryDate: <Calendar className="h-4 w-4" />,
                dateOfIssue: <Calendar className="h-4 w-4" />,
                dateOfExpiry: <Calendar className="h-4 w-4" />,
                placeOfIssue: <MapPin className="h-4 w-4" />,
                status: <CheckCircle className="h-4 w-4" />,
              };
              return iconMap[fieldName] || <FileText className="h-4 w-4" />;
            };

            const isFullWidth =
              field.name === "address" ||
              field.label.toLowerCase().includes("address");

            return (
              <div
                className={`flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
                key={field.name}
              >
                <div className="text-blue-600 mt-0.5">
                  {getFieldIcon(field.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {field.label}
                  </p>
                  <p className="text-sm text-gray-600 break-words">
                    {formData[field.name] || (
                      <span className="text-gray-400 italic">Not provided</span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Separator />

        <div className="flex items-center gap-2 text-sm text-gray-500 bg-green-50 p-3 rounded-lg">
          <CheckCircle className="h-4 w-4 text-green-600" />
          Document verified successfully on{" "}
          {new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </CardContent>
    </Card>
  );
}
export default VerificationDetails;
