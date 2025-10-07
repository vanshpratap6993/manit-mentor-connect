import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Pitch" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "business", label: "Business Model" },
  { id: "usp", label: "Our Edge" },
  { id: "roadmap", label: "Roadmap" },
  { id: "marketing", label: "Marketing" },
  { id: "budget", label: "Budget" },
  { id: "vision", label: "Vision" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
      )}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
              MANITech Coaching
            </div>
            
            <div className="hidden md:flex gap-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  onClick={() => scrollToSection(section.id)}
                  className="hover:bg-primary/10"
                >
                  {section.label}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-md pt-20">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                onClick={() => scrollToSection(section.id)}
                className="justify-start text-lg"
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
