import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const GoogleReview = () => {
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJI0GQVwnSKogR-AjLY2ZDAcE";

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-8 shadow-lg text-center space-y-6">
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
