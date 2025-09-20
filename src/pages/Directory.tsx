import { useState } from "react";
import { Search, Filter, MapPin, Briefcase, GraduationCap, Mail, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allAlumni } from "@/data/alumniData";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Using comprehensive alumni data from data file

  const departments = [
    "Computer Science & Engineering",
    "Electronics & Telecommunications", 
    "Information Technology",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Biotechnology",
    "Electronics & Instrumentation",
    "Chemical Engineering",
    "Aerospace Engineering"
  ];

  const graduationYears = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];

  // Filter alumni based on search criteria
  const filteredAlumni = allAlumni.filter(alumni => {
    const matchesSearch = searchTerm === "" || 
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear === "" || selectedYear === "all-years" || alumni.graduationYear === selectedYear;
    const matchesDept = selectedDepartment === "" || selectedDepartment === "all-departments" || alumni.degree === selectedDepartment;
    
    return matchesSearch && matchesYear && matchesDept;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Alumni Directory
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Connect with fellow KIIT graduates from around the world. Search by name, company, graduation year, or department to find alumni in your field.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-lg border border-border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, company, position, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Graduation Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-years">All Years</SelectItem>
                {graduationYears.map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full lg:w-64">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-departments">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setSelectedYear("all-years");
              setSelectedDepartment("all-departments");
            }}>
              <Filter className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAlumni.length} of {allAlumni.length} alumni
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAlumni.map((alumni) => {
            const initials = alumni.name.split(' ').map(n => n[0]).join('');
            
            return (
              <div key={alumni.id} className="alumni-card">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16 ring-2 ring-border">
                    <AvatarImage src={`/alumni-${alumni.id}.jpg`} alt={alumni.name} />
                    <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {alumni.name}
                    </h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                        <span>{alumni.degree} '{alumni.graduationYear}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-primary" />
                        <span>{alumni.position} at {alumni.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{alumni.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {alumni.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {alumni.skills.slice(0, 4).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Contact Actions */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button size="sm" className="flex-1">
                    <Mail className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-3 w-3 mr-1" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No alumni found matching your search criteria.
            </p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedYear("all-years");
              setSelectedDepartment("all-departments");
            }}>
              Clear All Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Directory;