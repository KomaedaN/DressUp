"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

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
  const supabase = createClient();
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
    <div className="grid lg:grid-cols-3 mt-17 justify-items-center ">
      {presentationProducts.map((product, idx) => (
        <div key={idx}>
          <Link href={`/category?type=${product.type}`}>
            <div className="relative xl:w-[25rem] xl:h-[35rem] lg:w-[20rem] lg:h-[30rem] sm:w-[30rem] sm:h-[35rem] w-[20rem] h-[25rem]">
              <Image
                src={product.image}
                alt={product.type}
                fill
                className="object-cover"
                priority
              ></Image>
            </div>
          </Link>
          <div className=" relative bottom-40 pl-7 flex flex-col">
            <Link href={`/category?type=${product.type}`}>
              <p className="text-white [text-shadow:_2px_2px_0_black] text-2xl max-w-[15rem]">
                {product.description}
                {product.type} !
              </p>
            </Link>
            <div className="sm:pt-7">
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
