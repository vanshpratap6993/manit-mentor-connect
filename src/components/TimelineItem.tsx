import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  phase: string;
  title: string;
  description: string;
  items: string[];
  color?: "primary" | "accent" | "success";
}

export const TimelineItem = ({ phase, title, description, items, color = "primary" }: TimelineItemProps) => {
  const colorClasses = {
    primary: "bg-gradient-hero",
    accent: "bg-gradient-accent",
    success: "bg-gradient-success"
  };

  return (
    <Card className="border-2 transition-all duration-300 hover:shadow-card">
      <CardContent className="p-6">
        <Badge className={`${colorClasses[color]} text-primary-foreground mb-3`}>
          {phase}
        </Badge>
        <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className={`inline-block w-1.5 h-1.5 rounded-full ${colorClasses[color]} mt-2 flex-shrink-0`} />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
