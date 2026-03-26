import { Link, useParams, Navigate } from "react-router-dom";
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
  ArrowLeft,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  overview: string;
  benefits: string[];
}

const servicesData: ServiceData[] = [
  {
    slug: "custom-software-development",
    icon: Code,
    title: "Custom Software Development",
    description: "We build tailored software solutions designed to meet your specific business requirements. Our experienced development team uses the latest technologies to create scalable, secure, and efficient applications.",
    features: ["Web Applications", "Enterprise Software", "API Development", "Legacy Modernization"],
    overview: "Our custom software development services are designed to address your unique business challenges. We work closely with you to understand your requirements and deliver solutions that drive efficiency, innovation, and growth. From initial concept to deployment and maintenance, we handle every aspect of the development lifecycle.",
    benefits: [
      "Tailored solutions that fit your exact business needs",
      "Scalable architecture for future growth",
      "Modern technology stack for optimal performance",
      "Dedicated support and maintenance",
      "Agile development methodology",
      "Quality assurance at every stage",
    ],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create powerful mobile experiences for iOS and Android platforms. We develop native and cross-platform applications that engage users and drive business growth.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"],
    overview: "Our mobile app development team creates intuitive, feature-rich applications that deliver exceptional user experiences. Whether you need a native iOS or Android app, or a cross-platform solution, we have the expertise to bring your vision to life.",
    benefits: [
      "Native and cross-platform expertise",
      "User-centric design approach",
      "Performance-optimized applications",
      "App Store and Play Store optimization",
      "Ongoing maintenance and updates",
      "Analytics and user behavior tracking",
    ],
  },
  {
    slug: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, manage, and optimize your cloud infrastructure for maximum efficiency.",
    features: ["Cloud Migration", "AWS & Azure", "Cloud Architecture", "DevOps Services"],
    overview: "Transform your business with our comprehensive cloud solutions. We help organizations migrate to the cloud, optimize their existing infrastructure, and leverage cloud-native technologies to achieve greater agility, scalability, and cost-efficiency.",
    benefits: [
      "Seamless cloud migration with minimal downtime",
      "Multi-cloud and hybrid cloud strategies",
      "Cost optimization and resource management",
      "24/7 monitoring and support",
      "Security-first cloud architecture",
      "DevOps automation and CI/CD pipelines",
    ],
  },
  {
    slug: "cybersecurity-services",
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with our robust cybersecurity solutions. We provide comprehensive security assessments, implementation, and monitoring services.",
    features: ["Security Audits", "Threat Detection", "Compliance Management", "Security Training"],
    overview: "In today's digital landscape, cybersecurity is paramount. Our cybersecurity services help you identify vulnerabilities, implement robust security measures, and maintain continuous protection against evolving threats. We ensure your data and systems remain secure.",
    benefits: [
      "Comprehensive vulnerability assessments",
      "Real-time threat detection and response",
      "Regulatory compliance support",
      "Employee security awareness training",
      "Incident response planning",
      "Security architecture consulting",
    ],
  },
  {
    slug: "data-analytics-bi",
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform your data into actionable insights with our analytics and business intelligence solutions. Make informed decisions based on comprehensive data analysis.",
    features: ["Data Visualization", "Predictive Analytics", "BI Dashboards", "Data Warehousing"],
    overview: "Unlock the power of your data with our analytics and business intelligence services. We help you collect, process, and analyze data to gain valuable insights that drive strategic decision-making and business growth.",
    benefits: [
      "Custom dashboard development",
      "Advanced predictive analytics",
      "Data integration from multiple sources",
      "Real-time reporting capabilities",
      "Machine learning-powered insights",
      "Self-service analytics tools",
    ],
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Build a strong online presence with our professional web development services. We create responsive, user-friendly websites that represent your brand effectively.",
    features: ["Corporate Websites", "E-commerce", "CMS Development", "Web Optimization"],
    overview: "Our web development services help you establish a powerful online presence. From corporate websites to complex e-commerce platforms, we create responsive, fast, and user-friendly websites that engage visitors and drive conversions.",
    benefits: [
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "Fast loading and performance",
      "Content management systems",
      "E-commerce integration",
      "Accessibility compliance",
    ],
  },
  {
    slug: "it-consulting",
    icon: Users,
    title: "IT Consulting",
    description: "Get expert guidance on your technology strategy with our IT consulting services. We help you align technology initiatives with your business objectives.",
    features: ["Technology Strategy", "Digital Roadmap", "Process Optimization", "Vendor Selection"],
    overview: "Our IT consulting services provide strategic guidance to help you make informed technology decisions. We work with you to develop comprehensive IT strategies that align with your business goals and drive competitive advantage.",
    benefits: [
      "Strategic technology roadmapping",
      "Vendor evaluation and selection",
      "Technology stack optimization",
      "IT governance frameworks",
      "Cost reduction strategies",
      "Innovation enablement",
    ],
  },
  {
    slug: "digital-transformation",
    icon: Lightbulb,
    title: "Digital Transformation",
    description: "Embrace the digital future with our comprehensive transformation services. We help you modernize processes, adopt new technologies, and create digital-first experiences.",
    features: ["Process Automation", "Digital Strategy", "Change Management", "Innovation Labs"],
    overview: "Navigate the digital landscape with confidence. Our digital transformation services help you reimagine business processes, adopt emerging technologies, and create innovative digital experiences that set you apart from the competition.",
    benefits: [
      "End-to-end digital strategy",
      "Process modernization",
      "Customer experience enhancement",
      "Organizational change management",
      "Technology adoption frameworks",
      "Innovation culture development",
    ],
  },
  {
    slug: "it-support-maintenance",
    icon: Headphones,
    title: "IT Support & Maintenance",
    description: "Ensure smooth operations with our reliable IT support services. We provide 24/7 technical support, proactive maintenance, and rapid issue resolution.",
    features: ["24/7 Support", "Remote Assistance", "Preventive Maintenance", "Help Desk"],
    overview: "Keep your IT infrastructure running smoothly with our comprehensive support and maintenance services. We provide round-the-clock technical support, proactive monitoring, and rapid issue resolution to minimize downtime and maximize productivity.",
    benefits: [
      "24/7 technical support availability",
      "Proactive system monitoring",
      "Rapid incident response",
      "Regular maintenance schedules",
      "Remote and on-site support",
      "Detailed reporting and analytics",
    ],
  },
  {
    slug: "system-integration",
    icon: Settings,
    title: "System Integration",
    description: "Connect your business systems and applications for seamless data flow and improved efficiency. We specialize in integrating diverse technologies into unified solutions.",
    features: ["API Integration", "ERP Integration", "CRM Integration", "Third-Party Apps"],
    overview: "Eliminate data silos and streamline operations with our system integration services. We connect your disparate systems and applications to create a unified technology ecosystem that enhances efficiency and enables better decision-making.",
    benefits: [
      "Seamless data flow between systems",
      "Reduced manual data entry",
      "Real-time information access",
      "Improved operational efficiency",
      "Custom API development",
      "Legacy system integration",
    ],
  },
  {
    slug: "business-process-automation",
    icon: TrendingUp,
    title: "Business Process Automation",
    description: "Streamline your operations with intelligent automation solutions. We help you identify and automate repetitive tasks to improve productivity and reduce costs.",
    features: ["Workflow Automation", "RPA Solutions", "Document Processing", "Task Automation"],
    overview: "Transform your operations with intelligent automation. We identify opportunities for automation across your organization and implement solutions that reduce manual effort, minimize errors, and free your team to focus on high-value activities.",
    benefits: [
      "Increased operational efficiency",
      "Reduced human error",
      "Cost savings through automation",
      "Faster process execution",
      "Improved employee productivity",
      "Scalable automation solutions",
    ],
  },
  {
    slug: "compliance-governance",
    icon: Lock,
    title: "Compliance & Governance",
    description: "Navigate regulatory requirements with our compliance and governance services. We help you implement controls and processes to meet industry standards.",
    features: ["GDPR Compliance", "ISO Certification", "Risk Management", "Audit Support"],
    overview: "Stay compliant and manage risk effectively with our governance services. We help you navigate complex regulatory requirements, implement robust controls, and maintain compliance with industry standards and best practices.",
    benefits: [
      "Regulatory compliance expertise",
      "Risk assessment and mitigation",
      "Policy and procedure development",
      "Audit preparation and support",
      "Continuous compliance monitoring",
      "Staff training and awareness",
    ],
  },
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Services
            </Link>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center">
                <IconComponent size={32} className="text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {service.title}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={contentRef}
            className={`max-w-4xl mx-auto ${contentVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Service Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-4 rounded-lg bg-muted"
                      >
                        <CheckCircle size={20} className="text-secondary shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="p-6 rounded-xl bg-muted border border-border sticky top-24">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Why Choose Amaramam
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us today to discuss how our {service.title.toLowerCase()} services can help your business succeed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-custom-md"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
