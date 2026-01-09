import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Flame, TrendingUp, Flower2, Timer, Zap, ArrowRight, Filter } from "lucide-react";

const allPrograms = [
  {
    icon: Dumbbell,
    title: "Strength Foundations",
    description: "Master the fundamentals of strength training with compound movements and progressive overload.",
    duration: "8 weeks",
    level: "Beginner",
    goal: "Build Strength",
    weeklySchedule: "3 days/week",
    featured: false,
  },
  {
    icon: Dumbbell,
    title: "Power Building",
    description: "Advanced strength and hypertrophy program combining powerlifting with bodybuilding techniques.",
    duration: "12 weeks",
    level: "Advanced",
    goal: "Build Strength",
    weeklySchedule: "5 days/week",
    featured: true,
  },
  {
    icon: Flame,
    title: "Fat Burn Express",
    description: "High-intensity interval training designed to maximize calorie burn and boost metabolism.",
    duration: "6 weeks",
    level: "Intermediate",
    goal: "Fat Loss",
    weeklySchedule: "4 days/week",
    featured: false,
  },
  {
    icon: Flame,
    title: "Shred & Tone",
    description: "Comprehensive fat loss program with cardio and resistance training for a lean physique.",
    duration: "10 weeks",
    level: "Beginner",
    goal: "Fat Loss",
    weeklySchedule: "5 days/week",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Hypertrophy Pro",
    description: "Science-based muscle building with optimal volume, intensity, and recovery protocols.",
    duration: "16 weeks",
    level: "Intermediate",
    goal: "Muscle Building",
    weeklySchedule: "5 days/week",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Lean Mass Gainer",
    description: "Strategic program for adding quality muscle while minimizing fat gain.",
    duration: "12 weeks",
    level: "Beginner",
    goal: "Muscle Building",
    weeklySchedule: "4 days/week",
    featured: false,
  },
  {
    icon: Flower2,
    title: "Flow & Restore",
    description: "Yoga-based program for flexibility, mindfulness, and active recovery.",
    duration: "Ongoing",
    level: "Beginner",
    goal: "Recovery",
    weeklySchedule: "3 days/week",
    featured: false,
  },
  {
    icon: Zap,
    title: "Athletic Performance",
    description: "Sports-specific training for speed, agility, and explosive power.",
    duration: "8 weeks",
    level: "Advanced",
    goal: "Performance",
    weeklySchedule: "4 days/week",
    featured: false,
  },
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Programs = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredPrograms = selectedLevel === "All" 
    ? allPrograms 
    : allPrograms.filter(p => p.level === selectedLevel);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Training Programs
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4 mb-6">
                YOUR <span className="text-gradient">PATH</span> TO GREATNESS
              </h1>
              <p className="text-muted-foreground text-lg">
                Choose from our expertly designed programs tailored to every fitness level and goal. 
                Each program includes detailed workout plans, nutrition guidance, and coach support.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Button>
            ))}
          </div>
        </section>

        {/* Programs Grid */}
        <section className="container mx-auto px-4 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <Card 
                key={program.title} 
                variant={program.featured ? "pricingFeatured" : "program"} 
                className="group relative"
              >
                {program.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <p className="text-primary text-sm font-medium uppercase tracking-wider">
                    {program.goal}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6">
                    {program.description}
                  </p>
                  
                  {/* Program Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Timer className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{program.level}</span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 mb-6">
                    📅 {program.weeklySchedule}
                  </div>

                  <Button variant="outline" className="w-full group/btn">
                    View Full Plan
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
