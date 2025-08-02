"use client";
import { login, signup } from "./action";
import Header from "@/components/Header";

export default function LoginPage() {
  return (
    <>
      <div className="sm:h-[calc(100vh-90px)] h-[calc(100vh-70px)] flex flex-col-reverse items-end">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="sm:h-[calc(100vh-90px)] h-[calc(100vh-70px)] w-full object-cover"
        >
          <source src="/home-page-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
          {/* Formulaire centré */}
          <form className="flex flex-col bg-white/90 p-8 rounded-xl shadow-lg w-[90%] max-w-md">
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
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mb-6 p-2 border rounded"
            />

            <button
              formAction={login}
              className="mb-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Log in
            </button>
            <button
              formAction={signup}
              className="bg-gray-200 py-2 rounded hover:bg-gray-300 transition"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
