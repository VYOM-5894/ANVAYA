import { Heart, Users, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Student Scholarships",
      description: "Support the next generation of leaders with educational opportunities"
    },
    {
      icon: Users,
      title: "Alumni Programs", 
      description: "Fund networking events and professional development initiatives"
    },
    {
      icon: Heart,
      title: "Campus Improvements",
      description: "Help enhance facilities and create inspiring learning environments"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Give Back to Your <span className="text-accent">Alma Mater</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Your support creates lasting impact for current students and future generations. 
            Every contribution, no matter the size, makes a meaningful difference.
          </p>
        </div>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {impactAreas.map((area, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <area.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="opacity-80 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4"
            >
              <Heart className="mr-2 h-5 w-5" />
              Make a Donation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
            >
              Learn About Giving
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            Questions about giving? Contact our alumni relations team at{" "}
            <a href="mailto:giving@university.edu" className="underline text-accent hover:text-accent-hover">
              giving@university.edu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;