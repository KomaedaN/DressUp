import Image from "next/image";

export default function Partners() {
  return (
    <div className="bg-gray-500 h-[50rem] mb-5 w-full relative">
      <Image src={"/clothes.gif"} alt="patners" fill />
      <h2 className="text-7xl text-white absolute bottom-15 right-15">
        Partenaires
      </h2>
    </div>
  );
}
