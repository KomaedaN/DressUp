import { logoutAction } from "@/app/profil/actions";

import Header from "@/components/Header";

export default async function ProfilPage() {
  return (
    <>
      <Header />
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
