import DisplayProducts from "@/components/home/DisplayProducts";
import Partners from "@/components/home/Partners";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="h-[calc(100vh-90px)] bg-gray-500 flex flex-col-reverse items-end">
        <div className="pb-35 pr-40">
          <h1 className="text-8xl text-white font-montserrat ">
            Deviens <br /> Mythique
          </h1>
          <button className="btn bg-white mt-12 text-3xl p-3">Boutique</button>
        </div>
      </div>
      <section className="flex flex-col pr-[250px] pl-[250px]">
        <DisplayProducts />
        <Partners />
      </section>
    </main>
  );
}
