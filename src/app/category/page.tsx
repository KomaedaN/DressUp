import FilterContent from "@/components/FilterContent";
import BannerDetail from "@/components/BannerDetail";
import ProductCard from "@/components/productCard";
import { Suspense } from "react";

export default function CategoryPage() {
  return (
    <section className="h-[calc(100vh-100px)]">
      <Suspense>
        <BannerDetail />
      </Suspense>
      <section className="grid grid-cols-3 justify-items-center pl-[150px] pr-[150px] justify-center">
        <Suspense>
          <ProductCard />
        </Suspense>
        <FilterContent />
      </section>
    </section>
  );
}
