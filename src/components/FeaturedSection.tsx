import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlumniCard from "./AlumniCard";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  // Extended alumni data (10 total)
  const featuredAlumni = [
    {
      id: 1,
      name: "Priya Sharma",
      graduationYear: "2015",
      degree: "Computer Science & Engineering",
      company: "Google India",
      position: "Senior Software Engineer",
      location: "Bangalore, India",
      bio: "Leading AI initiatives in search algorithms. Passionate about mentoring students in tech careers and promoting women in engineering at KIIT."
    },
    {
      id: 2,
      name: "Rahul Patel",
      graduationYear: "2012",
      degree: "Electronics & Telecommunications",
      company: "TCS",
      position: "Technical Architect",
      location: "Mumbai, India",
      bio: "Specializing in IoT solutions and digital transformation. Active KIIT alumni volunteer and career mentor."
    },
    {
      id: 3,
      name: "Dr. Anjali Mishra",
      graduationYear: "2008",
      degree: "Biotechnology",
      company: "Indian Institute of Science",
      position: "Research Scientist",
      location: "Bangalore, India",
      bio: "Pioneering research in genetic engineering and biomedical applications."
    },
    {
      id: 4,
      name: "Arjun Mehta",
      graduationYear: "2016",
      degree: "Information Technology",
      company: "Microsoft",
      position: "Cloud Solutions Engineer",
      location: "Hyderabad, India",
      bio: "Focused on Azure cloud adoption strategies and enterprise modernization."
    },
    {
      id: 5,
      name: "Sneha Reddy",
      graduationYear: "2014",
      degree: "Mechanical Engineering",
      company: "Mahindra & Mahindra",
      position: "Product Design Engineer",
      location: "Pune, India",
      bio: "Working on next-gen EV design and sustainable mobility solutions."
    },
    {
      id: 6,
      name: "Karan Verma",
      graduationYear: "2017",
      degree: "Civil Engineering",
      company: "Larsen & Toubro",
      position: "Project Manager",
      location: "Delhi, India",
      bio: "Managing large-scale infrastructure projects across India."
    },
    {
      id: 7,
      name: "Ritika Gupta",
      graduationYear: "2013",
      degree: "Electronics & Communication",
      company: "Qualcomm",
      position: "Chip Design Engineer",
      location: "Noida, India",
      bio: "Specialist in semiconductor design and wireless communication systems."
    },
    {
      id: 8,
      name: "Manish Kumar",
      graduationYear: "2011",
      degree: "Electrical Engineering",
      company: "Siemens",
      position: "Automation Specialist",
      location: "Chennai, India",
      bio: "Expert in industrial automation and renewable energy systems."
    },
    {
      id: 9,
      name: "Neha Agarwal",
      graduationYear: "2009",
      degree: "MBA",
      company: "Infosys",
      position: "HR Director",
      location: "Bangalore, India",
      bio: "Driving people strategy, leadership programs, and talent development."
    },
    {
      id: 10,
      name: "Vivek Raj",
      graduationYear: "2018",
      degree: "Computer Science & Engineering",
      company: "Flipkart",
      position: "Data Scientist",
      location: "Bangalore, India",
      bio: "Working on predictive analytics and customer behavior insights."
    },
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "KIIT Annual Tech Alumni Reunion",
      date: "2024-12-15",
      time: "4:00 PM - 8:00 PM",
      location: "KIIT Campus, Bhubaneswar",
      attendees: 256,
      maxAttendees: 300,
      description: "Connect with fellow KIIT tech graduates, share industry insights, and explore collaboration opportunities.",
      eventType: "networking" as const,
      featured: true
    },
    {
      title: "Career Guidance Workshop",
      date: "2024-11-08",
      time: "2:00 PM - 5:00 PM",
      location: "KIIT Student Activity Center",
      attendees: 124,
      maxAttendees: 200,
      description: "Alumni sharing career experiences with current students.",
      eventType: "professional" as const
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Featured Alumni Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              Featured Alumni
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover inspiring stories from our accomplished graduates
            </p>
          </div>
          <Link to="/directory">
            <Button variant="ghost" className="text-primary hover:text-primary-hover">
              View All Profiles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAlumni.map((alumni) => (
            <Link key={alumni.id} to={`/alumni/${alumni.id}`}>
              <AlumniCard {...alumni} />
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground text-lg">
              Join us for networking, professional development, and community building
            </p>
          </div>
          <Link to="/events">
            <Button variant="ghost" className="text-primary hover:text-primary-hover">
              View Event Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-muted/30 rounded-2xl p-8 lg:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Our Impact Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how our alumni community continues to make a difference in the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">$2.3M</div>
            <div className="text-muted-foreground">Donated This Year</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">1,200+</div>
            <div className="text-muted-foreground">Students Mentored</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
              <Star className="h-8 w-8 text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">500+</div>
            <div className="text-muted-foreground">Career Connections Made</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSection;
