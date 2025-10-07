import { Navigation } from "@/components/Navigation";
import { PitchSection } from "@/components/PitchSection";
import { FeatureCard } from "@/components/FeatureCard";
import { TimelineItem } from "@/components/TimelineItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Target,
  BookOpen,
  MessageCircle,
  Award,
  Smartphone,
  Instagram,
  Youtube,
  Share2,
  DollarSign,
  Lightbulb,
  Rocket,
  Heart
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <PitchSection 
        id="hero" 
        title="MANITech Coaching" 
        subtitle="By Students, For Students"
        gradient
      >
        <div className="text-center space-y-8">
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            We're building an online coaching platform run by <span className="font-bold">MANIT Bhopal students</span> — where top engineering minds guide school students for JEE, board exams, and career decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">₹1L</div>
              <div className="text-sm opacity-90">Initial Investment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">MANIT Mentors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">∞</div>
              <div className="text-sm opacity-90">Potential</div>
            </div>
          </div>
        </div>
      </PitchSection>

      {/* Problem Section */}
      <PitchSection 
        id="problem" 
        title="The Problem" 
        subtitle="Education is broken. Let's fix it."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={DollarSign}
            title="Expensive Coaching"
            description="Traditional coaching centers charge ₹1-2 lakh/year, making quality education inaccessible to many talented students."
            accent
          />
          <FeatureCard
            icon={Users}
            title="No Real Mentorship"
            description="Students don't get guidance from people who've actually cleared JEE recently. They need relatable mentors, not just teachers."
            accent
          />
          <FeatureCard
            icon={MessageCircle}
            title="Generic Approach"
            description="One-size-fits-all teaching doesn't work. Students need personalized guidance tailored to their learning style."
            accent
          />
        </div>
      </PitchSection>

      {/* Solution Section */}
      <PitchSection 
        id="solution" 
        title="Our Solution" 
        subtitle="Connect MANIT achievers with aspiring students"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={BookOpen}
            title="Subject Teaching"
            description="Physics, Chemistry, Maths for classes 8-12 with concept clarity focus."
          />
          <FeatureCard
            icon={Target}
            title="JEE Guidance"
            description="Strategic preparation for JEE, NTSE, and Olympiads by recent qualifiers."
          />
          <FeatureCard
            icon={MessageCircle}
            title="1-on-1 Mentorship"
            description="Personal doubt solving and study planning sessions."
          />
          <FeatureCard
            icon={GraduationCap}
            title="Career Counseling"
            description="College insights, branch selection, and future planning guidance."
          />
        </div>
      </PitchSection>

      {/* Business Model */}
      <PitchSection 
        id="business" 
        title="Business Model" 
        subtitle="Affordable for students, profitable for growth"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-2 border-primary">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹500-1500</div>
              <div className="text-sm text-muted-foreground mb-4">per month</div>
              <h3 className="font-bold mb-2">Subscription Model</h3>
              <p className="text-sm text-muted-foreground">Weekly live classes + doubt sessions. 70% to tutor, 30% to platform.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-accent">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">₹200-500</div>
              <div className="text-sm text-muted-foreground mb-4">per session</div>
              <h3 className="font-bold mb-2">Session-Based</h3>
              <p className="text-sm text-muted-foreground">Pay per 1-on-1 session for counseling or focused subject help.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-success">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-success mb-2">₹1499</div>
              <div className="text-sm text-muted-foreground mb-4">3 months</div>
              <h3 className="font-bold mb-2">Mentorship Pack</h3>
              <p className="text-sm text-muted-foreground">Complete guidance package with weekly calls and study materials.</p>
            </CardContent>
          </Card>
        </div>
      </PitchSection>

      {/* USP */}
      <PitchSection 
        id="usp" 
        title="Why We'll Win" 
        subtitle="Learn from those who made it"
        gradient
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Verified MANITians</h3>
              <p className="text-lg opacity-90">Every teacher is a verified MANIT student who has cracked JEE and understands the real struggle.</p>
            </CardContent>
          </Card>
          <div className="text-center text-xl font-semibold italic opacity-90">
            "From classrooms of MANIT to your home"
          </div>
        </div>
      </PitchSection>

      {/* Roadmap */}
      <PitchSection 
        id="roadmap" 
        title="Execution Roadmap" 
        subtitle="6-month plan from launch to scale"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <TimelineItem
            phase="Month 1"
            title="Build Core Team"
            description="Assemble the teaching squad"
            items={[
              "Recruit 10-15 motivated MANIT students",
              "Assign subject specializations",
              "Conduct training workshops"
            ]}
            color="primary"
          />
          <TimelineItem
            phase="Month 2"
            title="Build Brand"
            description="Create online presence"
            items={[
              "Launch website and social media",
              "Record demo classes",
              "Host free JEE webinar"
            ]}
            color="primary"
          />
          <TimelineItem
            phase="Month 3"
            title="Launch"
            description="Start monetization"
            items={[
              "Open paid batch registrations",
              "Partner with local schools",
              "Onboard first 50 students"
            ]}
            color="accent"
          />
          <TimelineItem
            phase="Month 4-6"
            title="Scale"
            description="Expand reach"
            items={[
              "Add more MANIT mentors",
              "Launch state board batches",
              "Implement referral program"
            ]}
            color="success"
          />
        </div>
      </PitchSection>

      {/* Marketing */}
      <PitchSection 
        id="marketing" 
        title="Marketing Strategy" 
        subtitle="Low-cost, high-impact channels"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Instagram} title="Instagram Reels" description="Daily study tips and JEE hacks from MANITians" />
          <FeatureCard icon={Youtube} title="YouTube Shorts" description="1-minute concept explanations that go viral" />
          <FeatureCard icon={Smartphone} title="Telegram Groups" description="Free daily doubt solving to build trust" />
          <FeatureCard icon={Share2} title="School Visits" description="Demo sessions at schools in Bhopal and nearby cities" />
        </div>
      </PitchSection>

      {/* Budget */}
      <PitchSection id="budget" title="Budget Allocation" subtitle="₹1 Lakh investment breakdown">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 space-y-4">
              {[
                { label: "Website/App Development", amount: "₹20,000" },
                { label: "Marketing (ads, posters, reels)", amount: "₹25,000" },
                { label: "Equipment (mic, lighting, whiteboard)", amount: "₹15,000" },
                { label: "Tutor Training & Materials", amount: "₹10,000" },
                { label: "Admin & Miscellaneous", amount: "₹10,000" },
                { label: "Emergency Fund", amount: "₹20,000" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-border pb-3 last:border-0">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-primary font-bold">{item.amount}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </PitchSection>

      {/* Vision */}
      <PitchSection id="vision" title="Our Vision" gradient>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-8 mb-8">
            <Rocket className="w-16 h-16" />
            <Heart className="w-16 h-16" />
            <Lightbulb className="w-16 h-16" />
          </div>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            "We're not just teaching — we're building a culture of mentorship. Making quality education accessible through peer learning."
          </p>
          <p className="text-xl opacity-90">
            We democratize education, one student at a time.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            Let's Make It Happen
          </Button>
        </div>
      </PitchSection>

      {/* Footer */}
      <footer className="bg-muted py-8 text-center text-muted-foreground">
        <p>MANITech Coaching - By Students, For Students</p>
      </footer>
    </div>
  );
};

export default Index;
