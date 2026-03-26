-- Create storage bucket for resume uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('resumes', 'resumes', false, 10485760);

-- Allow authenticated and anonymous users to upload resumes
CREATE POLICY "Anyone can upload resumes"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'resumes');

-- Allow backend to read resumes
CREATE POLICY "Backend can read resumes"
ON storage.objects
FOR SELECT
USING (bucket_id = 'resumes');