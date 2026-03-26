import { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, TrendingUp, Users, Coffee, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const openings = [
  {
    id: 1,
    title: "Senior Software Developer",
    department: "Engineering",
    location: "Vijayawada, Andhra Pradesh",
    type: "Full-time",
    description: "We're looking for an experienced software developer to join our engineering team. You'll work on challenging projects using modern technologies.",
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "Vijayawada, Andhra Pradesh",
    type: "Full-time",
    description: "Design and implement cloud architecture solutions for our clients. Experience with AWS, Azure, or GCP required.",
  },
  {
    id: 3,
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Vijayawada, Andhra Pradesh",
    type: "Full-time",
    description: "Join our security team to help protect our clients' digital assets. Experience in security assessments and threat analysis required.",
  },
  {
    id: 4,
    title: "Business Development Executive",
    department: "Sales",
    location: "Vijayawada, Andhra Pradesh",
    type: "Full-time",
    description: "Drive business growth by identifying and developing new client relationships. Strong communication skills essential.",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "Design",
    location: "Vijayawada, Andhra Pradesh",
    type: "Full-time",
    description: "Create intuitive and visually appealing user interfaces for web and mobile applications. Portfolio required.",
  },
  {
    id: 6,
    title: "Technical Support Engineer",
    department: "Support",
    location: "Vijayawada, Andhra Pradesh",
    type: "Full-time",
    description: "Provide technical support to our clients and internal teams. Strong problem-solving skills and IT knowledge required.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths and professional development support",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with talented professionals in a collaborative environment",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
  },
];

const Careers = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: openingsRef, isVisible: openingsVisible } = useScrollAnimation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const openApplicationDialog = (position: string = "") => {
    setSelectedPosition(position);
    setIsDialogOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Careers</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Join our team and be part of a dynamic company that's shaping the future of IT services. We're always looking for talented individuals who share our passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Join Amaramam?"
            subtitle="We offer more than just a job – we offer a career and a community"
          />
          <div
            ref={benefitsRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${benefitsVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-5 rounded-xl bg-muted text-center hover:shadow-custom-sm transition-all"
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3">
                  <benefit.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Open Positions"
            subtitle="Explore our current job openings and find your next opportunity"
          />
          <div
            ref={openingsRef}
            className={`space-y-5 max-w-4xl mx-auto ${openingsVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {openings.map((job) => (
              <div
                key={job.id}
                className="p-5 rounded-xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/65">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => openApplicationDialog(job.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </button>
                </div>
                <p className="text-foreground/70 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don't See a Suitable Position?
            </h2>
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
              We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button
              onClick={() => openApplicationDialog("Other")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Send Your Resume
              <ArrowRight size={18} />
            </button>
            
            {/* HR Contact */}
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-foreground/70 mb-2">For career inquiries, contact our HR team:</p>
              <a
                href="mailto:hr@amaramam.com"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Mail size={18} />
                hr@amaramam.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Apply for {selectedPosition || "a Position"}</DialogTitle>
          </DialogHeader>
          <CareerApplicationForm 
            selectedPosition={selectedPosition} 
            onClose={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Careers;
