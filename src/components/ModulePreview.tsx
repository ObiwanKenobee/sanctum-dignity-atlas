import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Map, BookOpen, Coins, Zap, Users, Globe2, Heart, Brain } from "lucide-react";

const ModulePreview = () => {
  const modules = [
    {
      id: "sanctum-map",
      title: "Sanctum Map",
      description: "Witness the sacred geography of global capital flows overlaid with their ecological and ethical impacts.",
      icon: Map,
      color: "primary",
      features: ["Real-time financial tracking", "Ecological impact overlays", "Sacred geometry visualizations"],
      href: "/map"
    },
    {
      id: "library",
      title: "Library of Living Meaning",
      description: "Navigate the infinite corridors where ancient wisdom meets modern understanding.",
      icon: BookOpen,
      color: "secondary",
      features: ["AI-curated wisdom", "Cross-cultural insights", "Narrative pathways"],
      href: "/library"
    },
    {
      id: "dignity-coin",
      title: "Dignity Coin",
      description: "Where every token carries the weight of human worth and planetary regeneration.",
      icon: Coins,
      color: "earth-green",
      features: ["Covenant-based investments", "Impact tracking", "Sacred capital stewardship"],
      href: "/dignity-coin"
    },
    {
      id: "transmutation",
      title: "Pain Transmutation Engine",
      description: "Transform global and personal crises into healing narratives and sacred poetry.",
      icon: Zap,
      color: "accent",
      features: ["AI-powered transformation", "Healing narratives", "Symbolic rituals"],
      href: "/transmutation"
    },
    {
      id: "fellowship",
      title: "Regenerative Custodianship",
      description: "Join the global fellowship of sacred capital stewards and wisdom keepers.",
      icon: Users,
      color: "secondary",
      features: ["Global community", "Stewardship tools", "Ceremonial practices"],
      href: "/fellowship"
    }
  ];

  const getGradientClass = (color: string) => {
    switch (color) {
      case "primary": return "bg-gradient-sacred";
      case "secondary": return "bg-gradient-wisdom";
      case "earth-green": return "bg-gradient-earth";
      case "accent": return "bg-gradient-to-br from-accent to-accent/70";
      default: return "bg-gradient-sacred";
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case "primary": return "text-primary";
      case "secondary": return "text-secondary";
      case "earth-green": return "text-earth-green";
      case "accent": return "text-accent";
      default: return "text-primary";
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-ethereal">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Globe2 className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Sacred Modules</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-sacred bg-clip-text text-transparent">
            Explore the Sanctum
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each sacred space within Atlas Sanctum offers a unique pathway to understanding 
            the deeper connections between capital, consciousness, and planetary healing.
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.id}
                className="group relative overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-ethereal transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 ${getGradientClass(module.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="p-8 relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-full ${getGradientClass(module.color)} mb-6 animate-sacred-pulse`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 ${getTextColor(module.color)}`}>
                    {module.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Heart className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <Button 
                    variant="ghost" 
                    className={`w-full group-hover:${getGradientClass(module.color)} group-hover:text-white transition-all duration-300`}
                  >
                    Enter Sacred Space
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-card/40 backdrop-blur-sm border-primary/20 shadow-sacred p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-primary animate-sacred-pulse" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4 bg-gradient-sacred bg-clip-text text-transparent">
              Ready to Begin Your Sacred Journey?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of wisdom keepers, regenerative investors, and sacred capital stewards 
              who are redefining what money means in service of life.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-sacred text-primary-foreground shadow-sacred hover:shadow-ethereal transition-all duration-300"
              >
                Begin Initiation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary/50 text-secondary hover:bg-gradient-wisdom hover:text-secondary-foreground"
              >
                Download Custodian's Codex
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModulePreview;