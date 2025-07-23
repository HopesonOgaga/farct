import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section className="w-full max-w-md bg-white text-gray-800 p-8 rounded-2xl shadow-md">
        {/* X button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-black hover:opacity-80"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Sign In to Continue
        </h2>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
              required
            />
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            By registering, you agree to our{" "}
            <span className="underline">Terms & Conditions</span>,{" "}
            <span className="underline">Privacy Policy</span>, and{" "}
            <span className="underline">Cookie Policy</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold rounded-md py-3 hover:scale-105 transition-all duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="font-semibold text-sm capitalize text-gray-700">
            Already have an{" "}
            <a className="underline" href="/login">
              account
            </a>
            ?
          </p>
        </div>
      </section>
    </section>
  );
}
