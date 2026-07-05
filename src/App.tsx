import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import ProjetoDetalhe from "./pages/ProjetoDetalhe";
import Stack from "./pages/Stack";
import Arquiteturas from "./pages/Arquiteturas";
import Contato from "./pages/Contato";
import Certificacoes from "./pages/Certificacoes";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/trabalhos" element={<Projetos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/arquiteturas" element={<Arquiteturas />} />
        <Route path="/certificacoes" element={<Certificacoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <TopNav />
            <div className="flex-1">
              <AnimatedRoutes />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
