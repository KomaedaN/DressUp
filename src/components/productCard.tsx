import Image from "next/image";

export type ProductProps = {
  nom: string;
  prix?: number;
  image?: string;
};

export default function ProductCard({ nom, prix, image }: ProductProps) {
  return (
    <div className="mt-8">
      <Image
        className="h-[32rem] w-[27rem] bg-gray-500"
        src={image ?? "/clothes.gif"}
        alt={nom}
        width={100}
        height={100}
      />
      <p className="mt-4">{nom}</p>
      <p className="mt-2">{prix} €</p>
    </div>
  );
}
