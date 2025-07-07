import CategoryContent from "@/components/CategoryContent";
import BannerDetail from "@/components/BannerDetail";
import { Suspense } from "react";

export default function CategoryPage() {
  return (
    <section className="h-[calc(100vh-100px)]">
      <Suspense>
        <BannerDetail />
      </Suspense>

      <CategoryContent />
    </section>
  );
}
