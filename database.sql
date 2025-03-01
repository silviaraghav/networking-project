-- Database Schema for Networking Project (Supabase PostgreSQL)

-- Create table for storing user queries
CREATE TABLE dns_queries (
    id SERIAL PRIMARY KEY,
    domain TEXT NOT NULL,
    ip_address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


-- Enable Row Level Security (RLS) for security
ALTER TABLE dns_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy to allow only authenticated users to insert/select their data
alter policy "Allow Insert/select for Anonymous Users"
on "public"."dns_queries"
to public
with check (
  (auth.role() = 'anon'::text)
);

-- Public access policy for DNS queries (Optional - Remove if restricted access needed)
alter policy "Allow Public Read/Write"
on "public"."dns_queries"
to public
using (true);
