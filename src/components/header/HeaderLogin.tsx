"use client";

import { useState } from "react";
import Image from "next/image";
import { login, signup } from "../../utils/supabase/loginSignup";
import { useActionState } from "react";

export default function HeaderLogin() {
  const [isActive, setIsActive] = useState(false);

  const [loginError, loginAction] = useActionState(login, null);
  const [signUpError, signpUpAction] = useActionState(signup, null);
  const [currentState, setCurrentState] = useState<"login" | "signup" | null>(
    null
  );

  return (
    <>
      {!isActive ? (
        <Image
          onClick={() => setIsActive(!isActive)}
          className="min-h-[55px] min-w-[55px] cursor-pointer xl:mr-10 lg:mr-5"
          src="/profil.png"
          alt="logo profil"
          width={55}
          height={55}
          priority
        />
      ) : (
        <>
          <Image
            className="min-h-[55px] min-w-[55px] cursor-pointer xl:mr-10 lg:mr-5"
            src="/profil.png"
            alt="logo profil"
            width={55}
            height={55}
            priority
          />
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-10"
            onClick={() => setIsActive(!isActive)}
          ></div>

          <form className="flex flex-col bg-white/90 p-8 rounded-xl shadow-lg w-[90%] max-w-md fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
            <h1 className="font-bold text-center mb-5 text-lg">
              Inscrivez-vous ou connectez-vous ici !
            </h1>
            <label htmlFor="email" className="mb-2 font-medium text-gray-700">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mb-4 p-2 border rounded"
            />

            <label
              htmlFor="password"
              className="mb-2 font-medium text-gray-700"
            >
              Mot de passe:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mb-6 p-2 border rounded"
            />

            <button
              onClick={() => setCurrentState("login")}
              formAction={loginAction}
              className="mb-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Se connecter
            </button>
            <button
              onClick={() => setCurrentState("signup")}
              formAction={signpUpAction}
              className="bg-gray-200 py-2 rounded hover:bg-gray-300 transition"
            >
              Créer un compte
            </button>
            {currentState === "login" && loginError && (
              <p className="text-red-500 mt-2 text-center">{loginError}</p>
            )}
            {currentState === "signup" && signUpError && (
              <p className="text-red-500 mt-2 text-center">{signUpError}</p>
            )}
          </form>
        </>
      )}
    </>
  );
}
