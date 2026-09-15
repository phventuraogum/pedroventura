import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { lazy, Suspense, useEffect } from "react";
import Home from "./pages/Home";

const Projetos = lazy(() => import("./pages/Projetos"));
const ProjetoDetalhe = lazy(() => import("./pages/ProjetoDetalhe"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Architecture = lazy(() => import("./pages/Architecture"));
const Experience = lazy(() => import("./pages/Experience"));
const Stack = lazy(() => import("./pages/Stack"));
const Arquiteturas = lazy(() => import("./pages/Arquiteturas"));
const Contato = lazy(() => import("./pages/Contato"));
const Certificacoes = lazy(() => import("./pages/Certificacoes"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="container-wide py-32" />}>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/trabalhos" element={<Projetos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />
        <Route path="/systems/:slug" element={<CaseStudy />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/arquiteturas" element={<Arquiteturas />} />
        <Route path="/certificacoes" element={<Certificacoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
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
