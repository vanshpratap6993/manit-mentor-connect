import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PitchSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export const PitchSection = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  gradient = false 
}: PitchSectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "min-h-screen flex items-center justify-center py-20 px-6 scroll-mt-20",
        gradient && "bg-gradient-hero text-primary-foreground",
        className
      )}
    >
      <div className="container max-w-6xl">
        <div className="animate-fade-in">
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-4 text-center",
            gradient ? "text-primary-foreground" : "text-foreground"
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn(
              "text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto",
              gradient ? "text-primary-foreground/90" : "text-muted-foreground"
            )}>
              {subtitle}
            </p>
          )}
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};
