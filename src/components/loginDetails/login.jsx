import React from "react";

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-white px-4">
      <section className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg p-8 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">Welcome Back</h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 bg-white/10 border border-white/30 text-white px-4 py-2 rounded-md placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 bg-white/10 border border-white/30 text-white px-4 py-2 rounded-md placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm text-white/70">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              Remember me
            </label>
            <a href="#" className="underline hover:text-white">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold rounded-md py-3 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-white/60 text-center mt-6">
          Don’t have an account? <a href="/sign" className="underline hover:text-white">Register</a>
        </p>
      </section>
    </section>
  );
}
