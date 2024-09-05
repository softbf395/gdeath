// Initialize Supabase
const { createClient } = supabase;
const supabaseUrl = 'https://YOUR-SUPABASE-URL.supabase.co';
const supabaseKey = 'YOUR-SUPABASE-KEY';
const supabase = createClient(supabaseUrl, supabaseKey);
