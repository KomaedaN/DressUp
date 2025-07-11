import Image from "next/image";

export default function Partners() {
  return (
    <div className="bg-gray-500 h-[50rem] mb-5 w-full relative">
      <Image
        src={"/partners.png"}
        alt="patners"
        fill
        sizes="(max-width: 800px) 100vw, 800px"
        priority
      />
      <h2 className="text-7xl text-white absolute bottom-15 right-15 font-extrabold object-cover">
        Rejoins nos <br />
        Partenaires
      </h2>
    </div>
  );
}
