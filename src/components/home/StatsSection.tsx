import { useEffect, useRef, useState } from "react";
import { Users, Trophy, Target, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Members Trained",
  },
  {
    icon: Trophy,
    value: 50,
    suffix: "+",
    label: "Certified Coaches",
  },
  {
    icon: Target,
    value: 98,
    suffix: "%",
    label: "Success Rate",
  },
  {
    icon: Star,
    value: 500,
    suffix: "+",
    label: "Success Stories",
  },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ icon: Icon, value, suffix, label, delay }: { 
  icon: typeof Users; 
  value: number; 
  suffix: string; 
  label: string;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className="glass-card text-center group hover-lift"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <p className="stat-number">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-muted-foreground uppercase tracking-wider text-sm mt-2">
        {label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label} 
              {...stat} 
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
