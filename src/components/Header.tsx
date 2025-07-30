"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const category = [
    { name: "Homme", type: ["Baskets", "Running", "Football", "Escalade"] },
    { name: "Femme", type: ["Baskets", "Running", "Football", "Escalade"] },
    { name: "Accessoires", type: ["Semelle", "Bracelet"] },
  ];
  const [hovered, setHovered] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex h-[90px] items-center justify-between lg:pr-[150px] lg:pl-[150px] pr-[50px] pl-[50px]">
      <Link href={"/"} className="xl:mr-10 lg:mr-5">
        <Image
          src="/dress-up.png"
          alt="logo"
          className="h-[90px] w-[90px] min-h-[90px] min-w-[90px]"
          width={100}
          height={100}
          priority
        />
      </Link>
      <nav className=" items-center justify-evenly relative md:flex hidden">
        {category?.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col"
            onMouseEnter={() => setHovered(cat.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              href={`/category?cat=${cat.name.toLowerCase()}`}
              className="lg:ml-9 lg:mr-9 md:ml-5 md:mr-5 text-2xl border-b-3 border-transparent hover:border-black transition pb-3 pt-3"
            >
              {cat.name}
            </Link>
            {hovered === cat.name && (
              <div className="pl-10 w-[20rem] pt-5 pb-5 absolute top-[80px] bg-white top-full rounded z-10">
                {cat.type.map((sub, idx) => (
                  <div
                    className="pt-3 border-b-3 border-transparent hover:border-black transition w-max"
                    key={idx}
                  >
                    <Link
                      href={`/category?cat=${cat.name.toLowerCase()}&type=${sub.toLowerCase()}`}
                    >
                      {sub}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="md:flex hidden">
        <Link href={"/authentication"} className="xl:mr-10 lg:mr-5">
          <Image
            className="min-h-[55px] min-w-[55px]"
            src="/profil.png"
            alt="logo profil"
            width={55}
            height={55}
            priority
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="min-h-[55px] min-w-[55px]"
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
      <Image
        onClick={() => setMenu(true)}
        className="min-h-[50px] min-w-[50px]"
        src="/menu.png"
        alt="logo panier"
        width={50}
        height={50}
        sizes="(max-width: 100px) 100%, 100px"
        priority
      />

      <div
        className={`top-0 right-0 w-full h-full bg-white fixed z-50 transform transition-transform duration-500 ${
          menu ? " translate-x-0" : " translate-x-full "
        }`}
      >
        <Image
          onClick={() => setMenu(false)}
          className="min-h-[50px] min-w-[50px]"
          src="/close.png"
          alt="logo panier"
          width={50}
          height={50}
          sizes="(max-width: 100px) 100%, 100px"
          priority
        />
      </div>
    </header>
  );
}
