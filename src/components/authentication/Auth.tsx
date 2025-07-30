"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setMessage(error ? error.message : "Connecté !");
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      setMessage(error ? error.message : "Compte créé !");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">
        {isLogin ? "Connexion" : "Inscription"}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-64">
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {isLogin ? "Se connecter" : "S'inscrire"}
        </button>
      </form>

      {message && <p className="mt-4 text-red-500">{message}</p>}

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-blue-500 underline"
      >
        {isLogin ? "Créer un compte" : "Déjà inscrit ?"}
      </button>
    </div>
  );
}
