import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlumniCard from "./AlumniCard";
import EventCard from "./EventCard";

const FeaturedSection = () => {
  // Sample featured alumni data
  const featuredAlumni = [
    {
      name: "Sarah Chen",
      graduationYear: "2015",
      degree: "Computer Science",
      company: "Meta",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      bio: "Leading AI initiatives in social media platforms. Passionate about mentoring students in tech careers and diversity in engineering."
    },
    {
      name: "Michael Rodriguez",
      graduationYear: "2012", 
      degree: "Business Administration",
      company: "Goldman Sachs",
      position: "Investment Director",
      location: "New York, NY",
      bio: "Specializing in sustainable finance and ESG investments. Active alumni volunteer and career mentor for business students."
    },
    {
      name: "Dr. Emily Watson",
      graduationYear: "2008",
      degree: "Biomedical Engineering", 
      company: "Johns Hopkins",
      position: "Research Director",
      location: "Baltimore, MD",
      bio: "Pioneering medical device innovations. Leading research in minimally invasive surgical technologies and medical AI applications."
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "Annual Tech Alumni Networking Night",
      date: "2024-10-15",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Hub, Downtown",
      attendees: 156,
      maxAttendees: 200,
      description: "Connect with fellow tech professionals, share insights, and explore collaboration opportunities in an intimate networking environment.",
      eventType: "networking" as const,
      featured: true
    },
    {
      title: "Career Mentorship Speed Connect",
      date: "2024-10-22", 
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      attendees: 89,
      maxAttendees: 150,
      description: "Fast-paced mentorship connections between alumni and current students. Perfect for career guidance and professional development.",
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
          <Button variant="ghost" className="text-primary hover:text-primary-hover">
            View All Profiles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAlumni.map((alumni, index) => (
            <AlumniCard key={index} {...alumni} />
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
          <Button variant="ghost" className="text-primary hover:text-primary-hover">
            View Event Calendar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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