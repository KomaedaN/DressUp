"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { div } from "framer-motion/client";

export default function BannerDetail() {
  const searchParams = useSearchParams();
  const currentCategoryType = searchParams.getAll("type");
  const currentCategoryGender = searchParams.getAll("cat");

  return (
    <>
      <nav className="h-[50px] bg-black flex pl-[150px] pr-[150px] items-center text-white space-between">
        <Link key="home" href="./">
            <p className="text-xl mr-4 border-b-2 hover:scale-110">Accueil</p>
          </Link>
           <p className="text-xl mr-4">/</p>
        {currentCategoryType.map((type, idx) => (
          <div key={idx} className="flex">
          <Link key={idx} href={`/category?type=${type.toLowerCase()}`}>
            <p className="text-xl mr-4 border-b-2 hover:scale-110" >{type}</p>
          </Link>
           <p className="text-xl mr-4">/</p>
           </div>
        ))}

        {currentCategoryGender.map((cat, idx) => (
          <div key={idx} className="flex">
          <Link key={idx} href={`/category?cat=${cat.toLowerCase()}`}>
            
            <p className="text-xl mr-4 border-b-2 hover:scale-110">{cat}</p>
          </Link>
           <p className="text-xl mr-4">/</p>
           </div>
        ))}
      </nav>
    </>
  );
}
