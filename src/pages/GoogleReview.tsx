import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";

const GoogleReview = () => {
  const googleReviewUrl = "https://www.google.com/search?sca_esv=59038b22a1d9f5de&rlz=1C1KNTJ_enPK1089PK1089&sxsrf=AE3TifPHfKcSA6jBCGey73Gxat9RrS3f5Q:1764236487446&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMUAFYh1IO2BB2WgbISr5OcXUOXh53JkLdMwNp-QNPBJ0Dzfsf55arE5bUbrkLziX-CrSKqJSYL4HTgJC2zDlSj5MAHuNtMb7bm6i2dZaNI2o_EmJRA%3D%3D&q=Generation+Fertility+Vaughan+Reviews&sa=X&ved=2ahUKEwjn8oiJhZKRAxUraqQEHd97JoUQ0bkNegQIIhAE&biw=1920&bih=945&dpr=1#lrd=0x882b2bd869b98351:0xd6626ba53e5afe6f,3,,,,";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-8 shadow-lg text-center space-y-6 bg-card/95 backdrop-blur">
          
          {/* Google Icon Placeholder */}
          <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center border-4 border-primary shadow-lg">
            <ExternalLink className="w-10 h-10 text-primary" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Share Your Experience
            </h1>
            <p className="text-muted-foreground">
              Your review helps others find quality healthcare. It only takes a moment to share your thoughts on Google.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-4">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
              size="lg"
            >
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Open Google Review
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            
            <p className="text-xs text-muted-foreground">
              Opens in a new window
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GoogleReview;
