import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Sanctum Map", href: "/map" },
    { name: "Library of Living Meaning", href: "/library" },
    { name: "Dignity Coin", href: "/dignity-coin" },
    { name: "Pain Transmutation", href: "/transmutation" },
    { name: "Fellowship", href: "/fellowship" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-sacred rounded-full animate-sacred-pulse"></div>
            <span className="text-2xl font-bold bg-gradient-sacred bg-clip-text text-transparent">
              Atlas Sanctum
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-sacred transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button variant="outline" className="border-primary/30 hover:bg-gradient-sacred hover:text-primary-foreground">
              Enter Sanctum
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-sacred">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 pt-3">
              <Button className="w-full bg-gradient-sacred text-primary-foreground">
                Enter Sanctum
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;