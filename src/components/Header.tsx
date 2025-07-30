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

      <Image
        onClick={() => setMenu(true)}
        className="min-h-[35px] min-w-[35px] sm:h-[55px] sm:w-[55px] h-[35px] w-[35px] md:hidden flex cursor-pointer "
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
        <div className="flex justify-around items-center h-[100px] border-b">
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

          <Image
            onClick={() => setMenu(false)}
            className="min-h-[50px] min-w-[50px] cursor-pointer"
            src="/close.png"
            alt="logo panier"
            width={50}
            height={50}
            sizes="(max-width: 100px) 100%, 100px"
            priority
          />
        </div>

        <div className="mt-8">
          <nav className=" items-center  relative pl-10 pr-10">
            {category?.map((cat, idx) => (
              <div key={idx} className="flex flex-col">
                <Link
                  href={`/category?cat=${cat.name.toLowerCase()}`}
                  className="text-2xl border-b-3 hover:border-black transition pb-3 pt-3"
                >
                  {cat.name}
                </Link>

                <div className="pt-3 pb-3">
                  {cat.type.map((sub, idx) => (
                    <div
                      className="pt-5 hover:border-black transition  border-b border-gray-300"
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
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
