"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  XCircle,
  FileText,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const stats = {
  total: 1247,
  verified: 1089,
  failed: 158,
  pending: 23,
};

const recentActivity = [
  {
    id: 1,
    name: "Priya Sharma",
    document: "Aadhaar Card",
    status: "verified",
    time: "2 mins ago",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    document: "PAN Card",
    status: "failed",
    time: "5 mins ago",
  },
  {
    id: 3,
    name: "Anita Singh",
    document: "Passport",
    status: "verified",
    time: "8 mins ago",
  },
  {
    id: 4,
    name: "Vikash Gupta",
    document: "Education Certificate",
    status: "verified",
    time: "12 mins ago",
  },
];

const documentCounts = {
  "Aadhaar Card": 520,
  "PAN Card": 340,
  "Passport": 180,
  "Education Certificate": 89,
  "UAN Certificate": 58,
};

export default function Dashboard() {
  const successRate = Math.round((stats.verified / stats.total) * 100);

  return (
    <div className="min-h-screen bg-gray-50 p-0">
      <div className="max-w-none mx-0 space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Document Verification Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Monitor and manage document verification processes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-green-600 border-green-200"
            >
              {successRate}% Success Rate
            </Badge>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Documents
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.total.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.verified.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {successRate}% success rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {stats.failed.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round((stats.failed / stats.total) * 100)}% failure rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {stats.pending}
              </div>
              <p className="text-xs text-muted-foreground">
                Awaiting verification
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Verify Document */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <FileText className="h-5 w-5" />
                Verify Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-600 mb-4">
                Upload and verify new documents using our advanced verification
                system.
              </p>
              <Link href="dashboard/Verification">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Verification
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* All Verified Documents */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                Verified Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600 mb-4">
                View and manage all successfully verified documents with
                filtering options.
              </p>
              <Link href="/dashboard/verified">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View Verified ({stats.verified})
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Failed Verifications */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <XCircle className="h-5 w-5" />
                Failed Verifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-red-600 mb-4">
                Review failed verifications due to server issues or document
                problems.
              </p>
              <Link href="/dashboard/failed">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  View Failed ({stats.failed})
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          activity.status === "verified"
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                      >
                        {activity.status === "verified" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{activity.name}</p>
                        <p className="text-xs text-gray-600">
                          {activity.document}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          activity.status === "verified"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {activity.status}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Today's Verifications
                  </span>
                  <span className="text-lg font-bold">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Average Processing Time
                  </span>
                  <span className="text-lg font-bold">2.3s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Most Verified Document
                  </span>
                  <span className="text-sm font-semibold">Aadhaar Card</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Peak Hour</span>
                  <span className="text-sm font-semibold">
                    2:00 PM - 3:00 PM
                  </span>
                </div>
                {/* Document Counts Section */}
                <div>
                  <span className="text-sm font-medium">Document Counts :</span>
                  <ul className="mt-2 space-y-1">
                    {Object.entries(documentCounts).map(([doc, count]) => (
                      <li key={doc} className="flex justify-between text-sm">
                        <span>{doc}</span>
                        <span className="font-semibold">{count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
