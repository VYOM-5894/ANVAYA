import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees?: number;
  description: string;
  image?: string;
  eventType: "networking" | "professional" | "social" | "reunion";
  featured?: boolean;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  attendees,
  maxAttendees,
  description,
  image,
  eventType,
  featured = false,
}: EventCardProps) => {
  const eventTypeColors = {
    networking: "bg-blue-100 text-blue-800 border-blue-200",
    professional: "bg-green-100 text-green-800 border-green-200",
    social: "bg-purple-100 text-purple-800 border-purple-200",
    reunion: "bg-accent/10 text-accent border-accent/20",
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`alumni-card border rounded-lg p-6 shadow-sm hover:shadow-md transition ${featured ? "ring-2 ring-accent/20" : ""}`}
    >
      {image && (
        <div className="relative mb-4 -m-6 mt-0">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {featured && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              Featured Event
            </Badge>
          )}
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={eventTypeColors[eventType]} variant="outline">
                {eventType.charAt(0).toUpperCase() + eventType.slice(1)}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
              {title}
            </h3>
          </div>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
            <span>
              {attendees} attending {maxAttendees && ` / ${maxAttendees} max`}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
            Learn More
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            Register <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

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

