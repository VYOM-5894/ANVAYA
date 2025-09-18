import { useState } from "react";
import { Heart, Users, GraduationCap, Building, Star, CreditCard, Banknote, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [selectedCause, setSelectedCause] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const impactAreas = [
    {
      id: "scholarships",
      icon: GraduationCap,
      title: "Student Scholarships",
      description: "Support deserving students with merit-based and need-based scholarships",
      impact: "₹50,000 funds one semester for a student",
      raised: "₹12,50,000",
      goal: "₹25,00,000"
    },
    {
      id: "infrastructure", 
      icon: Building,
      title: "Campus Infrastructure",
      description: "Help modernize laboratories, libraries, and learning facilities",
      impact: "₹1,00,000 upgrades one laboratory setup",
      raised: "₹8,75,000",
      goal: "₹20,00,000"
    },
    {
      id: "programs",
      icon: Users,
      title: "Alumni Programs",
      description: "Fund networking events, mentorship programs, and career development",
      impact: "₹25,000 organizes one networking event",
      raised: "₹3,50,000",
      goal: "₹10,00,000"
    },
    {
      id: "research",
      icon: Star,
      title: "Research & Innovation",
      description: "Support student and faculty research projects and innovation initiatives",
      impact: "₹75,000 funds one research project",
      raised: "₹6,25,000",
      goal: "₹15,00,000"
    }
  ];

  const predefinedAmounts = ["1000", "2500", "5000", "10000", "25000", "50000"];
  const paymentMethods = [
    { id: "upi", label: "UPI", icon: Smartphone },
    { id: "card", label: "Credit/Debit Card", icon: CreditCard },
    { id: "netbanking", label: "Net Banking", icon: Banknote }
  ];

  const getProgressPercentage = (raised: string, goal: string) => {
    const raisedNum = parseInt(raised.replace(/[₹,]/g, ''));
    const goalNum = parseInt(goal.replace(/[₹,]/g, ''));
    return Math.min((raisedNum / goalNum) * 100, 100);
  };

  const handleAmountSelection = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount("");
  };

  const getCurrentAmount = () => {
    return customAmount || selectedAmount;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Give Back to <span className="text-accent">KIIT</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your support creates lasting impact for current students and future generations. 
            Every contribution helps build a stronger KIIT community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Impact Areas */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Where Your Support Makes a Difference
              </h2>
              
              <div className="space-y-6">
                {impactAreas.map((area) => {
                  const progress = getProgressPercentage(area.raised, area.goal);
                  
                  return (
                    <Card 
                      key={area.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedCause === area.id 
                          ? 'ring-2 ring-accent shadow-md' 
                          : 'hover:shadow-sm'
                      }`}
                      onClick={() => setSelectedCause(area.id)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <area.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{area.title}</CardTitle>
                            <CardDescription className="text-sm">
                              {area.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{area.raised} of {area.goal}</span>
                          </div>
                          
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-accent rounded-full h-2 transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          
                          <p className="text-xs text-accent font-medium">
                            {area.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Make Your Donation</CardTitle>
                <CardDescription>
                  Choose your donation amount and help support KIIT's mission
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Donation Type */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Donation Type</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">One-time donation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly donation</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Amount (₹)</Label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => handleAmountSelection(amount)}
                        className="h-12"
                      >
                        ₹{parseInt(amount).toLocaleString('en-IN')}
                      </Button>
                    ))}
                  </div>
                  
                  <Input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="text-center text-lg"
                  />
                </div>

                {/* Selected Cause Display */}
                {selectedCause && (
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <p className="text-sm font-medium text-accent">
                      Supporting: {impactAreas.find(a => a.id === selectedCause)?.title}
                    </p>
                  </div>
                )}

                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 9876543210" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Share why you're supporting KIIT..."
                    className="min-h-20"
                  />
                </div>

                {/* Anonymous Donation */}
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="anonymous" 
                    checked={isAnonymous}
                    onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                  />
                  <Label htmlFor="anonymous" className="text-sm">
                    Make this donation anonymous
                  </Label>
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Payment Method</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {paymentMethods.map((method) => (
                      <Button key={method.id} variant="outline" className="justify-start h-12">
                        <method.icon className="h-4 w-4 mr-3" />
                        {method.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Donate Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent-hover text-accent-foreground text-lg py-6"
                  disabled={!getCurrentAmount()}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate {getCurrentAmount() ? `₹${parseInt(getCurrentAmount()).toLocaleString('en-IN')}` : ''}
                  {donationType === 'monthly' ? '/month' : ''}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your donation is secure and encrypted. You will receive a tax-deductible receipt via email.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Statistics */}
        <section className="mt-16 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Alumni Impact
            </h2>
            <p className="text-muted-foreground text-lg">
              See how KIIT alumni contributions have made a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">₹2.3 Cr</div>
              <div className="text-muted-foreground">Total Raised This Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">850+</div>
              <div className="text-muted-foreground">Students Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">25+</div>
              <div className="text-muted-foreground">Infrastructure Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">1,200+</div>
              <div className="text-muted-foreground">Alumni Donors</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;