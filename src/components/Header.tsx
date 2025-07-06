import Link from "next/link";

const categories = [
  { id: "1", name: "Homme" },
  { id: "2", name: "Femme" },
  { id: "3", name: "Accessoires" },
];

export default function Header() {
  return (
    <header className="flex h-[100px] items-center justify-between pr-[150px] pl-[150px]">
      <img src="/DressUp.png" alt="logo" className="h-[100px] w-auto" />
      <nav className="flex items-center justify-evenly">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category?cat=${cat.id}`}
            className="ml-10 mr-10 text-2xl border-b-3 border-transparent hover:border-black transition pb-3 pt-3"
          >
            {cat.name}
          </Link>
        ))}
      </nav>
      <img src="/panier.png" alt="logo" className="h-[100px] w-auto" />
    </header>
  );
}
