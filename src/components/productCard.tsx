"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import type { PostgrestFilterBuilder } from "@supabase/postgrest-js";

type Product = {
  id: number;
  name: string;
  category_gender: string;
  category_type: string;
  price: number;
  image?: string;
  color?: string;
};

export default function ProductCard() {
  const params = useSearchParams();
  const currentCategoryGender = params.getAll("cat");
  const currentCategoryType = params.getAll("type");
  const currentColor = params.getAll("color");
  let query = supabase.from("products").select("*");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const filters = [
    { field: "category_gender", values: currentCategoryGender },
    { field: "category_type", values: currentCategoryType },
    { field: "color", values: currentColor },
  ];

  function applyFilter(fieldName: string, values: string[]) {
    if (values.length) {
      return query.in(fieldName, values);
    }
    return query;
  }

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      filters.forEach((e) => {
        query = applyFilter(e.field, e.values);
      });

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
  }, [
    currentCategoryGender.join(","),
    currentCategoryType.join(","),
    currentColor.join(","),
  ]);
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
