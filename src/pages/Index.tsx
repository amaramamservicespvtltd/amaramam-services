import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Shield, Users, Lightbulb, Headphones, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-tech.jpg";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs using cutting-edge technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure services for seamless business operations.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Expert guidance to align your technology strategy with business objectives.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business processes.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "24/7 technical support and maintenance services for uninterrupted operations.",
  },
];

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const trustPoints = [
  "Enterprise-Grade Solutions",
  "Dedicated Support Team",
  "Proven Track Record",
  "Industry Best Practices",
];

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-[85vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/70" />
      </div>
      
      {/* Tech Network Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="hsl(200 75% 45%)" />
              <circle cx="0" cy="0" r="1" fill="hsl(186 74% 45%)" />
              <circle cx="100" cy="0" r="1" fill="hsl(186 74% 45%)" />
              <circle cx="0" cy="100" r="1" fill="hsl(186 74% 45%)" />
              <circle cx="100" cy="100" r="1" fill="hsl(186 74% 45%)" />
              <line x1="50" y1="50" x2="0" y2="0" stroke="hsl(200 75% 45%)" strokeWidth="0.3" opacity="0.5" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="hsl(200 75% 45%)" strokeWidth="0.3" opacity="0.5" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="hsl(200 75% 45%)" strokeWidth="0.3" opacity="0.5" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="hsl(200 75% 45%)" strokeWidth="0.3" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>
      
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/25 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-secondary/20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl transition-all duration-1000 [text-shadow:_0_1px_8px_rgba(255,255,255,0.6)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/15 border border-brand-teal/30 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-sm font-medium text-brand-tech-blue">Trusted IT Services Partner</span>
          </div>

          {/* Headline */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Empowering Businesses with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tech-blue via-brand-teal to-brand-ocean bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite]">
              Innovative IT Solutions
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Amaramam Service Pvt Ltd delivers cutting-edge technology services to help businesses thrive in the digital age.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
              <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </div>

          {/* Trust Points */}
          <div 
            className={`flex flex-wrap gap-x-6 gap-y-2 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-foreground/70">
                <CheckCircle size={16} className="text-brand-green" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 bg-background relative">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Services"
          subtitle="We offer comprehensive IT solutions to accelerate your business growth"
        />
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {services.map((service, index) => (
            <Link
              to="/services"
              key={service.title}
              className={`group p-6 rounded-2xl bg-card border border-border hover:shadow-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-tech-blue to-brand-teal flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-brand-tech-blue/20">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-brand-tech-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
        <div 
          className={`text-center mt-10 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-brand-tech-blue font-semibold border border-brand-tech-blue/30 hover:bg-brand-tech-blue/5 hover:-translate-y-0.5 transition-all"
          >
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-14 lg:py-16 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-tech-blue via-brand-teal to-brand-ocean" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-tech-blue/20 via-transparent to-brand-green/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 bg-muted relative">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-tech-blue/20 to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-tech-blue/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={ref} 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-tech-blue/10 text-brand-tech-blue text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              About Amaramam Service Pvt Ltd
            </h2>
            <p className="text-foreground/70 text-lg mb-4 leading-relaxed">
              We are a leading IT services company based in Vijayawada, Andhra Pradesh, dedicated to delivering innovative technology solutions that drive business success.
            </p>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              With a team of experienced professionals and a client-centric approach, we help organizations leverage technology to achieve their goals and stay ahead in the competitive market.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-tech-blue to-brand-teal text-primary-foreground font-semibold shadow-lg shadow-brand-tech-blue/25 hover:shadow-xl hover:shadow-brand-tech-blue/30 hover:-translate-y-1 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div 
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-card shadow-custom-sm border border-border hover:shadow-card hover:border-brand-tech-blue/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-tech-blue/10 flex items-center justify-center mb-3">
                  <Lightbulb size={20} className="text-brand-tech-blue" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Our Mission</h4>
                <p className="text-sm text-foreground/70">Delivering excellence in IT services</p>
              </div>
              <div className="p-5 rounded-2xl bg-card shadow-custom-sm border border-border hover:shadow-card hover:border-brand-green/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center mb-3">
                  <Users size={20} className="text-brand-green" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Our Vision</h4>
                <p className="text-sm text-foreground/70">To be a global leader in technology solutions</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="p-5 rounded-2xl bg-card shadow-custom-sm border border-border hover:shadow-card hover:border-brand-teal/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-3">
                  <Code size={20} className="text-brand-teal" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Innovation</h4>
                <p className="text-sm text-foreground/70">Embracing cutting-edge technologies</p>
              </div>
              <div className="p-5 rounded-2xl bg-card shadow-custom-sm border border-border hover:shadow-card hover:border-brand-ocean/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-ocean/10 flex items-center justify-center mb-3">
                  <Shield size={20} className="text-brand-ocean" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Excellence</h4>
                <p className="text-sm text-foreground/70">Committed to quality and results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-light-blue/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-brand-dark-blue to-brand-tech-blue relative overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          {/* CTA Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/15 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT solutions can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-brand-teal text-primary-foreground font-bold text-lg hover:bg-brand-ocean hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
