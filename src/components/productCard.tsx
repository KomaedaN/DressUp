"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export type ProductProps = {
  nom: string;
  categorieId?: number;
  prix?: number;
  image?: string;
};

const produits: ProductProps[] = [
  { nom: "T-shirt", categorieId: 1, prix: 150, image: "/clothes.gif" },
  { nom: "T-shirt", categorieId: 2, prix: 150, image: "/clothes.gif" },
  { nom: "T-shirt", categorieId: 3, prix: 150, image: "/clothes.gif" },
  { nom: "T-shirt", categorieId: 1, prix: 150, image: "/clothes.gif" },
  { nom: "T-shirt", categorieId: 2, prix: 150, image: "/clothes.gif" },
  { nom: "T-shirt", categorieId: 3, prix: 150, image: "/clothes.gif" },
  { nom: "T-shirt", categorieId: 1, prix: 150, image: "/clothes.gif" },
  { nom: "T-shirt", categorieId: 2, prix: 150, image: "/clothes.gif" },
  { nom: "T-shirt", categorieId: 3, prix: 150, image: "/clothes.gif" },
  { nom: "short", categorieId: 1, prix: 200, image: "/clothes.gif" },
  { nom: "pull", categorieId: 1, prix: 100, image: "/clothes.gif" },
];

export default function ProductCard() {
  const searchParams = useSearchParams();
  const currentCategoryId = searchParams.get("cat");

  const products = produits.filter(
    (prod) => String(prod.categorieId) === currentCategoryId
  );

  return (
    <>
      {products.map((product, idx) => (
        <div className="mt-8" key={idx}>
          <Image
            className="h-[32rem] w-[27rem] bg-gray-500"
            src={product.image ?? "/clothes.gif"}
            alt={product.nom}
            width={100}
            height={100}
          />
          <p className="mt-4">{product.nom}</p>
          <p className="mt-2">{product.prix} €</p>
        </div>
      ))}
    </>
  );
}
