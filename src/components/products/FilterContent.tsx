"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

{
  /* importer les valeurs ici à l'ajout d'un filtre dans la bdd */
}
const GENDER = ["homme", "femme"];
const TYPE = [
  "basket",
  "running",
  "bottes",
  "football",
  "claquettes",
  "escalade",
];
const COLOR = [
  "orange",
  "vert",
  "rouge",
  "violet",
  "bleu",
  "jaune",
  "rose",
  "noir",
  "blanc",
];

export default function FilterContent() {
  const [showFilters, setShowFilters] = useState(false);
  const getParams = useSearchParams();
  const router = useRouter();
  const allParams = useSearchParams();
  const params = new URLSearchParams(allParams.toString());

  function updateFilterGender(paramName: string, value: string) {
    let updated: string[];
    const selectedParam = getParams.getAll(paramName);
    if (selectedParam.includes(value)) {
      updated = selectedParam.filter((g) => g !== value);
    } else {
      updated = [...selectedParam, value];
    }
    params.delete(paramName);
    updated.forEach((v) => params.append(paramName, v));
    router.push(`/category?${params.toString()}`);
  }

  function isActive(value: string) {
    let currentValue = value;
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
                {GENDER.map((value) => (
                  <button
                    key={value}
                    onClick={() => updateFilterGender("cat", `${value}`)}
                    className={"bg-gray-200 px-4 py-1 rounded cursor-pointer"}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="grid justify-center gap-x-8 grid-cols-3">
                {TYPE.map((value) => (
                  <button
                    key={value}
                    onClick={() => updateFilterGender("type", `${value}`)}
                    className={"bg-gray-200 px-4 py-1 rounded cursor-pointer"}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="grid justify-center gap-x-8 grid-cols-4">
                {COLOR.map((value) => (
                  <button
                    key={value}
                    onClick={() => updateFilterGender("color", `${value}`)}
                    className={`color_${value} px-4 py-1 rounded cursor-pointer h-[40px] w-[40px] border-3 border-white hover:border-black`}
                  ></button>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
