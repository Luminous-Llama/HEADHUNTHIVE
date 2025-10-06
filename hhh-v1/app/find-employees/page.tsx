import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { Briefcase, Users, Target, CheckCircle2, ArrowRight, Award, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Find Employees - HeadHuntHive",
  description: "Connect with top talent across engineering, legal, healthcare, finance, IT, and construction sectors.",
};

export default function FindEmployeesPage() {
  const benefits = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Targeted Recruitment",
      description: "Access pre-screened candidates that match your exact requirements and company culture."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Fast Hiring Process",
      description: "Reduce time-to-hire with our streamlined recruitment process and extensive talent network."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Quality Guarantee",
      description: "All candidates undergo rigorous vetting to ensure they meet our high standards."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "UK & USA Reach",
      description: "Tap into our transatlantic network of exceptional professionals."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Share Your Requirements",
      description: "Tell us about your ideal candidate, role requirements, and company culture."
    },
    {
      step: "2",
      title: "Candidate Sourcing",
      description: "We leverage our extensive network to identify and approach the best talent."
    },
    {
      step: "3",
      title: "Screening & Interviews",
      description: "Our team conducts thorough screenings and presents you with top candidates."
    },
    {
      step: "4",
      title: "Hire & Onboard",
      description: "We support you through the offer process and initial onboarding phase."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full border-b border-b-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6">
          <div className="flex gap-8 items-center">
            <Link href={"/"} className="font-bold text-2xl flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              HeadHuntHive
            </Link>
            <div className="hidden md:flex gap-6 text-sm">
              <Link href="/find-employees" className="text-primary font-semibold transition-colors">Find Employees</Link>
              <Link href="/find-jobs" className="hover:text-primary transition-colors">Find Jobs</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button variant="default" size="sm" className="hidden sm:flex" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm">
              <Users className="w-4 h-4" />
              <span>For Employers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Find the <span className="text-primary">Perfect Talent</span> for Your Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Access our curated network of exceptional professionals across engineering, legal, 
              healthcare, finance, IT, and construction sectors in the UK and USA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/contact">
                  Start Hiring
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make hiring exceptional talent simple, fast, and effective
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 md:py-24 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to finding your ideal candidate
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialist recruitment across multiple high-demand sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Engineering",
              "Legal",
              "Healthcare",
              "Finance",
              "IT & Technology",
              "Construction"
            ].map((industry, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-6 rounded-xl border bg-card hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss your hiring needs and find the perfect candidates for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-12 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-xl mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                HeadHuntHive
              </div>
              <p className="text-sm text-muted-foreground">
                Premier recruiting services across UK & USA markets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/find-employees" className="hover:text-foreground transition-colors">Find Employees</Link></li>
                <li><Link href="/services" className="hover:text-foreground transition-colors">Our Services</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/find-jobs" className="hover:text-foreground transition-colors">Find Jobs</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Submit Resume</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">MattyJacks Partnership</a></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 HeadHuntHive. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
