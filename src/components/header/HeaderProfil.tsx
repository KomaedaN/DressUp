import { getServerUser } from "@/utils/supabase/getUser";
import Link from "next/link";
import Image from "next/image";
import HeaderLogin from "./HeaderLogin";

export default async function HeaderProfil() {
  const { user } = await getServerUser();
  return (
    <>
      {user ? (
        <Link href={"/profil"} className="xl:mr-10 lg:mr-5">
          <Image
            className="min-h-[55px] min-w-[55px] bg-green-300 rounded-4xl"
            src="/profil.png"
            alt="logo profil"
            width={55}
            height={55}
            priority
          />
        </Link>
      ) : (
        <HeaderLogin />
      )}
    </>
  );
}
