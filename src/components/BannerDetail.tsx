"use client";

import { useSearchParams } from "next/navigation";

export default function BannerDetail() {
  const searchParams = useSearchParams();
  const currentCategoryType = searchParams.get("type");

  return (
    <>
      <nav className="h-[50px] bg-gray-500 flex pl-[150px] pr-[150px] items-center text-white space-between">
        <p>{currentCategoryType} </p>
      </nav>
    </>
  );
}
