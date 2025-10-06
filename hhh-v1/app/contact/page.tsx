import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { Briefcase, Mail, Phone, MapPin, Clock, Send, MessageSquare, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Contact - HeadHuntHive",
  description: "Get in touch with HeadHuntHive. We're here to help with your recruitment and career needs.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@headhunthive.com",
      link: "mailto:info@headhunthive.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567 (USA)\n+44 20 1234 5678 (UK)",
      link: "tel:+15551234567"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM\nSat-Sun: Closed",
      link: null
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Locations",
      details: "London, UK\nNew York, USA",
      link: null
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
              <Link href="/contact" className="text-primary font-semibold transition-colors">Contact</Link>
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
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Let&apos;s Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Whether you&apos;re looking to hire exceptional talent or advance your career, 
              we&apos;re here to help. Reach out today and let&apos;s discuss your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex flex-col p-6 rounded-xl border bg-card hover:shadow-md transition-all"
              >
                <div className="text-primary mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-20 md:py-24 bg-muted/50">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 md:p-10 border shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">I am a *</Label>
                  <select
                    id="inquiryType"
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select...</option>
                    <option value="employer">Employer looking to hire</option>
                    <option value="jobseeker">Job seeker</option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team is ready to assist you with your recruitment needs or career goals. 
                  We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">For Employers</h3>
                    <p className="text-muted-foreground">
                      Looking to hire? Tell us about your open positions and ideal candidates. 
                      We&apos;ll develop a tailored recruitment strategy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">For Job Seekers</h3>
                    <p className="text-muted-foreground">
                      Ready to take the next step in your career? Share your background and 
                      goals, and we&apos;ll connect you with relevant opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">General Inquiries</h3>
                    <p className="text-muted-foreground">
                      Have questions about our services or process? We&apos;re happy to provide 
                      information and guidance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Prefer to Talk?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a consultation call with one of our recruitment specialists.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 rounded-2xl p-12 md:p-16 border text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              In Partnership with MattyJacks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Our technology infrastructure is powered by{" "}
              <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                MattyJacks
              </a>
              , enabling us to deliver cutting-edge recruitment solutions.
            </p>
            <Button variant="outline" asChild>
              <a href="https://mattyjacks.com/contact" target="_blank" rel="noopener noreferrer">
                Contact MattyJacks
              </a>
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
