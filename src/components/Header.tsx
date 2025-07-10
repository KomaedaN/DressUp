"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const category = [
    { name: "Homme", type: ["Basket", "Running"] },
    { name: "Femme", type: ["Basket", "Running"] },
    { name: "Accessoires", type: ["Semelle", "Bracelet"] },
  ];
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="flex h-[90px] items-center justify-between pr-[150px] pl-[150px]">
      <Link href={"/"}>
        <Image
          src="/dress-up.png"
          alt="logo"
          className="h-[90px] w-[90px]"
          width={100}
          height={100}
          priority
        />
      </Link>
      <nav className="flex items-center justify-evenly relative">
        {category?.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col"
            onMouseEnter={() => setHovered(cat.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              href={`/category?cat=${cat.name.toLowerCase()}`}
              className="ml-10 mr-10 text-2xl border-b-3 border-transparent hover:border-black transition pb-3 pt-3"
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
      <Image
        src="/panier.png"
        alt="logo"
        width={100}
        height={100}
        sizes="(max-width: 100px) 100vw, 100px"
        priority
      />
    </header>
  );
}
