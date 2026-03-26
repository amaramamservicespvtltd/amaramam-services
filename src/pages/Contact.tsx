import { Mail, Phone, MapPin, Send, UserRound } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialIcons from "@/components/ui/SocialIcons";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to work together? We'd love to hear from you. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={formRef}
            className={`grid lg:grid-cols-2 gap-10 ${formVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {/* Contact Form */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-5">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full justify-center"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:info@amaramam.com"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        info@amaramam.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <UserRound size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">HR / Careers</h3>
                      <a
                        href="mailto:hr@amaramam.com"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        hr@amaramam.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+917093581158"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        +91 7093581158
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-foreground/70">
                        Vijayawada, Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Connect With Us</h3>
                <SocialIcons variant="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-10 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Location" subtitle="Find us in Vijayawada, Andhra Pradesh" />
          <div className="rounded-xl overflow-hidden shadow-custom-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122273.85249838475!2d80.54309635!3d16.506173799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1706280000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amaramam Service Pvt Ltd Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
