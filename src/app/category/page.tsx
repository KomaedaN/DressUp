import FilterContent from "@/components/products/FilterContent";
import BannerDetail from "@/components/BannerDetail";
import ProductCard from "@/components/productCard";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function CategoryPage() {
  return (
    <>
      <Header />
      <section className="h-[calc(100vh-100px)]">
        <Suspense>
          <BannerDetail />
        </Suspense>
        <section className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center lg:pl-[50px] lg:pr-[50px] pl-[10px] pr-[10px] justify-center gap-x-7">
          <Suspense>
            <ProductCard />
          </Suspense>
          <Suspense>
            <FilterContent />
          </Suspense>
        </section>
      </section>
    </>
  );
}
