import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-2xl font-bold text-primary-foreground">HC</div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Patient Feedback</h1>
          <p className="text-muted-foreground">Choose how you received your survey</p>
        </div>

        {/* Entry Point Cards */}
        <div className="space-y-4">
          <Card 
            className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] border-2"
            onClick={() => navigate('/sms')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">SMS Message</h3>
                <p className="text-sm text-muted-foreground">I received a text message</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] border-2"
            onClick={() => navigate('/email')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-sm text-muted-foreground">I received an email</p>
              </div>
            </div>
          </Card>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          This is a prototype demonstration
        </p>
      </div>
    </div>
  );
};

export default Index;
