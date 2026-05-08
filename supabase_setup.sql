-- Create members table
CREATE TABLE IF NOT EXISTS members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  info TEXT NOT NULL,
  github_url TEXT,
  instagram_url TEXT,
  linkedin_url TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read members data
CREATE POLICY "Allow public read access" ON members
  FOR SELECT USING (true);

-- Insert sample data
INSERT INTO members (name, role, info) VALUES
('Muhamad Alfian Holidi', 'Ketua Kelompok', 'Informatika 2026'),
('Anggota 2', 'Sekretaris', 'Informatika 2026'),
('Anggota 3', 'Bendahara', 'Informatika 2026')
ON CONFLICT DO NOTHING;
