import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    role: "Lost 45 lbs in 6 months",
    content: "IRONPULSE completely transformed my approach to fitness. The trainers aren't just coaches—they're mentors who genuinely care about your progress. I've never felt stronger.",
    rating: 5,
    avatar: "M",
  },
  {
    name: "Emily Rodriguez",
    role: "Gained 15 lbs muscle mass",
    content: "After years of struggling with inconsistent workouts, IRONPULSE gave me the structure and motivation I needed. The community here is incredible—everyone pushes each other to be better.",
    rating: 5,
    avatar: "E",
  },
  {
    name: "James Wilson",
    role: "Marathon runner to lifter",
    content: "I was skeptical about strength training, but the coaches showed me how to complement my running with proper resistance work. My performance has never been better.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Sarah Kim",
    role: "First competition at 40",
    content: "Age is just a number here. The trainers adapted every program to my needs and helped me compete in my first bodybuilding competition at 40. Life-changing experience.",
    rating: 5,
    avatar: "S",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            REAL <span className="text-gradient">RESULTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from members who've transformed their lives with IRONPULSE.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <Card variant="glass" className="p-8 md:p-12 text-center relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
              <span className="font-display text-3xl text-primary-foreground">
                {testimonials[currentIndex].avatar}
              </span>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-lg md:text-xl text-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <p className="font-display text-xl tracking-wider">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-primary text-sm uppercase tracking-wider">
              {testimonials[currentIndex].role}
            </p>
          </Card>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
