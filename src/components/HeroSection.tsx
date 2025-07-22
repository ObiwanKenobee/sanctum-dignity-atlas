import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Globe, Heart } from "lucide-react";
import heroImage from "@/assets/hero-sanctum.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80"></div>
      </div>

      {/* Floating Sacred Geometry */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/20 rounded-full animate-wisdom-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-secondary/20 rounded-full animate-wisdom-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-accent/20 rounded-full animate-wisdom-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Sacred Introduction */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Sacred Financial Awakening</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-sacred bg-clip-text text-transparent animate-ethereal-glow">
                Atlas Sanctum
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Where capital becomes sacred, wisdom flows eternal, and every transaction carries the weight of dignity.
              <br />
              <span className="text-primary font-medium">A counter-empire to traditional finance.</span>
            </p>
          </div>

          {/* Poetic Vision Statement */}
          <Card className="bg-card/60 backdrop-blur-sm border-primary/20 shadow-sacred mb-12 p-8">
            <blockquote className="text-lg md:text-xl italic text-foreground leading-relaxed">
              "In this digital temple, we transmute the pain of extraction into the poetry of regeneration.
              Here, money remembers its sacred purpose: to nourish life, honor dignity, and weave the dreams of countless generations into reality."
            </blockquote>
            <cite className="block mt-4 text-sm text-muted-foreground">— The Custodian's Codex</cite>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-sacred text-primary-foreground shadow-sacred hover:shadow-ethereal transition-all duration-300 transform hover:scale-105"
            >
              Begin Sacred Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary/50 text-secondary hover:bg-gradient-wisdom hover:text-secondary-foreground transition-all duration-300"
            >
              Explore the Sanctum Map
              <Globe className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Sacred Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/40 backdrop-blur-sm border-primary/20 p-6 hover:shadow-sacred transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Dignity Preserved</div>
            </Card>
            
            <Card className="bg-card/40 backdrop-blur-sm border-earth-green/20 p-6 hover:shadow-sacred transition-all duration-300">
              <div className="text-3xl font-bold text-earth-green mb-2">♾️</div>
              <div className="text-sm text-muted-foreground">Wisdom Connections</div>
            </Card>
            
            <Card className="bg-card/40 backdrop-blur-sm border-secondary/20 p-6 hover:shadow-sacred transition-all duration-300">
              <div className="text-3xl font-bold text-secondary mb-2">✨</div>
              <div className="text-sm text-muted-foreground">Pain Transmuted</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <Heart className="w-6 h-6 text-primary mb-2" />
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;