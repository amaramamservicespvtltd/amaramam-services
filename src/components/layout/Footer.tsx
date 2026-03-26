import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

import SocialIcons from "@/components/ui/SocialIcons";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "R&D", path: "/rnd" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-dark-blue via-brand-footer to-brand-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="border border-primary-foreground/20 rounded-lg px-4 py-2">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary-foreground">
                Amaramam Service Pvt Ltd
              </h2>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Amaramam Service Pvt Ltd is a leading IT services company providing innovative technology solutions to businesses worldwide.
            </p>
            <a
              href="https://amaramam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-teal hover:text-brand-ocean hover:underline text-sm transition-colors"
            >
              www.amaramam.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-brand-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-brand-teal shrink-0" />
                <a
                  href="mailto:info@amaramam.com"
                  className="text-primary-foreground/80 hover:text-brand-teal transition-colors text-sm"
                >
                  info@amaramam.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-brand-teal shrink-0" />
                <a
                  href="tel:+917093581158"
                  className="text-primary-foreground/80 hover:text-brand-teal transition-colors text-sm"
                >
                  +91 7093581158
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-brand-teal shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Vijayawada, Andhra Pradesh, India
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            <SocialIcons variant="footer" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Amaramam Service Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-brand-teal transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/60 hover:text-brand-teal transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;