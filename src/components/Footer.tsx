import { Heart, Globe, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Sacred Pathways",
      links: [
        { name: "Sanctum Map", href: "/map" },
        { name: "Library of Living Meaning", href: "/library" },
        { name: "Dignity Coin", href: "/dignity-coin" },
        { name: "Pain Transmutation", href: "/transmutation" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Fellowship Portal", href: "/fellowship" },
        { name: "Custodian's Codex", href: "/codex" },
        { name: "Sacred Ceremonies", href: "/ceremonies" },
        { name: "Wisdom Circles", href: "/circles" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Getting Started", href: "/start" },
        { name: "Sacred Economics", href: "/economics" },
        { name: "Regenerative Finance", href: "/finance" },
        { name: "Developer APIs", href: "/api" }
      ]
    }
  ];

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Ethereal Background */}
      <div className="absolute inset-0 bg-gradient-ethereal opacity-30"></div>
      
      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-sacred rounded-full animate-sacred-pulse"></div>
              <span className="text-2xl font-bold bg-gradient-sacred bg-clip-text text-transparent">
                Atlas Sanctum
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A sacred temple where capital remembers its highest purpose: 
              to serve life, honor dignity, and weave regenerative futures.
            </p>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full hover:bg-primary/10">
                <Globe className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full hover:bg-primary/10">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full hover:bg-primary/10">
                <Sparkles className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-sacred bg-clip-text text-transparent mb-2">
                Sacred Transmissions
              </h3>
              <p className="text-muted-foreground">
                Receive wisdom, updates, and invitations to sacred ceremonies.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <input 
                type="email" 
                placeholder="Enter your sacred email"
                className="px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
              <Button className="bg-gradient-sacred text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Join
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Atlas Sanctum. A sacred space for regenerative capital.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Sacred Privacy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Sacred Terms
            </a>
            <a href="/ethics" className="text-muted-foreground hover:text-primary transition-colors">
              Ethical Guidelines
            </a>
          </div>
        </div>

        {/* Sacred Symbol */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-sacred/10 border border-primary/20">
            <Heart className="w-6 h-6 text-primary animate-sacred-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;