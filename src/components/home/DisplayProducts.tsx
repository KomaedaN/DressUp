"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

type PresentationProduct = {
  id: number;
  description: string;
  image: string;
  type: string;
};

export default function DisplayProducts() {
  const [presentationProducts, setPresentationProducts] = useState<
    PresentationProduct[]
  >([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchPresentationProducts() {
      setLoading(true);

      const { data, error } = await supabase
        .from("presentationProduct")
        .select("*");
      if (error) {
        console.error(error);
        setPresentationProducts([]);
      } else {
        setPresentationProducts(data || []);
      }
      setLoading(false);
    }
    fetchPresentationProducts();
  }, []);
  if (loading) return <p>Chargement...</p>;
  if (!presentationProducts.length) return <p>Aucun produit trouvé.</p>;

  return (
    <div className="grid grid-cols-3 mt-17 justify-items-center ">
      {presentationProducts.map((product, idx) => (
        <div key={idx}>
          <Link href={`/category?type=${product.type}`}>
            <div className="relative w-[25rem] h-[35rem]">
              <Image
                src={product.image ?? "/basket_violet"}
                alt={product.type}
                fill
                className="object-cover"
                sizes="(max-width: 500px) 100vw, 480px"
                priority
              ></Image>
            </div>
          </Link>
          <div className=" relative bottom-40 pl-7  flex flex-col">
            <Link href={`/category?type=${product.type}`}>
              <p className="text-white [text-shadow:_2px_2px_0_black] text-2xl max-w-[15rem]">
                {product.description}
                {product.type} !
              </p>
            </Link>
            <div className="pt-7">
              <Link
                href={`/category?cat=homme&type=${product.type}`}
                className="bg-white rounded-2xl mr-2 py-0.5 px-3 text-xl shadow-lg hover:shadow-2xl"
              >
                Homme
              </Link>
              <Link
                href={`/category?cat=femme&type=${product.type}`}
                className="bg-white rounded-2xl py-0.5 px-3 text-xl shadow-lg hover:shadow-2xl"
              >
                Femme
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
