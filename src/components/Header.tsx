import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Users, Calendar, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Directory", href: "/directory", icon: Users },
    { label: "Events", href: "/events", icon: Calendar },
    { label: "Give Back", href: "/donate", icon: Heart },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-display font-bold text-primary">
              KIIT Alumni Connect
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="professional-button">
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center space-x-2 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" className="justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="professional-button justify-start">
                Register
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;