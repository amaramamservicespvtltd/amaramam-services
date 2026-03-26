import Layout from "@/components/layout/Layout";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const TermsOfService = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
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
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the website <a href="https://amaramam.com/" target="_blank" rel="noopener noreferrer">https://amaramam.com/</a> operated 
              by Amaramam Service Pvt Ltd ("we," "our," or "us"), you accept and agree to be bound by these 
              Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>

            <h2>Description of Services</h2>
            <p>
              Amaramam Service Pvt Ltd is an IT services and technology solutions company based in 
              Vijayawada, Andhra Pradesh, India. Our services include but are not limited to:
            </p>
            <ul>
              <li>Software development and custom applications</li>
              <li>Cloud solutions and infrastructure services</li>
              <li>Cybersecurity and data protection services</li>
              <li>IT consulting and digital transformation</li>
              <li>Technical support and maintenance</li>
              <li>UI/UX design and development</li>
            </ul>
            <p>
              Specific service terms may be governed by separate agreements between you and Amaramam Service Pvt Ltd.
            </p>

            <h2>User Responsibilities</h2>
            <p>When using our website and services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when submitting forms or applications</li>
              <li>Use the website only for lawful purposes and in compliance with applicable laws</li>
              <li>Not attempt to gain unauthorized access to our systems or networks</li>
              <li>Not interfere with or disrupt the integrity or performance of our website</li>
              <li>Not transmit any malware, viruses, or harmful code</li>
              <li>Not engage in any activity that could damage our reputation or business</li>
              <li>Respect the intellectual property rights of Amaramam Service Pvt Ltd and third parties</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, 
              software, and design elements, is the property of Amaramam Service Pvt Ltd or its licensors 
              and is protected by Indian and international copyright, trademark, and other intellectual 
              property laws.
            </p>
            <p>You may not:</p>
            <ul>
              <li>Reproduce, distribute, or modify any content without prior written consent</li>
              <li>Use our trademarks or logos without authorization</li>
              <li>Create derivative works based on our content</li>
              <li>Use automated tools to scrape or extract content from our website</li>
            </ul>

            <h2>Use of Website Content</h2>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to access and view 
              the content on our website for personal, non-commercial use only. This license does not 
              include the right to:
            </p>
            <ul>
              <li>Download or copy content for commercial purposes</li>
              <li>Resell or commercially exploit any website content</li>
              <li>Use data mining, robots, or similar data gathering tools</li>
              <li>Frame or mirror any portion of the website</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Amaramam Service Pvt Ltd shall not be 
              liable for any indirect, incidental, special, consequential, or punitive damages arising 
              from or related to:
            </p>
            <ul>
              <li>Your use or inability to use our website or services</li>
              <li>Any errors, omissions, or inaccuracies in website content</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any third-party conduct or content on our website</li>
              <li>Any loss of data, profits, or business opportunities</li>
            </ul>
            <p>
              Our total liability for any claim arising from these terms shall not exceed the amount 
              you paid to us, if any, in the twelve months preceding the claim.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided "as is" and "as available" without warranties of 
              any kind, whether express or implied. We specifically disclaim:
            </p>
            <ul>
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties that the website will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the accuracy or reliability of any information</li>
              <li>Any warranties arising from course of dealing or usage of trade</li>
            </ul>
            <p>
              We do not guarantee that our website will meet your requirements or achieve any 
              particular results.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned 
              or controlled by Amaramam Service Pvt Ltd. We are not responsible for:
            </p>
            <ul>
              <li>The content, privacy policies, or practices of third-party websites</li>
              <li>Any damage or loss caused by your use of third-party services</li>
              <li>The availability or accuracy of third-party content</li>
            </ul>
            <p>
              We encourage you to review the terms and privacy policies of any third-party websites you visit.
            </p>

            <h2>Termination of Access</h2>
            <p>
              We reserve the right to terminate or suspend your access to our website at any time, 
              without prior notice or liability, for any reason, including but not limited to:
            </p>
            <ul>
              <li>Breach of these Terms of Service</li>
              <li>Conduct that we believe is harmful to our business or other users</li>
              <li>Requests by law enforcement or government agencies</li>
              <li>Extended periods of inactivity</li>
            </ul>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws 
              of India. Any disputes arising from these terms or your use of our website shall be 
              subject to the exclusive jurisdiction of the courts in Vijayawada, Andhra Pradesh, India.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting on this page. Your continued use of our website 
              after changes are posted constitutes your acceptance of the modified terms.
            </p>
            <p>
              We encourage you to review these terms periodically for any updates.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be invalid or unenforceable, 
              the remaining provisions shall continue in full force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@amaramam.com">info@amaramam.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+917093581158">+91 7093581158</a></li>
              <li><strong>Address:</strong> Vijayawada, Andhra Pradesh, India</li>
              <li><strong>Website:</strong> <a href="https://amaramam.com/" target="_blank" rel="noopener noreferrer">https://amaramam.com/</a></li>
            </ul>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
