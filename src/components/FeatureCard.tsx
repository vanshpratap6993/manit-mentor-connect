import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: boolean;
}

export const FeatureCard = ({ icon: Icon, title, description, accent = false }: FeatureCardProps) => {
  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:scale-105 hover:shadow-elegant border-2",
      accent ? "border-accent bg-accent/5" : "border-border"
    )}>
      <CardContent className="p-6">
        <div className={cn(
          "w-14 h-14 rounded-lg flex items-center justify-center mb-4",
          accent ? "bg-gradient-accent" : "bg-gradient-hero"
        )}>
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
