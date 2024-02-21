import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ifjlmiqobcjavnwxdwnw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmamxtaXFvYmNqYXZud3hkd253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NzczODAsImV4cCI6MjAyMjM1MzM4MH0.qSqsXDMtODJPk01GUHB-zTB5NjE8ZRIRN5yxMQ46vfs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
