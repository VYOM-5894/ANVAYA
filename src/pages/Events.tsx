import { useState } from "react";
import { Calendar, MapPin, Users, Clock, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // Comprehensive events database
  const allEvents = [
    {
      id: 1,
      title: "KIIT Annual Tech Alumni Reunion",
      date: "2024-12-15",
      time: "4:00 PM - 8:00 PM",
      location: "KIIT Campus, Bhubaneswar",
      attendees: 256,
      maxAttendees: 300,
      description: "Connect with fellow KIIT tech graduates, share industry insights, and explore collaboration opportunities in our beautiful campus setting. Network with professionals from top tech companies and startups.",
      eventType: "reunion" as const,
      featured: true,
      image: "/event-reunion.jpg"
    },
    {
      id: 2,
      title: "Career Guidance Workshop",
      date: "2024-11-08",
      time: "2:00 PM - 5:00 PM", 
      location: "KIIT Student Activity Center",
      attendees: 124,
      maxAttendees: 200,
      description: "Alumni sharing career experiences with current students. Interactive sessions covering industry trends, skill development, and job market insights for various engineering disciplines.",
      eventType: "professional" as const
    },
    {
      id: 3,
      title: "Startup Founders Meetup",
      date: "2024-11-22",
      time: "6:30 PM - 9:00 PM",
      location: "KIIT Technology Business Incubator",
      attendees: 78,
      maxAttendees: 100,
      description: "Meet KIIT alumni who have founded successful startups. Learn about entrepreneurship, funding, and building tech companies in India's growing startup ecosystem.",
      eventType: "networking" as const
    },
    {
      id: 4,
      title: "Women in Engineering Panel",
      date: "2024-10-30",
      time: "3:00 PM - 5:30 PM",
      location: "KIIT Auditorium",
      attendees: 189,
      maxAttendees: 250,
      description: "Celebrating achievements of KIIT women engineers. Panel discussion on career growth, work-life balance, and breaking barriers in tech and engineering fields.",
      eventType: "professional" as const,
      image: "/event-women.jpg"
    },
    {
      id: 5,
      title: "Diwali Cultural Celebration",
      date: "2024-11-12",
      time: "7:00 PM - 10:00 PM",
      location: "KIIT Cultural Center",
      attendees: 312,
      maxAttendees: 400,
      description: "Celebrate the festival of lights with fellow KIIT alumni and their families. Traditional performances, cultural programs, and community bonding over festive food and activities.",
      eventType: "social" as const,
      featured: true
    },
    {
      id: 6,
      title: "AI & Machine Learning Symposium", 
      date: "2024-12-05",
      time: "9:00 AM - 6:00 PM",
      location: "KIIT School of Computer Engineering",
      attendees: 145,
      maxAttendees: 200,
      description: "Technical symposium featuring KIIT alumni working in AI/ML at leading companies. Workshops, technical talks, and hands-on sessions on latest developments in artificial intelligence.",
      eventType: "professional" as const
    }
  ];

  const eventTypes = ["networking", "professional", "social", "reunion"];
  const months = [
    "October 2024", "November 2024", "December 2024", 
    "January 2025", "February 2025", "March 2025"
  ];

  // Filter events based on search criteria
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = searchTerm === "" ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === "" || event.eventType === selectedType;
    
    const eventMonth = new Date(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const matchesMonth = selectedMonth === "" || eventMonth === selectedMonth;
    
    return matchesSearch && matchesType && matchesMonth;
  });

  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= new Date());
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < new Date());

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Alumni Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Stay connected with the KIIT community through networking events, professional development sessions, cultural celebrations, and reunions.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-lg border border-border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events by title, location, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                {eventTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Months</SelectItem>
                {months.map(month => (
                  <SelectItem key={month} value={month}>{month}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setSelectedType("");
              setSelectedMonth("");
            }}>
              <Filter className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming" className="text-lg">
              Upcoming Events ({upcomingEvents.length})
            </TabsTrigger>
            <TabsTrigger value="past" className="text-lg">
              Past Events ({pastEvents.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-6">
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-lg mb-4">
                  No upcoming events found matching your criteria.
                </p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedType("");
                  setSelectedMonth("");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-6">
            {pastEvents.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-lg mb-4">
                  No past events found matching your criteria.
                </p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedType("");
                  setSelectedMonth("");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Featured Events Highlight */}
        {upcomingEvents.some(event => event.featured) && (
          <section className="mt-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Featured Events
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents
                .filter(event => event.featured)
                .map((event) => (
                  <div key={event.id} className="alumni-card ring-2 ring-accent/20">
                    <Badge className="mb-4 bg-accent text-accent-foreground">
                      Featured Event
                    </Badge>
                    <EventCard {...event} />
                  </div>
                ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Events;


import EventCard from "@/components/EventCard";

const Events = () => {
  const events = [
    {
      title: "Alumni Networking Meetup",
      date: "2025-09-25",
      time: "5:00 PM - 8:00 PM",
      location: "KIIT Campus 25",
      attendees: 120,
      maxAttendees: 200,
      description:
        "Join us for an evening of networking, sharing experiences, and building valuable connections with alumni and current students.",
      image: "https://source.unsplash.com/random/800x600?networking",
      eventType: "networking" as const,
      featured: true,
    },
    {
      title: "Professional Development Workshop",
      date: "2025-10-05",
      time: "10:00 AM - 1:00 PM",
      location: "KIIT Seminar Hall",
      attendees: 80,
      maxAttendees: 100,
      description:
        "Boost your career with expert-led sessions on skill development, industry trends, and career guidance.",
      image: "https://source.unsplash.com/random/800x600?workshop",
      eventType: "professional" as const,
    },
    {
      title: "Social Gathering & Alumni Reunion",
      date: "2025-11-15",
      time: "6:00 PM - 11:00 PM",
      location: "KIIT Auditorium",
      attendees: 200,
      maxAttendees: 300,
      description:
        "Celebrate together with music, memories, and an exciting reunion evening at the KIIT Auditorium.",
      image: "https://source.unsplash.com/random/800x600?party",
      eventType: "reunion" as const,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
