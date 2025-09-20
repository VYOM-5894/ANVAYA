import { useState } from "react";
import { Briefcase, Users, TrendingUp, Search, Filter, MapPin, Clock, DollarSign, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RecruiterPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock job data
  const jobPostings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Mahindra",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹15-25 LPA",
      posted: "2 days ago",
      applicants: 24,
      status: "active"
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Wipro Limited",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹12-20 LPA",
      posted: "5 days ago",
      applicants: 18,
      status: "active"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Infosys",
      location: "Bhubaneswar, India",
      type: "Full-time",
      salary: "₹18-30 LPA",
      posted: "1 week ago",
      applicants: 31,
      status: "active"
    }
  ];

  const stats = {
    activeJobs: 15,
    totalApplications: 342,
    hiredCandidates: 28,
    avgTimeToHire: 21
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              <Briefcase className="inline-block mr-3 h-8 w-8 text-primary" />
              Recruiter Portal
            </h1>
            <p className="text-muted-foreground">
              Connect with talented KIIT alumni for your hiring needs
            </p>
          </div>
          <Button className="professional-button">
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Jobs</p>
                  <p className="text-2xl font-bold">{stats.activeJobs}</p>
                </div>
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Applications</p>
                  <p className="text-2xl font-bold">{stats.totalApplications}</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hired Candidates</p>
                  <p className="text-2xl font-bold">{stats.hiredCandidates}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Time to Hire</p>
                  <p className="text-2xl font-bold">{stats.avgTimeToHire} days</p>
                </div>
                <Clock className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="candidates">Candidate Search</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Job Postings</CardTitle>
                <CardDescription>
                  Manage your active job listings and track applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search job postings..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="space-y-4">
                  {jobPostings.map((job) => (
                    <Card key={job.id} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <span className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                {job.company}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />
                                {job.salary}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">{job.type}</Badge>
                              <Badge variant="outline">{job.status}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground mb-1">Posted {job.posted}</p>
                            <p className="text-lg font-semibold text-primary">{job.applicants} applicants</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="professional-button">View Applications</Button>
                          <Button size="sm" variant="outline">Edit Job</Button>
                          <Button size="sm" variant="outline">Share</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alumni Talent Search</CardTitle>
                <CardDescription>
                  Search and connect with qualified KIIT alumni candidates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Advanced Candidate Search</p>
                  <p className="text-muted-foreground mb-6">
                    Search functionality requires database integration and user profiles
                  </p>
                  <Button className="professional-button">
                    Setup Candidate Database
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Management</CardTitle>
                <CardDescription>
                  Review and manage candidate applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Application Tracking System</p>
                  <p className="text-muted-foreground mb-6">
                    Application management requires integrated database system
                  </p>
                  <Button className="professional-button">
                    Enable Application Tracking
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recruitment Analytics</CardTitle>
                <CardDescription>
                  Track hiring metrics and optimize your recruitment process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Recruitment Insights</p>
                  <p className="text-muted-foreground mb-6">
                    Analytics dashboard requires data collection and storage
                  </p>
                  <Button className="professional-button">
                    Setup Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterPortal;