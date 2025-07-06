export type ProductProps = {
  nom: string;
  prix?: number;
  image?: string;
};

export default function ProductCard({ nom, prix, image }: ProductProps) {
  return (
    <div className="mt-8">
      <img className="h-[32rem] w-[27rem] bg-gray-500" src={image} />
      <p className="mt-4">{nom}</p>
      <p className="mt-2">{prix} €</p>
    </div>
  );
}
