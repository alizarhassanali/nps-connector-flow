import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SMS from "./pages/SMS";
import Email from "./pages/Email";
import Survey from "./pages/Survey";
import ThankYou from "./pages/ThankYou";
import ThankYouPassive from "./pages/ThankYouPassive";
import GoogleReview from "./pages/GoogleReview";
import Feedback from "./pages/Feedback";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sms" element={<SMS />} />
          <Route path="/email" element={<Email />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you-passive" element={<ThankYouPassive />} />
          <Route path="/google-review" element={<GoogleReview />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/confirmation" element={<Confirmation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
