import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { Briefcase, GraduationCap, Building2, Heart, DollarSign, Laptop, HardHat, ArrowRight, CheckCircle2, TrendingUp, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Find Jobs - HeadHuntHive",
  description: "Discover exciting career opportunities across engineering, legal, healthcare, finance, IT, and construction sectors in the UK and USA.",
};

export default function FindJobsPage() {
  const jobCategories = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Engineering",
      count: "150+ positions",
      description: "Software, civil, mechanical, electrical, and aerospace engineering roles."
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Legal",
      count: "80+ positions",
      description: "Solicitors, barristers, paralegals, and in-house counsel opportunities."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Healthcare",
      count: "200+ positions",
      description: "Medical professionals, nurses, specialists, and healthcare administrators."
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Finance",
      count: "120+ positions",
      description: "Banking, accounting, investment, and financial analysis roles."
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "IT & Technology",
      count: "180+ positions",
      description: "Software development, cybersecurity, data science, and tech leadership."
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: "Construction",
      count: "90+ positions",
      description: "Project managers, site supervisors, engineers, and skilled trades."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Confidential Process",
      description: "Your job search remains private and secure throughout the entire process."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Guidance",
      description: "Dedicated recruiters who understand your industry and career goals."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Career Growth",
      description: "Access to roles that align with your career advancement objectives."
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Quality Employers",
      description: "We partner only with reputable companies committed to employee success."
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
              <Link href="/find-employees" className="hover:text-primary transition-colors">Find Employees</Link>
              <Link href="/find-jobs" className="text-primary font-semibold transition-colors">Find Jobs</Link>
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
              <Briefcase className="w-4 h-4" />
              <span>For Job Seekers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Find Your <span className="text-primary">Dream Career</span> Opportunity
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore exclusive job opportunities across engineering, legal, healthcare, finance, 
              IT, and construction sectors in the UK and USA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/contact">
                  Submit Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Browse Opportunities by Industry</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore hundreds of career opportunities across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobCategories.map((category, index) => (
              <div 
                key={index}
                className="flex flex-col p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-primary mb-4">{category.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                <div className="text-sm text-primary font-semibold mb-3">{category.count}</div>
                <p className="text-muted-foreground flex-1 mb-4">{category.description}</p>
                <Button variant="link" className="p-0 h-auto justify-start">
                  View jobs <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-24 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re committed to helping you find the perfect role for your career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl border bg-card"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your journey to the perfect role in four simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Your Profile",
                description: "Share your resume and career goals with our team."
              },
              {
                step: "2",
                title: "Consultation",
                description: "Discuss your skills, experience, and ideal opportunities."
              },
              {
                step: "3",
                title: "Job Matching",
                description: "We connect you with roles that align with your goals."
              },
              {
                step: "4",
                title: "Interview & Offer",
                description: "We support you through interviews and negotiations."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Benefits */}
      <section className="w-full py-20 md:py-24 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Access Exclusive Opportunities</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Many of our job openings are not advertised publicly. By working with HeadHuntHive, 
                you gain access to exclusive positions with leading employers in the UK and USA.
              </p>
              <div className="space-y-4">
                {[
                  "Access to hidden job market opportunities",
                  "Professional career coaching and advice",
                  "Resume and interview preparation support",
                  "Salary negotiation assistance",
                  "Long-term career partnership"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">800+</div>
                  <div className="text-sm text-muted-foreground">Active Job Listings</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Placements</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Submit your resume today and let us help you find the perfect career opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link href="/contact">Submit Resume</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/services">Learn More</Link>
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
