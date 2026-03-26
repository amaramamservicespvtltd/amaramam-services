import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface CareerApplicationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  coverLetter: string;
  resumePath?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      coverLetter,
      resumePath,
    }: CareerApplicationRequest = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !position) {
      throw new Error("Missing required fields: firstName, lastName, email, and position are required");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email address");
    }

    // Build email attachments if resume was uploaded
    const attachments: Array<{ filename: string; content: Uint8Array }> = [];
    
    if (resumePath) {
      try {
        const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
        const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
        
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        
        const { data: fileData, error: downloadError } = await supabase.storage
          .from("resumes")
          .download(resumePath);
        
        if (!downloadError && fileData) {
          const arrayBuffer = await fileData.arrayBuffer();
          const content = new Uint8Array(arrayBuffer);
          const filename = resumePath.split("/").pop() || "resume";
          
          attachments.push({
            filename,
            content,
          });
        }
      } catch (storageError) {
        console.error("Error downloading resume:", storageError);
        // Continue without attachment if download fails
      }
    }

    const emailHtml = `
      <h1>New Career Application</h1>
      <h2>Position: ${position}</h2>
      
      <h3>Applicant Information</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td>
        </tr>
      </table>
      
      <h3>Cover Letter</h3>
      <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
${coverLetter || "No cover letter provided"}
      </div>
      
      ${resumePath ? `<p style="margin-top: 16px;"><strong>Resume attached.</strong></p>` : "<p style='margin-top: 16px;'><em>No resume attached.</em></p>"}
      
      <hr style="margin-top: 24px;">
      <p style="color: #666; font-size: 12px;">This application was submitted via the Amaramam Service Pvt Ltd website.</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Careers <noreply@amaramam.com>",
      to: ["hr@amaramam.com"],
      replyTo: email,
      subject: `Career Application: ${position} - ${firstName} ${lastName}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    console.log("Career application email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Application submitted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-career-application function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
