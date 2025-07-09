"use client";
import FilterContent from "./FilterContent";
import ProductCard from "../productCard";

export type Filters = {
  type: string;
  genre: string;
  couleur: string;
  prixMin: number | null;
  prixMax: number | null;
};

export default function CategoryContent() {
  return (
    <div className="flex gap-10">
      <ProductCard />
      <FilterContent />
    </div>
  );
}
