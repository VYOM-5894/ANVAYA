import { useState, useEffect, useRef } from "react";
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
  const [messages, setMessages] = useState<Message[]>(() => {
    // restore chat from localStorage if available
    const saved = localStorage.getItem("chatMessages");
    return saved
      ? JSON.parse(saved, (key, value) =>
          key === "timestamp" ? new Date(value) : value
        )
      : [
          {
            id: 1,
            text: "👋 Hello! I'm your KIIT Alumni Connect assistant. I can help you navigate the website, find alumni, learn about events, or connect with mentors. How can I assist you today?",
            sender: "bot",
            timestamp: new Date(),
          },
        ];
  });
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // auto-scroll to bottom when messages update
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Bot typing effect
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: Date.now(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("alumni") || lowerInput.includes("directory")) {
      return "🔎 You can explore our alumni directory to find fellow KIIT graduates by year, department, or company. Visit the Directory page!";
    } else if (lowerInput.includes("event") || lowerInput.includes("meeting")) {
      return "📅 Check out our Events page to see alumni gatherings, networking events, and workshops. You can register and connect with others.";
    } else if (
      lowerInput.includes("mentor") ||
      lowerInput.includes("guidance") ||
      lowerInput.includes("career")
    ) {
      return "🎓 Our platform connects students with experienced alumni mentors. Browse the alumni directory to find professionals in your field.";
    } else if (
      lowerInput.includes("donate") ||
      lowerInput.includes("give") ||
      lowerInput.includes("support")
    ) {
      return "💝 Thank you for supporting KIIT! Visit our Give Back page to donate and help current students.";
    } else if (
      lowerInput.includes("register") ||
      lowerInput.includes("join") ||
      lowerInput.includes("sign up")
    ) {
      return "📝 To join KIIT Alumni Connect, click Register in the navigation bar. Provide your graduation details and create your profile.";
    } else if (
      lowerInput.includes("job") ||
      lowerInput.includes("recruitment") ||
      lowerInput.includes("hiring")
    ) {
      return "💼 Our platform includes job postings shared by alumni and companies. Check the Jobs/Events section or network directly with alumni!";
    } else if (
      lowerInput.includes("help") ||
      lowerInput.includes("how") ||
      lowerInput.includes("navigate")
    ) {
      return "ℹ️ I can guide you! Key sections:\n- Directory (find alumni)\n- Events (networking & workshops)\n- Give Back (donations)\n- Profile (your info).\nWhich one would you like?";
    } else {
      return "🤝 I'm here to help! Ask me about alumni, events, mentorship, donations, or jobs.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Alumni Directory",
    "Upcoming Events",
    "Find a Mentor",
    "Donate",
    "Job Opportunities",
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full w-14 h-14 shadow-lg transition-all duration-300 ${
            isOpen ? "scale-0" : "scale-100"
          }`}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-[28rem]">
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
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.sender === "user"
                            ? "flex-row-reverse space-x-reverse"
                            : ""
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <User className="h-3 w-3" />
                          ) : (
                            <Bot className="h-3 w-3" />
                          )}
                        </div>
                        <div
                          className={`rounded-lg px-3 py-2 text-sm shadow-sm ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          <p>{message.text}</p>
                          <span className="text-[10px] opacity-70 block mt-1">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="rounded-lg px-3 py-2 text-sm bg-muted text-foreground animate-pulse">
                        Bot is typing...
                      </div>
                    </div>
                  )}
                  <div ref={scrollRef}></div>
                </div>
              </ScrollArea>

              {/* Quick Replies */}
              <div className="flex gap-2 px-4 py-2 flex-wrap border-t border-border bg-muted/30">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                      setInputMessage(reply);
                      handleSendMessage();
                    }}
                  >
                    {reply}
                  </Button>
                ))}
              </div>

              {/* Input Field */}
              <div className="p-3 border-t border-border">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me anything..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="professional-button"
                  >
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
