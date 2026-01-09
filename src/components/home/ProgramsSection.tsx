import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Flame, TrendingUp, Flower2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build raw power and functional strength with progressive overload techniques and compound movements.",
    duration: "8-12 weeks",
    level: "All Levels",
  },
  {
    icon: Flame,
    title: "Fat Loss",
    description: "Torch body fat with high-intensity workouts and metabolic conditioning for lasting results.",
    duration: "6-10 weeks",
    level: "Intermediate",
  },
  {
    icon: TrendingUp,
    title: "Muscle Building",
    description: "Maximize hypertrophy with scientifically-designed programs for lean muscle gains.",
    duration: "10-16 weeks",
    level: "Intermediate",
  },
  {
    icon: Flower2,
    title: "Yoga & Mobility",
    description: "Enhance flexibility, recovery, and mind-body connection with expert-led sessions.",
    duration: "Ongoing",
    level: "All Levels",
  },
];

export const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Our Programs
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            FIND YOUR <span className="text-gradient">PERFECT</span> FIT
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're just starting or pushing past plateaus, our expert-designed programs 
            deliver real results. Choose your path to transformation.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Card key={program.title} variant="program" className="group">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-6">
                  {program.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                  <span className="bg-muted px-3 py-1 rounded-full">{program.duration}</span>
                  <span className="bg-muted px-3 py-1 rounded-full">{program.level}</span>
                </div>
                <Button variant="outline" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/programs">
            <Button variant="neon" size="lg">
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
