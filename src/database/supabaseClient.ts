import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jcnhgsmhyuzwyrxtbnpe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impjbmhnc21oeXV6d3lyeHRibnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNTczNTcsImV4cCI6MjAxMzgzMzM1N30.WAkSYrGsgc0QOyJNQKYITNS7LUPJeRrZVgtb6MCZKmc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
