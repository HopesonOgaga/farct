import React from "react";

export default function PersonalInfo() {
  return (
    <section className="w-full px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold capitalize">Never miss a thing</h2>
          <p className="text-gray-700">
            Sign up for promotions, tailored new arrivals, stock updates, and
            more – straight to your inbox.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <p className="text-lg font-semibold">Get updates by</p>
            <p className="text-gray-600">Email</p>
          </div>

          <form className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white w-full sm:w-32 font-medium rounded-md px-6 py-3 hover:bg-gray-900 transition"
            >
              Sign up
            </button>
          </form>

          <div>
            <p className="text-sm text-gray-500">
              By signing up, you consent to receiving marketing by email
              and/or SMS and acknowledge you have read our Privacy Policy.
              Unsubscribe anytime at the bottom of our emails or by replying
              STOP to any of our SMS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
