"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  XCircle,
  Search,
  Filter,
  Download,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

const failedDocuments = [
  {
    id: "FAIL001",
    name: "Rajesh Kumar",
    documentType: "Aadhaar Card",
    documentNumber: "456789123456",
    failedDate: "2024-01-15",
    failedTime: "15:20:30",
    reason: "Server Timeout",
    errorCode: "ERR_TIMEOUT",
    status: "Failed",
  },
  {
    id: "FAIL002",
    name: "Meera Joshi",
    documentType: "PAN Card",
    documentNumber: "LMNOP9876Q",
    failedDate: "2024-01-15",
    failedTime: "14:15:45",
    reason: "Invalid Document Format",
    errorCode: "ERR_FORMAT",
    status: "Failed",
  },
  {
    id: "FAIL003",
    name: "Suresh Patel",
    documentType: "Passport",
    documentNumber: "M9876543",
    failedDate: "2024-01-15",
    failedTime: "13:30:20",
    reason: "Database Connection Error",
    errorCode: "ERR_DB_CONN",
    status: "Failed",
  },
  {
    id: "FAIL004",
    name: "Kavita Singh",
    documentType: "Education Certificate",
    documentNumber: "EDU456789",
    failedDate: "2024-01-14",
    failedTime: "16:45:10",
    reason: "API Rate Limit Exceeded",
    errorCode: "ERR_RATE_LIMIT",
    status: "Failed",
  },
  {
    id: "FAIL005",
    name: "Deepak Sharma",
    documentType: "Aadhaar Card",
    documentNumber: "789456123789",
    failedDate: "2024-01-14",
    failedTime: "15:20:35",
    reason: "Server Internal Error",
    errorCode: "ERR_INTERNAL",
    status: "Failed",
  },
];

export default function FailedDocuments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [documentTypeFilter, setDocumentTypeFilter] = useState("all");
  const [reasonFilter, setReasonFilter] = useState("all");

  const documentTypes = [
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "Education Certificate",
    "LAN Document",
  ];
  const failureReasons = [
    "Server Timeout",
    "Invalid Document Format",
    "Database Connection Error",
    "API Rate Limit Exceeded",
    "Server Internal Error",
  ];

  const filteredDocuments = failedDocuments.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.documentNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      documentTypeFilter === "all" || doc.documentType === documentTypeFilter;
    const matchesReason = reasonFilter === "all" || doc.reason === reasonFilter;

    return matchesSearch && matchesType && matchesReason;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Failed Verifications
              </h1>
              <p className="text-gray-600 mt-1">
                Documents that failed verification due to technical issues
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-red-100 text-red-800">
              <XCircle className="h-3 w-3 mr-1" />
              {filteredDocuments.length} Failed
            </Badge>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or document number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={documentTypeFilter}
                onValueChange={setDocumentTypeFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Document Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Document Types</SelectItem>
                  {documentTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={reasonFilter} onValueChange={setReasonFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Failure Reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reasons</SelectItem>
                  {failureReasons.map((reason) => (
                    <SelectItem key={reason} value={reason}>
                      {reason}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setDocumentTypeFilter("all");
                  setReasonFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Failed Documents Table */}
        <Card>
          <CardHeader>
            <CardTitle>
              Failed Verifications ({filteredDocuments.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Document Type</TableHead>
                    <TableHead>Document Number</TableHead>
                    <TableHead>Failed Date</TableHead>
                    <TableHead>Failed Time</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Error Code</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.id}</TableCell>
                      <TableCell>{doc.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{doc.documentType}</Badge>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {doc.documentNumber}
                      </TableCell>
                      <TableCell>{doc.failedDate}</TableCell>
                      <TableCell>{doc.failedTime}</TableCell>
                      <TableCell>
                        <span className="text-sm text-red-600">
                          {doc.reason}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-mono text-xs">
                          {doc.errorCode}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">
                          <XCircle className="h-3 w-3 mr-1" />
                          {doc.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-3 w-3 mr-1" />
                            Retry
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {filteredDocuments.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  No failed documents found matching your filters.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

