"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, ReactNode } from "react";
type HeaderMobileProps = {
  children?: ReactNode;
};
export default function HeaderMobile({ children }: HeaderMobileProps) {
  const category = [
    { name: "Homme", type: ["Baskets", "Running", "Football", "Escalade"] },
    { name: "Femme", type: ["Baskets", "Running", "Football", "Escalade"] },
    { name: "Accessoires", type: ["Semelle", "Bracelet"] },
  ];

  const [menu, setMenu] = useState(false);
  return (
    <>
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
          {children}

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
    </>
  );
}
