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
  featured = false
}: EventCardProps) => {
  const eventTypeColors = {
    networking: "bg-blue-100 text-blue-800 border-blue-200",
    professional: "bg-green-100 text-green-800 border-green-200", 
    social: "bg-purple-100 text-purple-800 border-purple-200",
    reunion: "bg-accent/10 text-accent border-accent/20"
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className={`alumni-card ${featured ? 'ring-2 ring-accent/20' : ''}`}>
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
              {attendees} attending
              {maxAttendees && ` / ${maxAttendees} max`}
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
            Register
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;