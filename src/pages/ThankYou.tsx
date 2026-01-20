import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heart, ExternalLink } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";

const ThankYou = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const googleReviewUrl = "https://www.google.com/search?sca_esv=59038b22a1d9f5de&rlz=1C1KNTJ_enPK1089PK1089&sxsrf=AE3TifPHfKcSA6jBCGey73Gxat9RrS3f5Q:1764236487446&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMUAFYh1IO2BB2WgbISr5OcXUOXh53JkLdMwNp-QNPBJ0Dzfsf55arE5bUbrkLziX-CrSKqJSYL4HTgJC2zDlSj5MAHuNtMb7bm6i2dZaNI2o_EmJRA%3D%3D&q=Generation+Fertility+Vaughan+Reviews&sa=X&ved=2ahUKEwjn8oiJhZKRAxUraqQEHd97JoUQ0bkNegQIIhAE&biw=1920&bih=945&dpr=1#lrd=0x882b2bd869b98351:0xd6626ba53e5afe6f,3,,,,";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-8 shadow-lg text-center space-y-6 bg-card/95 backdrop-blur">
          
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-accent fill-accent" />
          </div>

          {/* Thank You Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              {t('thankYou.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('thankYou.promoterMessage')}
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-4">
            <p className="text-sm text-foreground font-medium">
              {t('thankYou.shareQuestion')}
            </p>
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
              size="lg"
            >
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {t('thankYou.googleReview')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full"
            >
              {t('thankYou.noThanks')}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
