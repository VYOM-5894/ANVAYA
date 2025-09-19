import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"; // ✅ Make sure Header is included
import Index from "./pages/Index";
import Directory from "./pages/Directory";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import AdminPortal from "./pages/AdminPortal";
import RecruiterPortal from "./pages/RecruiterPortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <SonnerToaster />
      <BrowserRouter>
        {/* ✅ Persistent Header */}
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/recruiter" element={<RecruiterPortal />} />
          {/* Catch-all for unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

