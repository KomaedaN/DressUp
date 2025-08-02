"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function BannerDetail() {
  const searchParams = useSearchParams();
  const currentCategoryType = searchParams.getAll("type");
  const currentCategoryGender = searchParams.getAll("cat");

  return (
    <>
      <nav className="h-[50px] bg-black flex sm:pl-[150px] sm:pr-[150px] items-center text-white space-between">
        <Link key="home" href="./" className="max-sm:hidden ">
          <p className="text-xl mr-4 border-b-2 hover:scale-110 ">Accueil</p>
        </Link>
        <p className="text-xl mr-4 max-sm:hidden ">/</p>
        {currentCategoryType.map((type, idx) => (
          <div key={idx} className="flex max-sm:hidden ">
            <Link key={idx} href={`/category?type=${type.toLowerCase()}`}>
              <p className="text-xl mr-4 border-b-2 hover:scale-110">{type}</p>
            </Link>
            <p className="text-xl mr-4">/</p>
          </div>
        ))}

        {currentCategoryGender.map((cat, idx) => (
          <div key={idx} className="flex max-sm:hidden ">
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
