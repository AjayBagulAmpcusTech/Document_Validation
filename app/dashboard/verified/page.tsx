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
import { CheckCircle, Search, Filter, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

const verifiedDocuments = [
  {
    id: "VER001",
    name: "Priya Sharma",
    documentType: "Aadhaar Card",
    documentNumber: "987654321098",
    verifiedDate: "2024-01-15",
    verifiedTime: "14:30:22",
    status: "Verified",
  },
  {
    id: "VER002",
    name: "Rahul Kumar",
    documentType: "PAN Card",
    documentNumber: "ABCDE1234F",
    verifiedDate: "2024-01-15",
    verifiedTime: "13:45:10",
    status: "Verified",
  },
  {
    id: "VER003",
    name: "Anita Singh",
    documentType: "Passport",
    documentNumber: "K1234567",
    verifiedDate: "2024-01-15",
    verifiedTime: "12:20:45",
    status: "Verified",
  },
  {
    id: "VER004",
    name: "Vikash Gupta",
    documentType: "Education Certificate",
    documentNumber: "EDU789456",
    verifiedDate: "2024-01-15",
    verifiedTime: "11:15:30",
    status: "Verified",
  },
  {
    id: "VER005",
    name: "Sunita Patel",
    documentType: "Aadhaar Card",
    documentNumber: "123456789012",
    verifiedDate: "2024-01-14",
    verifiedTime: "16:45:20",
    status: "Verified",
  },
  {
    id: "VER006",
    name: "Amit Sharma",
    documentType: "PAN Card",
    documentNumber: "FGHIJ5678K",
    verifiedDate: "2024-01-14",
    verifiedTime: "15:30:15",
    status: "Verified",
  },
];

export default function VerifiedDocuments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [documentTypeFilter, setDocumentTypeFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const documentTypes = [
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "Education Certificate",
    "LAN Document",
  ];

  const filteredDocuments = verifiedDocuments.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.documentNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      documentTypeFilter === "all" || doc.documentType === documentTypeFilter;
    const matchesDate = dateFilter === "all" || doc.verifiedDate === dateFilter;

    return matchesSearch && matchesType && matchesDate;
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
                Verified Documents
              </h1>
              <p className="text-gray-600 mt-1">
                All successfully verified documents
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              {filteredDocuments.length} Documents
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
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="2024-01-15">Today (Jan 15)</SelectItem>
                  <SelectItem value="2024-01-14">Yesterday (Jan 14)</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setDocumentTypeFilter("all");
                  setDateFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents Table */}
        <Card>
          <CardHeader>
            <CardTitle>
              Verified Documents ({filteredDocuments.length})
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
                    <TableHead>Verified Date</TableHead>
                    <TableHead>Verified Time</TableHead>
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
                      <TableCell>{doc.verifiedDate}</TableCell>
                      <TableCell>{doc.verifiedTime}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {doc.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {filteredDocuments.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  No documents found matching your filters.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
