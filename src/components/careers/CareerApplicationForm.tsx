import { useState } from "react";
import { Send, Upload, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface CareerApplicationFormProps {
  selectedPosition?: string;
  onClose?: () => void;
}

const CareerApplicationForm = ({ selectedPosition = "", onClose }: CareerApplicationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: selectedPosition,
    coverLetter: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Resume file must be less than 10MB",
          variant: "destructive",
        });
        return;
      }
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.position.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let resumePath: string | undefined;

      // Upload resume if provided
      if (resumeFile) {
        const timestamp = Date.now();
        const sanitizedName = resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const filePath = `${timestamp}_${formData.firstName}_${formData.lastName}_${sanitizedName}`;

        const { error: uploadError } = await supabase.storage
          .from("resumes")
          .upload(filePath, resumeFile);

        if (uploadError) {
          console.error("Resume upload error:", uploadError);
          throw new Error("Failed to upload resume");
        }

        resumePath = filePath;
      }

      // Send application via edge function
      const { data, error } = await supabase.functions.invoke("send-career-application", {
        body: {
          ...formData,
          resumePath,
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. Our HR team will review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
      });
      setResumeFile(null);
      
      if (onClose) {
        onClose();
      }
    } catch (error: any) {
      console.error("Application submission error:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const positions = [
    "Senior Software Developer",
    "Cloud Solutions Architect",
    "Cybersecurity Analyst",
    "Business Development Executive",
    "UI/UX Designer",
    "Technical Support Engineer",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            First Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            placeholder="John"
            required
            maxLength={50}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Last Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            placeholder="Doe"
            required
            maxLength={50}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          placeholder="john@example.com"
          required
          maxLength={100}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          placeholder="+91 XXXXX XXXXX"
          maxLength={20}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Position <span className="text-destructive">*</span>
        </label>
        <select
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          required
        >
          <option value="">Select a position</option>
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Cover Letter
        </label>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          placeholder="Tell us about yourself and why you're interested in this position..."
          maxLength={2000}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Resume (PDF or Word)
        </label>
        {resumeFile ? (
          <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted">
            <Upload size={20} className="text-primary" />
            <span className="flex-1 text-sm truncate">{resumeFile.name}</span>
            <button
              type="button"
              onClick={removeFile}
              className="p-1 hover:bg-background rounded transition-colors"
            >
              <X size={16} className="text-muted-foreground" />
            </button>
          </div>
        ) : (
          <label className="flex items-center justify-center gap-2 p-6 rounded-lg border-2 border-dashed border-border hover:border-primary/50 cursor-pointer transition-colors">
            <Upload size={20} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Click to upload resume</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
        <p className="text-xs text-muted-foreground mt-1">Max file size: 10MB</p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
};

export default CareerApplicationForm;
