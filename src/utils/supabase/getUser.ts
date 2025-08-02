import { createClient } from "@/utils/supabase/server";

export async function getServerUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  return { user: data?.user ?? null, error };
}
