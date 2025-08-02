import Link from "next/link";
import Image from "next/image";

import HeaderCategory from "./header/HeaderCategory";
import HeaderProfil from "./header/HeaderProfil";
import HeaderMobile from "./header/HeaderMobile";

export default function Header() {
  return (
    <header className="flex sm:h-[90px] h-[70px] items-center justify-between lg:pr-[150px] lg:pl-[150px] pr-[50px] pl-[50px]">
      <Link href={"/"} className="xl:mr-10 lg:mr-5">
        <Image
          src="/dress-up.png"
          alt="logo"
          className="sm:h-[90px] sm:w-[90px] h-[65px] w-[65px] min-h-[65px] min-w-[65px]"
          width={100}
          height={100}
          priority
        />
      </Link>
      <HeaderCategory />

      <div className="md:flex hidden">
        <HeaderProfil />
        <Link href={"/"}>
          <Image
            className="min-h-[35px] min-w-[35px] sm:h-[55px] sm:w-[55px] h-[35px] w-[35px]"
            src="/panier.png"
            alt="logo panier"
            width={55}
            height={55}
            sizes="(max-width: 100px) 100%, 100px"
            priority
          />
        </Link>
      </div>

      {/* responsive md< */}
      <HeaderMobile>
        <HeaderProfil />
      </HeaderMobile>
    </header>
  );
}
