import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, TrendingUp, ClipboardCheck, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Mock data - will be replaced with Supabase data
  const upcomingEvents = [
    { id: 1, title: "Tech Innovation Workshop", date: "2024-01-15", registrations: 45 },
    { id: 2, title: "Cultural Fest 2024", date: "2024-01-20", registrations: 120 }
  ];

  const stats = {
    totalEvents: 22,
    totalRegistrations: 365,
    attendanceRate: 87,
    activeStudents: 156
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Campus Event Management</h1>
          <p className="text-xl text-muted-foreground">
            Streamline event organization, registration, and attendance tracking
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalEvents}</div>
              <p className="text-xs text-muted-foreground">Active and completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.totalRegistrations}</div>
              <p className="text-xs text-muted-foreground">Total student registrations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.attendanceRate}%</div>
              <p className="text-xs text-muted-foreground">Average across all events</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.activeStudents}</div>
              <p className="text-xs text-muted-foreground">Participating students</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Upcoming Events */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events happening soon</CardDescription>
              </div>
              <Link to="/events">
                <Button variant="outline" size="sm">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="secondary">{event.registrations} registered</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Link to="/events">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Event
                  </Button>
                </Link>
                
                <Link to="/registration">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Register Student
                  </Button>
                </Link>
                
                <Link to="/attendance">
                  <Button className="w-full justify-start" variant="outline">
                    <ClipboardCheck className="h-4 w-4 mr-2" />
                    Mark Attendance
                  </Button>
                </Link>
                
                <Link to="/reports">
                  <Button className="w-full justify-start" variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Reports
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Database Connection Notice */}
        <Card className="mt-8 border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-accent">Ready for Supabase Integration</CardTitle>
            <CardDescription>
              This prototype is ready to connect to your Supabase backend. The database schema will include:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="space-y-1">
                <Badge variant="outline">College</Badge>
                <Badge variant="outline">Student</Badge>
                <Badge variant="outline">Event</Badge>
              </div>
              <div className="space-y-1">
                <Badge variant="outline">Registration</Badge>
                <Badge variant="outline">Attendance</Badge>
                <Badge variant="outline">Feedback</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Click the green Supabase button in the top right to set up your database and enable full functionality.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
