import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Marcus Steel",
    role: "Head Strength Coach",
    certifications: "CSCS, NSCA-CPT",
    image: trainer1,
    specialization: "Powerlifting & Bodybuilding",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Sarah Chen",
    role: "Transformation Specialist",
    certifications: "ACE-CPT, Precision Nutrition",
    image: trainer2,
    specialization: "Fat Loss & HIIT",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "David Brooks",
    role: "Mobility Expert",
    certifications: "RYT-500, FMS",
    image: trainer3,
    specialization: "Yoga & Recovery",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
];

export const TrainersSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Expert Trainers
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            MEET YOUR <span className="text-gradient">COACHES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            World-class certified professionals dedicated to your transformation. 
            Every rep, every set, every goal — we're with you.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <Card key={trainer.name} variant="glass" className="group overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Social Icons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={trainer.socials.instagram}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.socials.twitter}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.socials.linkedin}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="font-display text-2xl tracking-wider mb-1">{trainer.name}</h3>
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
                  {trainer.role}
                </p>
                <p className="text-muted-foreground text-sm mb-2">{trainer.specialization}</p>
                <p className="text-xs text-muted-foreground/70">{trainer.certifications}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/trainers">
            <Button variant="heroOutline" size="lg">
              View All Trainers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
