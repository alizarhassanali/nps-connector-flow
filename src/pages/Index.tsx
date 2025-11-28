import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ClinicLogo from "@/components/ClinicLogo";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Patient Feedback</h1>
          <p className="text-muted-foreground">Choose how you received your survey</p>
        </div>

        {/* Entry Point Cards */}
        <Card className="p-8 shadow-lg space-y-6 bg-card/95 backdrop-blur">
          <div className="space-y-4">
            <button 
              className="w-full p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] border-2 rounded-lg bg-card hover:bg-muted"
              onClick={() => navigate('/sms')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg">SMS Message</h3>
                  <p className="text-sm text-muted-foreground">I received a text message</p>
                </div>
              </div>
            </button>

            <button 
              className="w-full p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] border-2 rounded-lg bg-card hover:bg-muted"
              onClick={() => navigate('/email')}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-sm text-muted-foreground">I received an email</p>
                </div>
              </div>
            </button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            This is a prototype demonstration
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
