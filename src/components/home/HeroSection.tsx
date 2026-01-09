import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

export const HeroSection = () => {
  const scrollToPrograms = () => {
    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Radial Glow Effect */}
      <div className="absolute inset-0 gradient-radial-glow opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Premium Fitness Training
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 fade-in-up stagger-1">
            BUILD YOUR
            <br />
            <span className="text-gradient">STRONGEST</span>
            <br />
            BODY
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 fade-in-up stagger-2">
            Transform your physique with world-class trainers, cutting-edge equipment, 
            and personalized programs designed for results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
            <Button variant="hero" size="xl">
              Join Now
            </Button>
            <Button variant="heroOutline" size="xl">
              Book Free Trial
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="flex flex-wrap gap-8 md:gap-16 mt-16 fade-in-up stagger-4">
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">15K+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Members</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">50+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Expert Trainers</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">98%</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToPrograms}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-float"
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};
