import React from "react";

export default function SignIn() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-white px-4">
      <section className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg p-8 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">Sign In to Continue</h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 bg-white/10 border border-white/30 text-white px-4 py-2 rounded-md placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="John Doe"
              required
            />
          </div>

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

          <p className="text-xs text-white/60 leading-relaxed">
            By registering, you agree to our{" "}
            <span className="underline">Terms & Conditions</span>,{" "}
            <span className="underline">Privacy Policy</span>, and{" "}
            <span className="underline">Cookie Policy</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold rounded-md py-3 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </form>
      </section>
    </section>
  );
}
