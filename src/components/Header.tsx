import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, User, Users, Calendar, Heart, LogOut, Briefcase, Shield } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navigationItems = [
    { label: "Directory", href: "/directory", icon: Users },
    { label: "Events", href: "/events", icon: Calendar },
    { label: "Give Back", href: "/donate", icon: Heart },
    { label: "Recruiter Portal", href: "/recruiter", icon: Briefcase },
    { label: "Admin Portal", href: "/admin", icon: Shield },
  ];

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      toast({
        title: "Signed out successfully",
        description: "You have been logged out.",
      });
    }
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-display font-extrabold tracking-wide text-primary">
              KIIT Alumni Connect
            </Link>
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
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="professional-button">Join Network</Button>
                </Link>
              </>
            )}
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
              {user ? (
                <Button variant="ghost" className="justify-start w-full" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="justify-start w-full">
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="professional-button justify-start w-full">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;