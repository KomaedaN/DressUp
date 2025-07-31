"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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

type Props = {
  type: Product[];
};
export default function MoreArticle({ type }: Props) {
  const [carousel, setCarousel] = useState(0);

  return (
    <>
      {type.length > 2 && (
        <h1 className="mt-15 text-xl font-bold max-lg:text-center">
          Découvrez des chaussures similaires :
        </h1>
      )}

      <div className="relative mt-6 max-lg:w-full w-[55rem]">
        <div className="overflow-hidden">
          <div
            className="flex lg:gap-x-5 transition-transform duration-300 max-md:flex-col max-md:items-center md:grid md:grid-cols-2 md:justify-items-center lg:flex"
            style={{ transform: `translateX(-${carousel}px)` }}
          >
            {type.map((prod) => (
              <Link
                href={`/article/${prod.slug}`}
                key={prod.slug}
                className="relative lg:w-[280px] lg:h-[330px] max-md:w-full max-lg:w-[370px] h-[400px] flex-shrink-0 max-lg:mb-6"
              >
                <Image
                  src={prod.image ?? "/basket_violet"}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 400px) 100vw, 400px"
                  priority
                  className="object-contain "
                />
              </Link>
            ))}
          </div>
        </div>

        {carousel > 0 && (
          <div className="absolute top-1/2 left-[-50] max-lg:hidden">
            <button
              className="bg-black text-white pl-2 pr-2 pt-5 pb-5 cursor-pointer"
              onClick={() => setCarousel((prev) => Math.max(0, prev - 310))}
            >
              ◀
            </button>
          </div>
        )}
        {carousel < (type.length - 3) * 310 && (
          <div className="absolute top-1/2 right-[-50] max-lg:hidden">
            <button
              className="bg-black text-white pl-2 pr-2 pt-5 pb-5 cursor-pointer"
              onClick={() =>
                setCarousel((prev) =>
                  Math.min((type.length - 3) * 310, prev + 310)
                )
              }
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </>
  );
}
