import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section className="w-full max-w-md bg-white border border-gray-200 shadow-md p-8 rounded-2xl text-gray-800">
        {/* X button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-black hover:opacity-80"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Welcome Back
        </h2>

        <form className="space-y-5">
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

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              Remember me
            </label>
            <a href="#" className="underline hover:text-black">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold rounded-md py-3 hover:scale-105 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <a href="/sign" className="underline hover:text-black">
            Register
          </a>
        </p>
      </section>
    </section>
  );
}
