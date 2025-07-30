import DisplayProducts from "@/components/home/DisplayProducts";
import Partners from "@/components/home/Partners";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <div className="h-[calc(100vh-90px)] flex flex-col-reverse items-end">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[calc(100vh-90px)] w-full object-cover"
          >
            <source src="/home-page-video.mp4" type="video/mp4" />
          </video>
          <div className="mb:pb-35 mb:pr-40 pb-40 pr-5 absolute">
            <h1 className="sm:text-8xl text-6xl text-white font-montserrat font-extrabold mb-12 cursor-default">
              Deviens <br /> Mythique
            </h1>
            <Link
              href={"/category"}
              className="btn bg-white text-3xl p-3 font-bold"
            >
              Boutique
            </Link>
          </div>
        </div>
        <section className="flex flex-col 2xl:pr-[150px] 2xl:pl-[150px]">
          <DisplayProducts />
          <Partners />
        </section>
      </main>
    </>
  );
}
