import { Beaker, Cpu, Brain, Zap, Target, Rocket } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const researchAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description: "Exploring advanced AI algorithms and machine learning models to develop intelligent solutions that automate processes and provide predictive insights for businesses.",
  },
  {
    icon: Cpu,
    title: "Internet of Things (IoT)",
    description: "Researching IoT technologies and applications to create connected ecosystems that enable smart monitoring, automation, and data-driven decision making.",
  },
  {
    icon: Zap,
    title: "Edge Computing",
    description: "Developing edge computing solutions that bring processing closer to data sources, reducing latency and enabling real-time analytics for critical applications.",
  },
  {
    icon: Beaker,
    title: "Blockchain Technology",
    description: "Investigating blockchain applications beyond cryptocurrency, including supply chain transparency, secure data sharing, and decentralized applications.",
  },
  {
    icon: Target,
    title: "Quantum Computing",
    description: "Preparing for the quantum future by exploring quantum algorithms and their potential applications in optimization, cryptography, and complex simulations.",
  },
  {
    icon: Rocket,
    title: "Cloud-Native Technologies",
    description: "Advancing cloud-native development practices, including containerization, serverless computing, and microservices architecture for scalable solutions.",
  },
];

const innovations = [
  {
    title: "Smart Business Analytics Platform",
    status: "In Development",
    description: "An AI-powered analytics platform that provides real-time business insights and predictive analytics for informed decision making.",
  },
  {
    title: "Secure Document Management System",
    status: "Testing Phase",
    description: "A blockchain-based document management system ensuring tamper-proof storage and secure sharing of sensitive business documents.",
  },
  {
    title: "Automated IT Support Assistant",
    status: "Beta Release",
    description: "An intelligent chatbot powered by natural language processing to provide instant IT support and troubleshooting assistance.",
  },
  {
    title: "IoT Monitoring Dashboard",
    status: "Research",
    description: "A comprehensive IoT monitoring solution for industrial applications, enabling predictive maintenance and operational efficiency.",
  },
];

const RnD = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: areasRef, isVisible: areasVisible } = useScrollAnimation();
  const { ref: innovationsRef, isVisible: innovationsVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Research & Development</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Driving innovation through cutting-edge research. Our R&D team explores emerging technologies to develop solutions that shape the future of IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Research Focus Areas"
            subtitle="Exploring technologies that will define the future of business and technology"
          />
          <div
            ref={areasRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${areasVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Innovations */}
      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Current Innovations"
            subtitle="Projects and solutions currently in development by our R&D team"
          />
          <div
            ref={innovationsRef}
            className={`grid md:grid-cols-2 gap-5 max-w-4xl mx-auto ${innovationsVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {innovations.map((innovation) => (
              <div
                key={innovation.title}
                className="p-5 rounded-xl bg-card border border-border hover:shadow-custom-sm transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{innovation.title}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {innovation.status}
                  </span>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">{innovation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partner With Us
            </h2>
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
              We believe in the power of collaboration. If you're interested in partnering with us on research initiatives or exploring how our innovations can benefit your organization, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@amaramam.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Our R&D Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RnD;
