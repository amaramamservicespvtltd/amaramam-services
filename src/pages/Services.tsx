import { Link } from "react-router-dom";
import {
  Code,
  Cloud,
  Shield,
  Users,
  Lightbulb,
  Headphones,
  Database,
  Smartphone,
  Globe,
  Settings,
  TrendingUp,
  Lock,
  ArrowRight,
  AlertCircle,
  Zap,
  TrendingDown,
  BookOpen,
  Clock,
  Brain,
  Target,
  Heart,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import AttendanceCalculator from "@/components/services/AttendanceCalculator";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "We build tailored software solutions designed to meet your specific business requirements. Our experienced development team uses the latest technologies to create scalable, secure, and efficient applications.",
    features: ["Web Applications", "Enterprise Software", "API Development", "Legacy Modernization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Create powerful mobile experiences for iOS and Android platforms. We develop native and cross-platform applications that engage users and drive business growth.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, manage, and optimize your cloud infrastructure for maximum efficiency.",
    features: ["Cloud Migration", "AWS & Azure", "Cloud Architecture", "DevOps Services"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    slug: "cybersecurity-services",
    description: "Protect your digital assets with our robust cybersecurity solutions. We provide comprehensive security assessments, implementation, and monitoring services.",
    features: ["Security Audits", "Threat Detection", "Compliance Management", "Security Training"],
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    slug: "data-analytics-bi",
    description: "Transform your data into actionable insights with our analytics and business intelligence solutions. Make informed decisions based on comprehensive data analysis.",
    features: ["Data Visualization", "Predictive Analytics", "BI Dashboards", "Data Warehousing"],
  },
  {
    icon: Globe,
    title: "Web Development",
    slug: "web-development",
    description: "Build a strong online presence with our professional web development services. We create responsive, user-friendly websites that represent your brand effectively.",
    features: ["Corporate Websites", "E-commerce", "CMS Development", "Web Optimization"],
  },
  {
    icon: Users,
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Get expert guidance on your technology strategy with our IT consulting services. We help you align technology initiatives with your business objectives.",
    features: ["Technology Strategy", "Digital Roadmap", "Process Optimization", "Vendor Selection"],
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "Embrace the digital future with our comprehensive transformation services. We help you modernize processes, adopt new technologies, and create digital-first experiences.",
    features: ["Process Automation", "Digital Strategy", "Change Management", "Innovation Labs"],
  },
  {
    icon: Headphones,
    title: "IT Support & Maintenance",
    slug: "it-support-maintenance",
    description: "Ensure smooth operations with our reliable IT support services. We provide 24/7 technical support, proactive maintenance, and rapid issue resolution.",
    features: ["24/7 Support", "Remote Assistance", "Preventive Maintenance", "Help Desk"],
  },
  {
    icon: Settings,
    title: "System Integration",
    slug: "system-integration",
    description: "Connect your business systems and applications for seamless data flow and improved efficiency. We specialize in integrating diverse technologies into unified solutions.",
    features: ["API Integration", "ERP Integration", "CRM Integration", "Third-Party Apps"],
  },
  {
    icon: TrendingUp,
    title: "Business Process Automation",
    slug: "business-process-automation",
    description: "Streamline your operations with intelligent automation solutions. We help you identify and automate repetitive tasks to improve productivity and reduce costs.",
    features: ["Workflow Automation", "RPA Solutions", "Document Processing", "Task Automation"],
  },
  {
    icon: Lock,
    title: "Compliance & Governance",
    slug: "compliance-governance",
    description: "Navigate regulatory requirements with our compliance and governance services. We help you implement controls and processes to meet industry standards.",
    features: ["GDPR Compliance", "ISO Certification", "Risk Management", "Audit Support"],
  },
];

const Services = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Comprehensive IT solutions tailored to your business needs. We combine expertise with innovation to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What We Offer"
            subtitle="Explore our comprehensive range of IT services designed to accelerate your business growth"
          />
          <div
            ref={servicesRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${servicesVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {services.map((service) => (
              <Link
                key={service.title}
                to={`/services/${service.slug}`}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-foreground/70 text-sm mb-3 leading-relaxed">{service.description}</p>
                <ul className="space-y-1.5 mb-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/65">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
              Contact us to discuss your specific requirements. Our team will work with you to design and implement the perfect solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-custom-md"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Product Developments Section */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Product Developments"
            subtitle="Explore our innovative product solutions built to solve real-world challenges"
          />

          {/* Case Study: KL University Attendance Calculator */}
          <div className="mt-10 max-w-5xl mx-auto">
            <p className="text-center text-foreground/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              KL University students struggled with manual and confusing attendance calculations, so we built an automated attendance calculator that clearly shows their current percentage and how many classes they need to attend to stay above 75%.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Problem */}
              <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30">
                <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center mb-4">
                  <AlertCircle size={24} className="text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">The Problem</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <TrendingDown size={14} className="text-red-500 mt-1 shrink-0" />
                    Attendance scattered across multiple portals & subjects
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock size={14} className="text-red-500 mt-1 shrink-0" />
                    Manual calculations were time-consuming & error-prone
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain size={14} className="text-red-500 mt-1 shrink-0" />
                    Hard to know how many classes needed to reach 75%
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle size={14} className="text-red-500 mt-1 shrink-0" />
                    Frequent timetable changes made tracking harder
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingDown size={14} className="text-red-500 mt-1 shrink-0" />
                    Mistakes led to wrong decisions — skipping or over-attending
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4">
                  <Zap size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Our Solution</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <BookOpen size={14} className="text-blue-500 mt-1 shrink-0" />
                    Takes input of attendance data per component (L-T-P-S)
                  </li>
                  <li className="flex items-start gap-2">
                    <Target size={14} className="text-blue-500 mt-1 shrink-0" />
                    Calculates current weighted attendance percentage
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap size={14} className="text-blue-500 mt-1 shrink-0" />
                    Shows classes needed to reach safe standing
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen size={14} className="text-blue-500 mt-1 shrink-0" />
                    Works subject-wise and overall
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock size={14} className="text-blue-500 mt-1 shrink-0" />
                    Saves time and removes manual effort completely
                  </li>
                </ul>
              </div>

              {/* Impact */}
              <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">The Impact</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <Heart size={14} className="text-green-500 mt-1 shrink-0" />
                    Reduces student stress around attendance
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size={14} className="text-green-500 mt-1 shrink-0" />
                    Helps avoid attendance shortages proactively
                  </li>
                  <li className="flex items-start gap-2">
                    <Target size={14} className="text-green-500 mt-1 shrink-0" />
                    Better decisions about attending or skipping classes
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen size={14} className="text-green-500 mt-1 shrink-0" />
                    Students focus more on learning, not calculations
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp size={14} className="text-green-500 mt-1 shrink-0" />
                    Clear, instant insights replace confusion
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground text-center mb-4">
              Try the L-T-P-S Calculator Pro
            </h3>
          </div>

          <div className="mt-4 rounded-xl overflow-hidden border border-border shadow-card max-w-5xl mx-auto">
            <AttendanceCalculator />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
