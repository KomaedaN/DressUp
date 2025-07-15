"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { div, label } from "framer-motion/client";

{
  /* importer les valeurs ici à l'ajout d'un filtre dans la bdd */
}
const GENDER = ["homme", "femme"];
const TYPE = [
  "baskets",
  "running",
  "bottes",
  "football",
  "claquettes",
  "escalade",
];
const COLOR = [
  {name: "orange", selected: false},
  {name: "vert", selected: false},
  {name: "rouge", selected: false},
  {name: "violet", selected: false},
  {name: "bleu", selected: false},
  {name: "jaune", selected: false},
  {name: "rose", selected: false},
  {name: "noir", selected: false},
  {name: "blanc", selected: false},
];

export default function FilterContent() {
  const [showFilters, setShowFilters] = useState(false);
  const [colors, setColors] = useState(COLOR);
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


  function handleSelect(value: string, selected: boolean) {
setColors(prev => 
  prev.map(c =>
    c.name === value
      ? { ...c, selected: !c.selected }
      : c
  )
  
); updateFilterGender("color", value);
  }
  return (
    <>
      <section>
        {!showFilters && (
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="absolute top-[93px] right-[150px] cursor-pointer bg-white p-[10px] font-bold rounded hover:scale-110 "
          >
            Afficher les Filtres
          </button>
        )}

        {showFilters && (
          <>
            {/* ajout d'un fond noir sur la page */}
            <div
              className="h-[100%] w-[100%] fixed bg-black left-[0] top-[0] opacity-60 "
              onClick={() => setShowFilters((prev) => !prev)}
            ></div>

            <div className=" w-[30rem] bg-white fixed top-[0] right-[0] h-screen b flex flex-col">
              <button
                onClick={() => setShowFilters((prev) => !prev)}
                className=" cursor-pointer p-[10px] bg-black font-bold text-white text-xl mb-10"
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

              <div className="grid justify-center gap-x-8 grid-cols-5 m-5">
                {colors.map((value) => (
                  
                  <label key={value.name}>
                    <input type="checkbox" name={value.name} value={value.name} checked={value.selected} onChange={() => handleSelect(value.name, value.selected)}/>
                    <span className={`color_${value.name} px-4 py-1 rounded cursor-pointer h-[40px] w-[40px] border-3 border-white hover:border-black`}></span>
                  </label>
                  
                
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
