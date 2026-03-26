import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Blog images
import cloudImage from "@/assets/blog/cloud-computing.jpg";
import cybersecurityImage from "@/assets/blog/cybersecurity.jpg";
import digitalTransformationImage from "@/assets/blog/digital-transformation.jpg";
import aiDevelopmentImage from "@/assets/blog/ai-development.jpg";
import microservicesImage from "@/assets/blog/microservices.jpg";
import dataAnalyticsImage from "@/assets/blog/data-analytics.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch in 2024",
    excerpt: "Explore the emerging trends in cloud computing that are shaping the future of business technology. From multi-cloud strategies to edge computing, discover what's next.",
    author: "Amaramam Team",
    date: "January 15, 2024",
    category: "Cloud Computing",
    image: cloudImage,
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Learn essential cybersecurity measures that every small business should implement to protect their digital assets and customer data from cyber threats.",
    author: "Amaramam Team",
    date: "January 10, 2024",
    category: "Cybersecurity",
    image: cybersecurityImage,
  },
  {
    id: 3,
    title: "How Digital Transformation Drives Business Growth",
    excerpt: "Discover how embracing digital transformation can help your business improve efficiency, enhance customer experience, and drive sustainable growth.",
    author: "Amaramam Team",
    date: "January 5, 2024",
    category: "Digital Transformation",
    image: digitalTransformationImage,
  },
  {
    id: 4,
    title: "The Role of AI in Modern Software Development",
    excerpt: "Artificial intelligence is revolutionizing software development. Learn how AI tools and techniques are improving code quality and developer productivity.",
    author: "Amaramam Team",
    date: "December 28, 2023",
    category: "Software Development",
    image: aiDevelopmentImage,
  },
  {
    id: 5,
    title: "Building Scalable Applications with Microservices Architecture",
    excerpt: "A comprehensive guide to designing and implementing microservices architecture for building scalable, maintainable, and resilient applications.",
    author: "Amaramam Team",
    date: "December 20, 2023",
    category: "Architecture",
    image: microservicesImage,
  },
  {
    id: 6,
    title: "Data Analytics: Turning Information into Business Insights",
    excerpt: "Learn how to leverage data analytics to make informed business decisions, identify opportunities, and gain a competitive advantage in your industry.",
    author: "Amaramam Team",
    date: "December 15, 2023",
    category: "Data Analytics",
    image: dataAnalyticsImage,
  },
];

const Blog = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: postsRef, isVisible: postsVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and best practices in the IT industry. Our experts share their knowledge to help you stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Latest Articles"
            subtitle="Insights and updates from our team of experts"
          />
          <div
            ref={postsRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${postsVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="rounded-xl bg-card border border-border overflow-hidden hover:shadow-card hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
                style={{ transitionDelay: postsVisible ? `${index * 80}ms` : "0ms" }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-primary text-xs font-semibold px-3 py-1 bg-primary/10 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/65 text-sm mb-3 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-3">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Get the latest articles and updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
