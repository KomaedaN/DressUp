import DisplayProducts from "@/components/home/DisplayProducts";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="h-[calc(100vh-100px)] bg-gray-500 flex flex-col-reverse items-end">
        <div className="pb-50 pr-50">
          <h1 className="text-9xl text-white font-montserrat ">
            Deviens <br /> Mythique
          </h1>
          <button className="btn bg-white">Boutique</button>
        </div>
      </div>
      <div className="flex flex-col pr-[250px] pl-[250px]">
        <DisplayProducts />
        <div className="bg-gray-500 h-[50rem] mb-5"></div>
      </div>
    </main>
  );
}
