import ProductCard from "@/components/productCard";
import { Suspense } from "react";

export default async function CategoryPage() {
  return (
    <section className="h-[calc(100vh-100px)]">
      <nav className="h-[50px] bg-gray-500 flex pl-[150px] pr-[150px] items-center text-white">
        <p>Catégorie </p>
      </nav>
      <div className="grid grid-cols-[6fr_1fr] pl-[150px] pr-[150px]">
        <section className="grid grid-cols-3 justify-items-center gap-6">
          <Suspense>
            <ProductCard />
          </Suspense>
        </section>
        <div className="h-[calc(100vh-150px)] w-[25rem] bg-red-500"></div>
      </div>
    </section>
  );
}
