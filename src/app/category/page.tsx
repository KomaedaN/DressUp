import ProductCard from "@/components/productCard";

const produits = [
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

export default async function CategoryPage({ searchParams }: any) {
  const currentCategoryId = searchParams.cat;

  const products = produits.filter(
    (prod) => String(prod.categorieId) === currentCategoryId
  );

  return (
    <section className="h-[calc(100vh-100px)]">
      <nav className="h-[50px] bg-gray-500 flex pl-[150px] pr-[150px] items-center text-white">
        <p>Catégorie {currentCategoryId}</p>
      </nav>
      <div className="grid grid-cols-[6fr_1fr] pl-[150px] pr-[150px]">
        <section className="grid grid-cols-3 justify-items-center gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={product.nom + idx}
              nom={product.nom}
              prix={product.prix}
              image={product.image}
            />
          ))}
        </section>
        <div className="h-[calc(100vh-150px)] w-[25rem] bg-red-500"></div>
      </div>
    </section>
  );
}
