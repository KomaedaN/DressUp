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
    <div className="grid grid-cols-3 mt-10 justify-items-center ">
      {presentationProducts.map((product, idx) => (
        <div key={idx}>
          <div className="relative w-[30rem] h-[45rem]">
            <Image
              src={product.image ?? "/clothes.gif"}
              alt={product.type}
              fill
              className="object-cover"
            ></Image>
          </div>
          <div className=" relative bottom-40 pl-7  flex flex-col">
            <p className="text-white [text-shadow:_2px_2px_0_black] text-3xl max-w-md">
              {product.description}
              {product.type} !
            </p>

            <div className="pt-5">
              <Link
                href={`/category?cat=homme&type=${product.type}`}
                className="bg-white rounded-2xl mr-2 py-1 px-3 text-xl shadow-lg hover:shadow-2xl"
              >
                Homme
              </Link>
              <Link
                href={`/category?cat=femme&type=${product.type}`}
                className="bg-white rounded-2xl py-1 px-3 text-xl shadow-lg hover:shadow-2xl"
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
