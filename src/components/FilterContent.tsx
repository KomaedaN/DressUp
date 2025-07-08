"use client";

import { useState } from "react";

export default function FilterContent() {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      <div>
        {!showFilters && (
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className=" text-white bg-gray-500 absolute top-[110px] right-[150px]"
          >
            Afficher les Filtres
          </button>
        )}

        {showFilters && (
          <>
            <div
              className="h-[100%] w-[100%] fixed bg-black left-[0] top-[0] opacity-60"
              onClick={() => setShowFilters((prev) => !prev)}
            ></div>
            <div className=" w-[30rem] bg-gray-500 fixed top-[0] right-[0] h-screen b">
              <button
                onClick={() => setShowFilters((prev) => !prev)}
                className=" text-white bg-gray-500"
              >
                Cacher les filtres
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
