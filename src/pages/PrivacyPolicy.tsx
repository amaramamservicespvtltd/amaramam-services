import Layout from "@/components/layout/Layout";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const PrivacyPolicy = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-foreground/70">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/75 prose-li:text-foreground/75 prose-a:text-primary">
            
            <h2>Introduction</h2>
            <p>
              Amaramam Service Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website <a href="https://amaramam.com/" target="_blank" rel="noopener noreferrer">https://amaramam.com/</a> or 
              use our IT services and technology solutions.
            </p>
            <p>
              We are an IT services company located in Vijayawada, Andhra Pradesh, India. By using our 
              website and services, you consent to the data practices described in this policy.
            </p>

            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect the following personal information when you interact with us:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and address</li>
              <li><strong>Career Applications:</strong> Resume, cover letter, work history, and qualifications submitted via our Careers page</li>
              <li><strong>Business Inquiries:</strong> Company name, job title, and project requirements</li>
              <li><strong>Communication Records:</strong> Messages and correspondence you send to us</li>
            </ul>

            <h3>Technical Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li>IP address and geographic location</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or source</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li><strong>Service Communication:</strong> To respond to your inquiries and provide customer support</li>
              <li><strong>Career Applications:</strong> To evaluate your job application and contact you regarding employment opportunities</li>
              <li><strong>Business Operations:</strong> To deliver our IT services and fulfill contractual obligations</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and improve user experience</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <h2>Data Sharing Policy</h2>
            <p>
              <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
            </p>
            <p>We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted partners who assist us in operating our website and conducting our business (e.g., email services, analytics providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include:
            </p>
            <ul>
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure storage systems with access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection practices</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience. 
              Cookies are small files stored on your device that help us:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our services based on usage patterns</li>
            </ul>
            <p>
              You can control cookie settings through your browser. However, disabling cookies may 
              affect some website functionality.
            </p>

            <h2>Third-Party Services</h2>
            <p>Our website may use third-party services for:</p>
            <ul>
              <li><strong>Analytics:</strong> To understand website traffic and user behavior</li>
              <li><strong>Email Services:</strong> To send communications and respond to inquiries</li>
              <li><strong>Form Submissions:</strong> To process contact forms and job applications</li>
            </ul>
            <p>
              These third-party services have their own privacy policies governing their use of your information.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Portability:</strong> Request your data in a structured, commonly used format</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes 
              outlined in this policy, unless a longer retention period is required by law. 
              Career applications are retained for up to 2 years unless you request earlier deletion.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly 
              collect personal information from children. If we become aware that we have collected 
              information from a child, we will take steps to delete it promptly.
            </p>

            <h2>Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page 
              with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@amaramam.com">info@amaramam.com</a></li>
              <li><strong>HR Inquiries:</strong> <a href="mailto:hr@amaramam.com">hr@amaramam.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+917093581158">+91 7093581158</a></li>
              <li><strong>Address:</strong> Vijayawada, Andhra Pradesh, India</li>
            </ul>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
