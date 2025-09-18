import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-alumni.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "30,000+", label: "Alumni Worldwide" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Briefcase, value: "500+", label: "Companies" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alumni graduation ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Your Lifelong Connection
            <br />
            <span className="text-accent">Starts Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Connect with fellow alumni, discover career opportunities, 
            and give back to the community that shaped your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="professional-button text-lg px-8 py-4">
              Join the Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="outline-button text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Explore Directory
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;