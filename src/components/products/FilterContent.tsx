"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterContent() {
  const [showFilters, setShowFilters] = useState(false);
  const getParams = useSearchParams();
  const router = useRouter();

  function updateFilter(value: string) {
    const params = new URLSearchParams(getParams.toString());
    const gender = getParams.get("cat") ?? "";
    if (gender === value) {
      params.delete("cat");
    } else {
      params.set("cat", value);
    }
    router.push(`/category?${params.toString()}`);
  }
  return (
    <>
      <section>
        {!showFilters && (
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className=" text-white bg-gray-500 absolute top-[100px] right-[150px] cursor-pointer"
          >
            Afficher les Filtres
          </button>
        )}

        {showFilters && (
          <>
            {/* ajout d'un fond noir sur la page */}
            <div
              className="h-[100%] w-[100%] fixed bg-black left-[0] top-[0] opacity-60"
              onClick={() => setShowFilters((prev) => !prev)}
            ></div>

            <div className=" w-[30rem] bg-white fixed top-[0] right-[0] h-screen b flex flex-col">
              <button
                onClick={() => setShowFilters((prev) => !prev)}
                className=" cursor-pointer"
              >
                Cacher les filtres
              </button>

              <div className="flex justify-center gap-x-8">
                <button
                  onClick={() => updateFilter("homme")}
                  className={"bg-gray-200 px-4 py-1 rounded cursor-pointer"}
                >
                  Homme
                </button>
                <button
                  onClick={() => updateFilter("femme")}
                  className={"bg-gray-200 px-4 py-1 rounded cursor-pointer"}
                >
                  Femme
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
