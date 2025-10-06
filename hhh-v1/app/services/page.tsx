import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { Briefcase, Search, Target, Users, Award, Zap, Shield, TrendingUp, CheckCircle2, ArrowRight, Brain, FileText, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Services - HeadHuntHive",
  description: "Comprehensive recruitment services for employers and job seekers across the UK and USA.",
};

export default function ServicesPage() {
  const employerServices = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Executive Search",
      description: "Confidential search and recruitment of senior-level executives and C-suite positions."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Permanent Recruitment",
      description: "Full-cycle recruitment for permanent positions across all seniority levels."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Contract Staffing",
      description: "Flexible contract and temporary staffing solutions for short-term needs."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Talent Mapping",
      description: "Strategic talent intelligence and market mapping for workforce planning."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Retained Search",
      description: "Dedicated retained search services for critical and hard-to-fill positions."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Rapid Hire",
      description: "Fast-track recruitment for urgent hiring needs with guaranteed delivery."
    }
  ];

  const candidateServices = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Career Consultation",
      description: "One-on-one career strategy sessions to help you achieve your professional goals."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Resume Optimization",
      description: "Professional resume review and optimization to make you stand out."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Interview Coaching",
      description: "Expert interview preparation and coaching to boost your confidence."
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Salary Negotiation",
      description: "Professional guidance on salary negotiation and benefits packages."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Career Transition",
      description: "Support for career changes and transitions into new industries."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Confidential Search",
      description: "Discreet job search services for professionals currently employed."
    }
  ];

  const industries = [
    "Engineering",
    "Legal",
    "Healthcare",
    "Finance & Accounting",
    "IT & Technology",
    "Construction & Real Estate"
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
              <Link href="/find-employees" className="hover:text-primary transition-colors">Find Employees</Link>
              <Link href="/find-jobs" className="hover:text-primary transition-colors">Find Jobs</Link>
              <Link href="/services" className="text-primary font-semibold transition-colors">Services</Link>
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Comprehensive <span className="text-primary">Recruitment Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Tailored solutions for employers and job seekers across the UK and USA markets. 
              We deliver results through expertise, technology, and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="#employer-services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Employer Services Section */}
      <section id="employer-services" className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              For Employers
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Employer Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end recruitment solutions designed to help you build exceptional teams
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employerServices.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground flex-1">{service.description}</p>
                <Button variant="link" className="mt-4 p-0 h-auto justify-start" asChild>
                  <Link href="/contact">Learn more <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Services Section */}
      <section id="candidate-services" className="w-full py-20 md:py-24 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              For Job Seekers
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Candidate Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional career services to help you land your dream role
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidateServices.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground flex-1">{service.description}</p>
                <Button variant="link" className="mt-4 p-0 h-auto justify-start" asChild>
                  <Link href="/contact">Get started <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Industry Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across multiple high-demand sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
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

      {/* Why Choose Us Section */}
      <section className="w-full py-20 md:py-24 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose HeadHuntHive?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep industry knowledge, cutting-edge technology from our MattyJacks 
                partnership, and a personalized approach to deliver exceptional results for both 
                employers and candidates.
              </p>
              <div className="space-y-4">
                {[
                  "Industry-specialized recruitment consultants",
                  "AI-powered candidate matching technology",
                  "Extensive UK and USA market networks",
                  "Rigorous screening and vetting process",
                  "Transparent communication throughout",
                  "Proven track record of successful placements",
                  "Partnership with MattyJacks for tech innovation",
                  "Dedicated support and ongoing consultation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Placements Made</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Client Companies</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MattyJacks Partnership Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 rounded-2xl p-12 md:p-16 border">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Powered by Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our partnership with <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">MattyJacks</a> enables 
                us to leverage cutting-edge AI technology, custom recruitment platforms, and innovative 
                solutions that give our clients a competitive advantage in talent acquisition.
              </p>
              <Button size="lg" variant="outline" asChild>
                <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer">
                  Learn About Our Technology
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Whether you&apos;re looking to hire top talent or advance your career, 
            we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/find-jobs">Browse Jobs</Link>
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
