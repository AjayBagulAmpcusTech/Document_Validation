"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Download,
  Printer,
  FileEdit,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  Moon,
  Sun,
} from "lucide-react";

const UANEmployeeDetails = (formData: any) => {
  console.log("formData: ", formData);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const employeeDetails = {
    uan: formData?.uanNumber || "100234567891",
    name: formData?.fullName || "Ajay Bagul",
    dob: "1997-06-21",
    gender: "Male",
    aadhaar: "XXXX-XXXX-1234",
    mobile: "+91-9876543210",
    email: "ajay.bagul@example.com",
    profileImage: "/placeholder.svg?height=100&width=100",
    status: "Active",
    kycStatus: {
      aadhaarVerified: true,
      panVerified: true,
      bankVerified: true,
    },
    currentJob: {
      employerName: "Tata Consultancy Services",
      joiningDate: "2023-04-01",
      designation: "Software Engineer",
      location: "Mumbai, Maharashtra",
      pfNumber: "MH/BAN/1234567",
    },
    previousJobs: [
      {
        employerName: "Infosys Ltd.",
        from: "2021-01-15",
        to: "2023-03-30",
        designation: "System Engineer",
        location: "Pune, Maharashtra",
        pfNumber: "MH/PUN/7654321",
      },
      {
        employerName: "Wipro Technologies",
        from: "2019-06-01",
        to: "2020-12-31",
        designation: "Associate Developer",
        location: "Hyderabad, Telangana",
        pfNumber: "TS/HYD/4567890",
      },
    ],
  };

  return (
    <div
      className={`min-h-screen py-10 px-4 sm:px-10 transition-colors duration-200 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto ${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-8 rounded-2xl shadow-xl`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-3xl font-bold ${
              darkMode ? "text-blue-400" : "text-blue-700"
            }`}
          >
            UAN Employee Details
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className={darkMode ? "bg-gray-700 hover:bg-gray-600" : ""}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Badge
              className={`${
                employeeDetails.status === "Active"
                  ? "bg-green-500"
                  : "bg-red-500"
              } text-white`}
            >
              {employeeDetails.status}
            </Badge>
          </div>
        </div>

        {/* Profile Summary */}
        <div
          className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 p-4 rounded-lg ${
            darkMode ? "bg-gray-700" : "bg-blue-50"
          }`}
        >
          <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
            <AvatarImage
              src={employeeDetails.profileImage || "/placeholder.svg"}
              alt={employeeDetails.name}
            />
            <AvatarFallback>
              {employeeDetails.name
                .split(" ")
                .map((n: any) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{employeeDetails.name}</h2>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {employeeDetails.currentJob.designation} at{" "}
              {employeeDetails.currentJob.employerName}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{employeeDetails.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{employeeDetails.mobile}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 bg-transparent"
            >
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 bg-transparent"
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 bg-transparent"
            >
              <FileEdit className="h-4 w-4" />
              <span>Edit</span>
            </Button>
          </div>
        </div>

        {/* KYC Status */}
        <div
          className={`flex flex-wrap gap-4 mb-8 p-4 rounded-lg ${
            darkMode ? "bg-gray-700/50" : "bg-gray-50"
          }`}
        >
          <h3 className="w-full text-lg font-semibold mb-2">
            KYC Verification Status
          </h3>
          <div className="flex items-center gap-2">
            {employeeDetails.kycStatus.aadhaarVerified ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-amber-500" />
            )}
            <span>Aadhaar Verified</span>
          </div>
          <div className="flex items-center gap-2">
            {employeeDetails.kycStatus.panVerified ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-amber-500" />
            )}
            <span>PAN Verified</span>
          </div>
          <div className="flex items-center gap-2">
            {employeeDetails.kycStatus.bankVerified ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-amber-500" />
            )}
            <span>Bank Account Verified</span>
          </div>
        </div>

        {/* Tabbed Interface */}
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="employment">Employment</TabsTrigger>
          </TabsList>

          {/* Personal Information Tab */}
          <TabsContent value="personal">
            <Card>
              <CardContent className="pt-6">
                <h2
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  } mb-4 border-b pb-1`}
                >
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div
                    className={`p-3 rounded ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <strong>UAN:</strong> {employeeDetails.uan}
                  </div>
                  <div
                    className={`p-3 rounded ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <strong>Name:</strong> {employeeDetails.name}
                  </div>
                  <div
                    className={`p-3 rounded ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <strong>DOB:</strong> {employeeDetails.dob}
                  </div>
                  <div
                    className={`p-3 rounded ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <strong>Gender:</strong> {employeeDetails.gender}
                  </div>
                  <div
                    className={`p-3 rounded ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <strong>Aadhaar:</strong> {employeeDetails.aadhaar}
                  </div>
                  <div
                    className={`p-3 rounded ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <strong>Mobile:</strong> {employeeDetails.mobile}
                  </div>
                  <div
                    className={`p-3 rounded ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-50"
                    } md:col-span-2`}
                  >
                    <strong>Email:</strong> {employeeDetails.email}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Employment Tab */}
          <TabsContent value="employment">
            <Card>
              <CardContent className="pt-6">
                {/* Current Job */}
                <section className="mb-8">
                  <h2
                    className={`text-xl font-semibold ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    } mb-4 border-b pb-1`}
                  >
                    Current Job
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div
                      className={`p-3 rounded ${
                        darkMode ? "bg-gray-700/50" : "bg-gray-50"
                      }`}
                    >
                      <strong>Employer:</strong>{" "}
                      {employeeDetails.currentJob.employerName}
                    </div>
                    <div
                      className={`p-3 rounded ${
                        darkMode ? "bg-gray-700/50" : "bg-gray-50"
                      }`}
                    >
                      <strong>Joining Date:</strong>{" "}
                      {employeeDetails.currentJob.joiningDate}
                    </div>
                    <div
                      className={`p-3 rounded ${
                        darkMode ? "bg-gray-700/50" : "bg-gray-50"
                      }`}
                    >
                      <strong>Designation:</strong>{" "}
                      {employeeDetails.currentJob.designation}
                    </div>
                    <div
                      className={`p-3 rounded ${
                        darkMode ? "bg-gray-700/50" : "bg-gray-50"
                      }`}
                    >
                      <strong>Location:</strong>{" "}
                      {employeeDetails.currentJob.location}
                    </div>
                    <div
                      className={`p-3 rounded ${
                        darkMode ? "bg-gray-700/50" : "bg-gray-50"
                      }`}
                    >
                      <strong>PF Number:</strong>{" "}
                      {employeeDetails.currentJob.pfNumber}
                    </div>
                  </div>
                </section>

                {/* Previous Jobs */}
                <section>
                  <h2
                    className={`text-xl font-semibold ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    } mb-4 border-b pb-1`}
                  >
                    Previous Employment
                  </h2>
                  <div className="overflow-x-auto text-sm">
                    <table
                      className={`min-w-full table-auto border ${
                        darkMode ? "border-gray-700" : "border-gray-300"
                      }`}
                    >
                      <thead
                        className={
                          darkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-blue-50 text-gray-700"
                        }
                      >
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Employer
                          </th>
                          <th className="border px-4 py-2 text-left">From</th>
                          <th className="border px-4 py-2 text-left">To</th>
                          <th className="border px-4 py-2 text-left">
                            Designation
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Location
                          </th>
                          <th className="border px-4 py-2 text-left">
                            PF Number
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        {employeeDetails.previousJobs.map((job, index) => (
                          <tr
                            key={index}
                            className={
                              darkMode
                                ? "hover:bg-gray-700"
                                : "hover:bg-gray-50"
                            }
                          >
                            <td className="border px-4 py-2">
                              {job.employerName}
                            </td>
                            <td className="border px-4 py-2">{job.from}</td>
                            <td className="border px-4 py-2">{job.to}</td>
                            <td className="border px-4 py-2">
                              {job.designation}
                            </td>
                            <td className="border px-4 py-2">{job.location}</td>
                            <td className="border px-4 py-2">{job.pfNumber}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UANEmployeeDetails;
