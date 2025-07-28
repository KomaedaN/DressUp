import Link from "next/link";
import Image from "next/image";

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
  product: Product;
};

export default function ArticleDetail({ product }: Props) {
  return (
    <>
      <Image
        className="object-cover h-auto w-full relative h-auto max-w-[650px] max-h-[650px] justify-self-end"
        src={product.image ?? "/basket_violet"}
        alt={product.name}
        width={500}
        height={500}
        sizes="(max-width: 500px) 100vw, 480px"
        priority
      />
      <div className="justify-self-start flex flex-col">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <Link
          href={`/category?type=${product.category_type.toLowerCase()}`}
          className="underline underline-offset-4 mt-7 text-xl mb-2"
        >
          {product.category_type}
        </Link>
        <p className="mt-5 text-xl font-bold">{product.price} €</p>

        <p className="text-xl mt-7">Couleur disponible:</p>

        <div className="flex mt-4">
          <span
            className={`color_${product.color} h-[40px] w-[40px] border-2 border-black-200 mr-5`}
          ></span>
        </div>

        <button className="cursor-pointer border mt-15 pl-17 pr-17 pb-4 pt-4 text-xl  hover:text-white hover:bg-black">
          Ajouter au panier
        </button>
        <button className="cursor-pointer border mt-5 pl-17 pr-17 pb-4 pt-4 text-xl bg-black text-white hover:text-black hover:bg-white">
          Mettre en favoris
        </button>
      </div>
    </>
  );
}
