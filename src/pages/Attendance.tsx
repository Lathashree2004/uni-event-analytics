import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Users, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Mock data - will be replaced with Supabase data
const mockRegistrations = [
  {
    id: 1,
    studentName: "John Doe",
    studentEmail: "john@university.edu",
    eventTitle: "Tech Innovation Workshop",
    attended: false
  },
  {
    id: 2,
    studentName: "Jane Smith",
    studentEmail: "jane@university.edu",
    eventTitle: "Tech Innovation Workshop", 
    attended: true
  },
  {
    id: 3,
    studentName: "Mike Johnson",
    studentEmail: "mike@university.edu",
    eventTitle: "Cultural Fest 2024",
    attended: false
  }
];

const Attendance = () => {
  const [registrations, setRegistrations] = useState(mockRegistrations);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredRegistrations = registrations.filter(reg =>
    reg.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.studentEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAttendanceChange = (registrationId: number, attended: boolean) => {
    setRegistrations(prev =>
      prev.map(reg =>
        reg.id === registrationId ? { ...reg, attended } : reg
      )
    );

    toast({
      title: "Attendance Updated",
      description: `Attendance has been ${attended ? 'marked' : 'unmarked'} successfully.`,
    });
  };

  const attendedCount = registrations.filter(reg => reg.attended).length;
  const totalCount = registrations.length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Attendance Management</h1>
          <p className="text-muted-foreground">Track and manage event attendance</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attended</CardTitle>
              <CheckCircle className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{attendedCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <XCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalCount > 0 ? Math.round((attendedCount / totalCount) * 100) : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Student Attendance</CardTitle>
            <CardDescription>Mark attendance for registered students</CardDescription>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students, emails, or events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredRegistrations.map((registration) => (
                <div
                  key={registration.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium">{registration.studentName}</h3>
                      <Badge variant={registration.attended ? "default" : "secondary"}>
                        {registration.attended ? "Present" : "Absent"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{registration.studentEmail}</p>
                    <p className="text-sm text-muted-foreground">{registration.eventTitle}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={registration.attended}
                      onCheckedChange={(checked) => 
                        handleAttendanceChange(registration.id, checked as boolean)
                      }
                    />
                    <span className="text-sm text-muted-foreground">Present</span>
                  </div>
                </div>
              ))}

              {filteredRegistrations.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <p>No registrations found</p>
                  <p className="text-sm">
                    {searchTerm ? "Try adjusting your search terms" : "Registration data will appear here once you connect to Supabase"}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Attendance;