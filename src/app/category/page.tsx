import FilterContent from "@/components/products/FilterContent";
import BannerDetail from "@/components/BannerDetail";
import ProductCard from "@/components/productCard";
import { Suspense } from "react";

export default function CategoryPage() {
  return (
    <section className="h-[calc(100vh-100px)]">
      <Suspense>
        <BannerDetail />
      </Suspense>
      <section className="grid grid-cols-3 justify-items-center pl-[50px] pr-[50px] justify-center gap-x-7">
        <Suspense>
          <ProductCard />
        </Suspense>
        <Suspense>
          <FilterContent />
        </Suspense>
      </section>
    </section>
  );
}
