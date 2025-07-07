"use client";
import ProductCard from "./productCard";
import { useState } from "react";
import { Suspense } from "react";

export default function CategoryContent() {
  const [showFilters, setShowFilters] = useState(true);
  return (
    <div
      className={
        showFilters
          ? "grid grid-cols-[6fr_1fr] pl-[150px] pr-[150px]"
          : "grid grid-cols-1 pl-[150px] pr-[150px]"
      }
    >
      <section className="grid grid-cols-3 justify-items-center gap-6">
        <Suspense>
          <ProductCard />
        </Suspense>
      </section>
      <div>
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="absolute top-[110px] r-[250px] text-white"
        >
          Afficher les Filtres
        </button>
        {showFilters && (
          <div className="h-[calc(100vh-150px)] w-[25rem] bg-red-500"></div>
        )}
      </div>
    </div>
  );
}
