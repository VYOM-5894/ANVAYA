import { MapPin, Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AlumniCardProps {
  name: string;
  graduationYear: string;
  degree: string;
  company: string;
  position: string;
  location: string;
  profileImage?: string;
  bio?: string;
}

const AlumniCard = ({ 
  name, 
  graduationYear, 
  degree, 
  company, 
  position, 
  location, 
  profileImage,
  bio 
}: AlumniCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="alumni-card group cursor-pointer">
      <div className="flex items-start space-x-4 mb-4">
        <Avatar className="h-16 w-16 ring-2 ring-border">
          <AvatarImage src={profileImage} alt={name} />
          <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
            {name}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <GraduationCap className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{degree} '{graduationYear}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <Briefcase className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{position} at {company}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>

      {bio && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {bio}
        </p>
      )}

      <div className="flex justify-between items-center pt-4 border-t border-border">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary hover:text-primary-hover"
        >
          View Profile
          <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
        <Button 
          size="sm" 
          className="bg-accent hover:bg-accent-hover text-accent-foreground"
        >
          Connect
        </Button>
      </div>
    </div>
  );
};

export default AlumniCard;