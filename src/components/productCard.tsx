"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

type Product = {
  id: number;
  name: string;
  category_gender: string;
  category_type: string;
  price: number;
  image?: string;
};

export default function ProductCard() {
  const searchParams = useSearchParams();
  const currentCategoryGender = searchParams.get("cat") ?? "";
  const currentCategoryType = searchParams.get("type");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      let query = supabase.from("products").select("*");

      if (currentCategoryGender) {
        query = query.eq("category_gender", currentCategoryGender);
      }
      if (currentCategoryType) {
        query = query.eq("category_type", currentCategoryType);
      }
      const { data, error } = await query;
      if (error) {
        console.error(error);
        setProducts([]);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }
    fetchProducts();
  }, [currentCategoryGender, currentCategoryType]);
  if (loading) return <p>Chargement...</p>;
  if (!products.length) return <p>Aucun produit trouvé.</p>;
  return (
    <>
      {products.map((product) => (
        <div className="mt-8 pl-5 pr-5" key={product.id}>
          <div className="relative w-[27rem] h-[30rem]">
            <Image
              className=" bg-gray-500 object-cover"
              src={product.image ?? "/basket_violet"}
              alt={product.name}
              fill
              sizes="(max-width: 500px) 100vw, 480px"
              priority
            />
          </div>
          <p className="mt-4">{product.name}</p>
          <p className="mt-2">{product.price} €</p>
        </div>
      ))}
    </>
  );
}
