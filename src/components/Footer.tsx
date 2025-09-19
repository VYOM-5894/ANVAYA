import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Alumni Directory", href: "/directory" },
    { label: "Events Calendar", href: "/events" },
    { label: "Career Services", href: "#" },
    { label: "Mentorship Program", href: "#" },
  ];

  const supportLinks = [
    { label: "Give Back", href: "/donate" },
    { label: "Volunteer", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Help Center", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4">KIIT Alumni Connect</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Strengthening lifelong connections and empowering our global community of KIIT graduates.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span>alumni@kiit.ac.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <span>+91 674 272 7777</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-accent" />
                <span>KIIT Campus, Patia, Bhubaneswar, Odisha 751024</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Get the latest alumni news and event updates.
            </p>
            
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground mb-6 w-full">
              Subscribe to Newsletter
            </Button>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2025 KIIT Alumni Connect. All rights reserved.
            </div>
            
            <div className="flex items-center text-sm text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-accent" />
              <span>for our KIIT alumni community</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
