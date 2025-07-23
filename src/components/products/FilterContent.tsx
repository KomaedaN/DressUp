"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

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
  { name: "orange", selected: false },
  { name: "vert", selected: false },
  { name: "rouge", selected: false },
  { name: "violet", selected: false },
  { name: "bleu", selected: false },
  { name: "jaune", selected: false },
  { name: "rose", selected: false },
  { name: "noir", selected: false },
  { name: "blanc", selected: false },
];

export default function FilterContent() {
  const [showGenderMenu, setShowGenderMenu] = useState(false);
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const [showColorMenu, setShowColorMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [colors, setColors] = useState(COLOR);

  const getParams = useSearchParams();
  const router = useRouter();
  const allParams = useSearchParams();
  const params = new URLSearchParams(allParams.toString());

  function updateFilter(paramName: string, value: string) {
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

  useEffect(() => {
    const selectedColors = getParams.getAll("color");
    setColors((prev) =>
      prev.map((c) =>
        selectedColors.includes(c.name)
          ? { ...c, selected: true }
          : { ...c, selected: false }
      )
    );
  }, [getParams]);
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

            <div className=" w-[30rem] bg-white fixed top-[0] right-[0] h-screen b flex flex-col p-5 scrollbar-hide overflow-auto">
              <button
                onClick={() => setShowFilters((prev) => !prev)}
                className=" cursor-pointer p-[10px] bg-black font-bold text-white text-xl mb-10 hover:scale-105"
              >
                Cacher les filtres
              </button>

              <div className="flex justify-center flex-col gap-x-8 mt-6">
                <div
                  className="flex items-center justify-between cursor-pointer border-b pb-4"
                  onClick={() => setShowGenderMenu((prev) => !prev)}
                >
                  <p className="font-bold">SEXE</p>
                  <Image
                    src={"/filtre-arrow.png"}
                    alt="filter arrow"
                    width={30}
                    height={30}
                    className={`transition-transform duration-300 ${
                      showGenderMenu ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </div>
                {showGenderMenu && (
                  <div className="flex flex-col">
                    {GENDER.map((value) => (
                      <p
                        role="button"
                        key={value}
                        onClick={() => updateFilter("cat", `${value}`)}
                        className={
                          "px-4 py-1 pl-0 cursor-pointer pb-2 pt-2 border-b border-gray-300 capitalize"
                        }
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-center flex-col gap-x-8 grid-cols-3 mt-6">
                <div
                  className="flex items-center justify-between cursor-pointer border-b pb-4"
                  onClick={() => setShowTypeMenu((prev) => !prev)}
                >
                  <p className="font-bold">TYPE</p>
                  <Image
                    src={"/filtre-arrow.png"}
                    alt="filter arrow"
                    width={30}
                    height={30}
                    className={`transition-transform duration-300 ${
                      showTypeMenu ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </div>
                {showTypeMenu && (
                  <div className="flex flex-col">
                    {TYPE.map((value) => (
                      <p
                        role="button"
                        key={value}
                        onClick={() => updateFilter("type", `${value}`)}
                        className={
                          "px-4 py-1 pl-0 cursor-pointer pb-2 pt-2 border-b border-gray-300 capitalize"
                        }
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-center flex-col gap-x-8 mt-6">
                <div
                  className="flex items-center justify-between cursor-pointer border-b pb-4"
                  onClick={() => setShowColorMenu((prev) => !prev)}
                >
                  <p className="font-bold">COULEUR</p>
                  <Image
                    src={"/filtre-arrow.png"}
                    alt="filter arrow"
                    width={30}
                    height={30}
                    className={`transition-transform duration-300 ${
                      showColorMenu ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </div>
                {showColorMenu && (
                  <div className="mt-2 flex flex-col">
                    {colors.map((value) => (
                      <label
                        key={value.name}
                        className="flex items-center border-b border-gray-300 pb-2 pt-2 cursor-pointer"
                        onClick={() => updateFilter("color", `${value.name}`)}
                      >
                        <span
                          className={`color_${value.name} cursor-pointer h-[40px] w-[40px] border-2 border-black-200 mr-5  hover:scale-110 `}
                        ></span>
                        <input
                          type="checkbox"
                          name={value.name}
                          value={value.name}
                          checked={value.selected}
                          onChange={() => colors}
                          className=" h-[40px] w-[40px] cursor-pointer"
                        />
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
