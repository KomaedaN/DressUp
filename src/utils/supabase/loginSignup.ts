"use server";

import { createClient } from "./server";

export async function login(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    return "mot de passe ou identifiant incorrect";
  }

  return "Vous êtes connecté";
}

export async function signup(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);
  if (error) {
    console.log(error);
    return "mot de passe ou identifiant invalide";
  }
  return "Un mail de confirmation vous a été envoyé pour valider votre inscription.";
}
