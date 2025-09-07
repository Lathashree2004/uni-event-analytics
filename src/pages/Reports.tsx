import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";

// Mock data - will be replaced with Supabase queries
const mockReports = {
  eventPopularity: [
    { title: "Career Fair", registrations: 200, attendance: 180 },
    { title: "Cultural Fest 2024", registrations: 120, attendance: 110 },
    { title: "Tech Innovation Workshop", registrations: 45, attendance: 40 }
  ],
  topStudents: [
    { name: "Alice Johnson", email: "alice@university.edu", eventsAttended: 5 },
    { name: "Bob Wilson", email: "bob@university.edu", eventsAttended: 4 },
    { name: "Carol Davis", email: "carol@university.edu", eventsAttended: 4 }
  ],
  eventsByType: [
    { type: "Workshop", count: 8, attendanceRate: 85 },
    { type: "Cultural", count: 5, attendanceRate: 92 },
    { type: "Career", count: 3, attendanceRate: 88 },
    { type: "Sports", count: 6, attendanceRate: 75 }
  ]
};

const Reports = () => {
  const [reports] = useState(mockReports);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Insights and statistics for campus events</p>
        </div>

        <div className="grid gap-6">
          {/* Event Popularity Report */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Event Popularity</span>
              </CardTitle>
              <CardDescription>Events ranked by total registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.eventPopularity.map((event, index) => (
                  <div key={event.title} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.registrations} registrations • {event.attendance} attended
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{event.registrations}</div>
                      <div className="text-sm text-muted-foreground">
                        {Math.round((event.attendance / event.registrations) * 100)}% attendance
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Top Students Report */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Top Active Students</span>
                </CardTitle>
                <CardDescription>Most engaged students by event attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.topStudents.map((student, index) => (
                    <div key={student.email} className="flex items-center space-x-4">
                      <Badge variant={index === 0 ? "default" : "secondary"}>
                        #{index + 1}
                      </Badge>
                      <div className="flex-1">
                        <h4 className="font-medium">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">{student.email}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{student.eventsAttended}</div>
                        <div className="text-xs text-muted-foreground">events</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Events by Type Report */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Events by Type</span>
                </CardTitle>
                <CardDescription>Event categories and attendance rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.eventsByType.map((category) => (
                    <div key={category.type} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{category.type}</span>
                          <Badge variant="outline">{category.count} events</Badge>
                        </div>
                        <span className="text-sm font-medium">{category.attendanceRate}%</span>
                      </div>
                      <Progress value={category.attendanceRate} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Statistics */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">22</div>
                <p className="text-xs text-muted-foreground">+3 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">365</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Students</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">+8 from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;