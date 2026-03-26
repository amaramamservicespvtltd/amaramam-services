import { Target, Eye, Award, Users, Clock, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake, ensuring the highest quality deliverables.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Our clients are at the heart of everything we do. We build lasting partnerships based on trust.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We deliver on our promises, meeting deadlines and exceeding expectations consistently.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical practices.",
  },
];

const team = [
  { role: "Leadership Team", count: "5+", description: "Experienced executives driving strategic vision" },
  { role: "Software Engineers", count: "20+", description: "Skilled developers building innovative solutions" },
  { role: "Cloud Specialists", count: "10+", description: "Experts in cloud architecture and deployment" },
  { role: "Support Staff", count: "15+", description: "Dedicated professionals ensuring client success" },
];

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Amaramam Service Pvt Ltd is a premier IT services company committed to delivering innovative technology solutions that empower businesses to succeed in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className={missionVisible ? "animate-slide-in-left" : "opacity-0"} ref={missionRef}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Founded with a vision to transform businesses through technology, Amaramam Service Pvt Ltd has grown into a trusted partner for organizations seeking innovative IT solutions. Based in Vijayawada, Andhra Pradesh, we serve clients across various industries.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our team of dedicated professionals brings together diverse expertise in software development, cloud computing, cybersecurity, and digital transformation. We believe in building long-term relationships with our clients, understanding their unique challenges, and delivering tailored solutions that drive real results.
              </p>
            </div>
            <div className={`space-y-5 ${missionVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="p-6 rounded-xl bg-muted">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center">
                    <Target size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  To deliver innovative and reliable IT solutions that enable businesses to achieve their goals, enhance productivity, and stay ahead in the competitive digital landscape.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center">
                    <Eye size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  To be a globally recognized IT services leader, known for our innovation, quality, and commitment to client success, while contributing to the technological advancement of society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our work and relationships"
          />
          <div
            ref={valuesRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${valuesVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="p-5 rounded-xl bg-card border border-border hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3">
                  <value.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Team"
            subtitle="A talented group of professionals dedicated to your success"
          />
          <div
            ref={teamRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-5 ${teamVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {team.map((member) => (
              <div
                key={member.role}
                className="p-5 rounded-xl bg-muted text-center hover:shadow-custom-sm transition-all"
              >
                <div className="text-4xl font-bold text-primary mb-2">{member.count}</div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.role}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
