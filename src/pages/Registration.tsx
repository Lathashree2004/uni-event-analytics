import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Mock data - will be replaced with Supabase data
const mockEvents = [
  { id: 1, title: "Tech Innovation Workshop", date: "2024-01-15" },
  { id: 2, title: "Cultural Fest 2024", date: "2024-01-20" },
  { id: 3, title: "Career Fair", date: "2024-01-25" }
];

const Registration = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    eventId: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This will be replaced with Supabase API call
    console.log("Registration data:", formData);
    
    toast({
      title: "Registration Successful",
      description: "Student has been registered for the event.",
    });
    
    // Reset form
    setFormData({ studentName: "", studentEmail: "", eventId: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Event Registration</h1>
            <p className="text-muted-foreground">Register students for campus events</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Student Registration Form</CardTitle>
              <CardDescription>
                Fill in the details to register a student for an event
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => handleInputChange("studentName", e.target.value)}
                    placeholder="Enter student's full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="studentEmail">Student Email</Label>
                  <Input
                    id="studentEmail"
                    type="email"
                    value={formData.studentEmail}
                    onChange={(e) => handleInputChange("studentEmail", e.target.value)}
                    placeholder="Enter student's email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="event">Select Event</Label>
                  <Select onValueChange={(value) => handleInputChange("eventId", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an event" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockEvents.map((event) => (
                        <SelectItem key={event.id} value={event.id.toString()}>
                          {event.title} - {new Date(event.date).toLocaleDateString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full">
                  Register for Event
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
                <CardDescription>View recently registered students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <p>No recent registrations to display</p>
                  <p className="text-sm">Registrations will appear here once you connect to Supabase</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;