"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeaderCategory() {
  const category = [
    { name: "Homme", type: ["Baskets", "Running", "Football", "Escalade"] },
    { name: "Femme", type: ["Baskets", "Running", "Football", "Escalade"] },
    /*{ name: "Accessoires", type: ["Semelle", "Bracelet"] },*/
  ];
  const [hovered, setHovered] = useState<string | null>(null);
  return (
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
  );
}
