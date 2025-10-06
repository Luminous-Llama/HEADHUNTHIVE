import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { Briefcase, Building2, GraduationCap, Heart, DollarSign, Laptop, HardHat, Users, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const industries = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Engineering",
      description: "From software to civil engineers, we connect top technical talent with innovative companies."
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Legal",
      description: "Specialized recruitment for solicitors, barristers, paralegals, and corporate counsel."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Healthcare",
      description: "Connecting healthcare professionals with leading medical institutions and practices."
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Finance",
      description: "Elite financial professionals for banking, accounting, and investment firms."
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "IT & Technology",
      description: "Tech talent for digital transformation, cybersecurity, and software development."
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: "Construction",
      description: "Skilled professionals for construction, project management, and site supervision."
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
              <Globe className="w-4 h-4" />
              <span>Serving UK & USA Markets</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Your Premier Recruiting Partner for <span className="text-primary">Elite Talent</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              HeadHuntHive specializes in connecting exceptional professionals with leading organizations 
              across engineering, legal, healthcare, finance, IT, and construction sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-lg">
                Find Talent
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Explore Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across multiple industries, delivering tailored recruitment solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="flex flex-col p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-muted-foreground flex-1">{industry.description}</p>
                <Button variant="link" className="mt-4 p-0 h-auto justify-start">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 md:py-24 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose HeadHuntHive?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With operations in both the UK and USA, we bring a transatlantic perspective to talent 
                acquisition. Our deep industry knowledge and extensive networks ensure we deliver the 
                right candidates for your organization.
              </p>
              <div className="space-y-4">
                {[
                  "Extensive network across UK and USA markets",
                  "Industry-specialized recruitment consultants",
                  "Rigorous candidate vetting process",
                  "Proven track record with leading companies",
                  "Personalized service and ongoing support"
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
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Placements</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Partner Companies</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 rounded-2xl p-12 md:p-16 border">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Powered by MattyJacks Partnership
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                HeadHuntHive is proud to partner with <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">MattyJacks</a>, 
                a leading technology and consulting firm specializing in custom AI solutions, web development, 
                and elite freelancer networks. This partnership enables us to leverage cutting-edge technology 
                and innovative solutions to deliver exceptional recruitment services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Custom Tech</div>
                  <p className="text-sm text-muted-foreground">AI-powered matching algorithms</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Elite Network</div>
                  <p className="text-sm text-muted-foreground">Access to global talent pool</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Innovation</div>
                  <p className="text-sm text-muted-foreground">Modern recruitment solutions</p>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="outline" asChild>
                  <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer">
                    Learn About MattyJacks
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Whether you&apos;re seeking top talent or exploring new opportunities, 
            HeadHuntHive is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              For Employers
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              For Job Seekers
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
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Engineering</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Legal</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Healthcare</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Finance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="#partnership" className="hover:text-foreground transition-colors">Partnership</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">MattyJacks Partnership</a></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Twitter</Link></li>
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
