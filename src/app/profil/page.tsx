import { logoutAction } from "@/app/profil/actions";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function ProfilPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <h1>COOOOO</h1>
      <form action={logoutAction}>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </form>
    </>
  );
}
