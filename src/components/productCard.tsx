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
  const currentCategoryGender = searchParams.get("cat");
  const currentCategoryType = searchParams.get("type");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      let query = supabase
        .from("products")
        .select("*")
        .eq("category_gender", currentCategoryGender);

      if (currentCategoryType) {
        query = query.eq("category_type", currentCategoryType);
      }
      const { data, error } = await query;
      console.log("zdzd" + data);
      if (error) {
        console.error(error);
        setProducts([]);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    if (currentCategoryGender) {
      fetchProducts();
    }
  }, [currentCategoryGender, currentCategoryType]);
  if (loading) return <p>Chargement...</p>;
  if (!products.length) return <p>Aucun produit trouvé.</p>;

  return (
    <>
      {products.map((product) => (
        <div className="mt-8" key={product.id}>
          <Image
            className="h-[32rem] w-[27rem] bg-gray-500"
            src={product.image ?? "/clothes.gif"}
            alt={product.name}
            width={100}
            height={100}
          />
          <p className="mt-4">{product.name}</p>
          <p className="mt-2">{product.price} €</p>
        </div>
      ))}
    </>
  );
}
