"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category_gender: string;
  category_type: string;
  price: number;
  image?: string;
  color?: string;
  slug: string;
};

export default function ProductCard() {
  const params = useSearchParams();
  const currentCategoryGender = params.getAll("cat");
  const currentCategoryType = params.getAll("type");
  const currentColor = params.getAll("color");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const filters = [
    { field: "category_gender", values: currentCategoryGender },
    { field: "category_type", values: currentCategoryType },
    { field: "color", values: currentColor },
  ];

  useEffect(() => {
    async function fetchProducts() {
      let query = supabase.from("products").select("*");
      setLoading(true);

      filters.forEach((e) => {
        if (e.values.length) {
          query = query.in(e.field, e.values);
        }
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
        <Link
          className="mt-8 w-[100%]"
          key={product.id}
          href={`/article/${product.slug}`}
        >
          <div className="relative h-auto">
            <Image
              className="object-cover h-auto w-full"
              src={product.image ?? "/basket_violet"}
              alt={product.name}
              width={500}
              height={500}
              sizes="(max-width: 500px) 100vw, 480px"
              priority
            />
          </div>
          <p className="mt-3 font-bold">{product.name}</p>
          <p>{product.price} €</p>
        </Link>
      ))}
    </>
  );
}
