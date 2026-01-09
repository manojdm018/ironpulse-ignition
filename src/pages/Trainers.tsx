import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Award, Users, Clock } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const allTrainers = [
  {
    name: "Marcus Steel",
    role: "Head Strength Coach",
    certifications: ["CSCS", "NSCA-CPT", "USAW-L2"],
    image: trainer1,
    specialization: "Powerlifting & Bodybuilding",
    bio: "With over 15 years of experience, Marcus has trained Olympic athletes and helped hundreds of clients achieve their strength goals. His methodical approach combines scientific principles with practical coaching.",
    experience: "15+ years",
    clientsTrained: "500+",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Sarah Chen",
    role: "Transformation Specialist",
    certifications: ["ACE-CPT", "Precision Nutrition L2", "TRX Certified"],
    image: trainer2,
    specialization: "Fat Loss & HIIT",
    bio: "Sarah's high-energy sessions and holistic approach to transformation have earned her a reputation for delivering lasting results. She specializes in metabolic conditioning and nutrition coaching.",
    experience: "10+ years",
    clientsTrained: "350+",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "David Brooks",
    role: "Mobility Expert",
    certifications: ["RYT-500", "FMS", "NASM-CES"],
    image: trainer3,
    specialization: "Yoga & Recovery",
    bio: "David brings a unique blend of athletic performance and mindful movement. His recovery protocols have helped elite athletes and everyday warriors move better and feel stronger.",
    experience: "12+ years",
    clientsTrained: "400+",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
];

const Trainers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Our Team
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4 mb-6">
                WORLD-CLASS <span className="text-gradient">COACHES</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Our certified trainers are dedicated to your success. With decades of combined experience, 
                they'll guide you every step of your fitness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="container mx-auto px-4 pb-24">
          <div className="space-y-16">
            {allTrainers.map((trainer, index) => (
              <Card key={trainer.name} variant="glass" className="overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative aspect-square md:aspect-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
                      {trainer.role}
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">
                      {trainer.name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {trainer.bio}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold">{trainer.experience}</p>
                          <p className="text-xs text-muted-foreground">Experience</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold">{trainer.clientsTrained}</p>
                          <p className="text-xs text-muted-foreground">Clients Trained</p>
                        </div>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Certifications</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trainer.certifications.map((cert) => (
                          <span key={cert} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social + CTA */}
                    <div className="flex items-center gap-4">
                      <Button variant="hero">Book Session</Button>
                      <div className="flex gap-2">
                        <a href={trainer.socials.instagram} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a href={trainer.socials.twitter} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href={trainer.socials.linkedin} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Trainers;
