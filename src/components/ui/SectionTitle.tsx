interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && (
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className={`mt-3 h-1 w-20 gradient-primary rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionTitle;