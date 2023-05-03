import { createClient } from "@supabase/supabase-js";

const supabase_uri= import.meta.env.VITE_APP_URI;
const supabase_non_key= import.meta.env.VITE_APP_NON_KEY;

export const supabase = createClient(
    supabase_uri,
    supabase_non_key
)