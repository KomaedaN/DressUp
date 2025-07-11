"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function BannerDetail() {
  const searchParams = useSearchParams();
  const currentCategoryType = searchParams.getAll("type");
  const currentCategoryGender = searchParams.getAll("cat");

  return (
    <>
      <nav className="h-[50px] bg-gray-500 flex pl-[150px] pr-[150px] items-center text-white space-between">
        {currentCategoryType.map((type, idx) => (
          <Link key={idx} href={`/category?type=${type.toLowerCase()}`}>
            <p className="text-xl mr-2 border-b-2">{type}</p>
          </Link>
        ))}

        {currentCategoryGender.map((cat, idx) => (
          <Link key={idx} href={`/category?cat=${cat.toLowerCase()}`}>
            <p className="text-xl mr-2 border-b-2">{cat}</p>
          </Link>
        ))}
      </nav>
    </>
  );
}
