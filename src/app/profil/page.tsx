import { logoutAction } from "@/app/profil/actions";

import Header from "@/components/Header";

import { getServerUser } from "@/utils/supabase/getUser";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function ProfilPage() {
  const { user } = await getServerUser();
  if (!user) {
    return <h1>Utilisateur non connecté</h1>;
  }

  const supabase = await createClient();

  const { data: userProfil, error: profilError } = await supabase
    .from("profil")
    .select("*")
    .eq("id", user.id)
    .single();
  if (!userProfil || profilError) {
    return <h1>Aucun profil trouvé</h1>;
  }
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .in("id", userProfil.favoris);
  if (!products || productsError) {
    return <h1>Aucun produit trouvé</h1>;
  }
  console.log(products);
  return (
    <>
      <Header />
      <h1>{userProfil.name}</h1>
      <h2>{userProfil.last_name}</h2>
      <section className="lg:pl-20 lg:pr-20 flex flex-col items-center mb-10">
        {products.map((product) => (
          <Image
            key={product.id}
            className="min-h-[300px] min-w-[300px]"
            src={product.image}
            alt="logo profil"
            width={300}
            height={300}
            priority
          />
        ))}
      </section>
      <h1>Se déconnecter</h1>
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
