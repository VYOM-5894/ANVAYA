import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your KIIT Alumni Connect assistant. I can help you navigate the website, find alumni, learn about events, or connect with mentors. How can I assist you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot responses for demonstration
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage("");
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("alumni") || lowerInput.includes("directory")) {
      return "You can explore our alumni directory to find fellow KIIT graduates. Use the search filters to find alumni by graduation year, department, or company. Visit the Directory page to get started!";
    } else if (lowerInput.includes("event") || lowerInput.includes("meeting")) {
      return "Check out our Events page to see upcoming alumni gatherings, networking events, and workshops. You can register for events and connect with other attendees.";
    } else if (lowerInput.includes("mentor") || lowerInput.includes("guidance") || lowerInput.includes("career")) {
      return "Our platform connects current students with experienced alumni mentors. Browse the alumni directory to find professionals in your field of interest and reach out to them directly.";
    } else if (lowerInput.includes("donate") || lowerInput.includes("give") || lowerInput.includes("support")) {
      return "Thank you for your interest in supporting KIIT! Visit our Give Back page to make donations that help current students through scholarships and campus improvements.";
    } else if (lowerInput.includes("register") || lowerInput.includes("join") || lowerInput.includes("sign up")) {
      return "To join KIIT Alumni Connect, click the Register button in the top navigation. You'll need to provide your graduation details and create a profile to connect with the community.";
    } else if (lowerInput.includes("job") || lowerInput.includes("recruitment") || lowerInput.includes("hiring")) {
      return "Our platform includes job opportunities shared by alumni and partner companies. Check the events section for career fairs, or connect directly with alumni in your field for networking opportunities.";
    } else if (lowerInput.includes("help") || lowerInput.includes("how") || lowerInput.includes("navigate")) {
      return "I can help you navigate the platform! Key sections include: Directory (find alumni), Events (upcoming gatherings), Give Back (donations), and your Profile (manage your information). What specific area would you like to explore?";
    } else {
      return "I'm here to help you navigate KIIT Alumni Connect! You can ask me about finding alumni, upcoming events, career guidance, donations, or how to use the platform. What would you like to know more about?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full w-14 h-14 professional-button shadow-lg transition-all duration-300 ${
            isOpen ? "scale-0" : "scale-100"
          }`}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-2xl border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-sm font-medium flex items-center">
                <Bot className="h-4 w-4 mr-2" />
                KIIT Alumni Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 hover:bg-primary-hover"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {message.sender === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                        </div>
                        <div
                          className={`rounded-lg px-3 py-2 text-sm ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me anything..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="sm" className="professional-button">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;