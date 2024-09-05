// Initialize Supabase
const { createClient } = supabase;
const supabaseUrl = 'https://umfhjmrkzsrscskmqugy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZmhqbXJrenNyc2Nza21xdWd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzODYxNTIsImV4cCI6MjA0MDk2MjE1Mn0.YSiQjUm85e84yFflphLch9wQ_G_uWhQ4z6SMhN-Wa_M';
const supabase = createClient(supabaseUrl, supabaseKey);
