
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 bg-yellow-400 text-black rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">ECO</span>
            </div>
            <span className="font-bold text-xl md:text-2xl">
              <span className="text-yellow-400">Taxi</span>{" "}
              <span className="text-taxi">Eco Transport</span>
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#accueil" className="text-sm font-medium hover:text-yellow-400 transition-colors">
            Accueil
          </a>
          <a href="#services" className="text-sm font-medium hover:text-yellow-400 transition-colors">
            Services
          </a>
          <a href="#apropos" className="text-sm font-medium hover:text-yellow-400 transition-colors">
            À propos
          </a>
          <a href="#temoignages" className="text-sm font-medium hover:text-yellow-400 transition-colors">
            Témoignages
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-yellow-400 transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black"
            asChild
          >
            <a href="tel:0630162925" className="flex items-center gap-2">
              <Phone size={16} />
              <span>06 30 16 29 25</span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#accueil" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#apropos" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#temoignages" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 flex flex-col gap-2">
              <Button 
                variant="outline" 
                className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                asChild
              >
                <a href="tel:0630162925" className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>06 30 16 29 25</span>
                </a>
              </Button>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
