import React, { useState } from "react";
import Header from "../components/header";
import FooterBar from "../components/footer";

function ProductDetails() {
  const [enabled, setEnabled] = useState(false);
  function toggle() {
    setEnabled(!enabled);
  }

  return (
    <section>
      <Header />
      <div>
        {/* section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-10 max-w-7xl mx-auto min-h-screen">
          {/* Scrollable Image Grid */}
          <div className="h-[75vh] md:h-screen pr-2 flex flex-col overflow-hidden w-full">
            <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
              <div className="grid grid-cols-2 gap-4 pb-10">
                <img src="/images/zimmerbags.webp" alt="Product view 1" className="w-full rounded-lg object-cover" />
                <img src="/images/zimmerbags2.webp" alt="Product view 2" className="w-full rounded-lg object-cover" />
                <img src="/images/zimmerbags3.webp" alt="Product view 3" className="w-full rounded-lg object-cover" />
                <img src="/images/zimmerbags4.webp" alt="Product view 4" className="w-full rounded-lg object-cover" />
                <img src="/images/zimmerbags5.webp" alt="Product view 5" className="col-span-2 w-full rounded-lg object-cover" />
              </div>
            </div>
          </div>

          {/* Sticky Product Info */}
          <div className="sticky top-10 h-fit space-y-6 max-w-full md:max-w-sm px-2 md:px-0">
            <div className="space-y-1">
              <p className="text-gray-400 text-sm capitalize">New Season</p>
              <h1 className="text-2xl font-light tracking-tight capitalize">Zimmermann</h1>
              <p className="text-sm text-gray-700 capitalize tracking-wide">Goldentime Tote Bag</p>
            </div>

            <div className="space-y-1">
              <p className="text-lg font-semibold capitalize">$581</p>
              <p className="text-sm text-gray-600 capitalize">One Size Available</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-56 px-6 py-3 bg-black text-white text-xs uppercase tracking-widest rounded-lg shadow-sm hover:bg-gray-900 transition">Add to Bag</button>
              <button className="w-full sm:w-56 px-6 py-3 border border-gray-400 text-xs uppercase tracking-widest rounded-lg shadow-sm hover:border-black transition">Wishlist</button>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>Estimated Delivery</p>
              <p className="text-black font-medium">Jul 17 - Jul 21</p>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
          <p className="uppercase font-semibold mb-6">the details</p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-36 w-full mb-6">
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 capitalize text-sm">New Season</p>
              <h1 className="text-2xl capitalize font-light tracking-[-0.05em]">Zimmermann</h1>
              <p className="capitalize text-sm tracking-wide text-gray-700">Goldentime Tote Bag</p>
              <ul className="flex flex-col gap-2 text-sm capitalize">
                <p className="uppercase font-medium tracking-widest">highlights</p>
                <li>beige</li>
                <li>two long top handles</li>
                <li>main compartment</li>
                <li>fringe detailing</li>
                <li>main compartment</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-400 capitalize text-sm">composition</p>
              <h1 className="text-xl capitalize font-light tracking-[-0.05em]">Outer: Raffia 100%, Calf Leather 100%</h1>
              <p className="capitalize text-sm tracking-wide text-gray-700">FARFETCH ID: 30255291</p>
            </div>
          </div>

          <div className="border-b-2 w-full"></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-36 w-full mt-8">
            <div className="flex flex-col gap-4">
              <p className="font-normal capitalize text-lg">size and fit</p>
              <p className="capitalize font-normal">Product measurement</p>
              <p className="text-sm">DEPTH 18 cm</p>
              <p className="text-sm">HEIGHT 23 cm</p>
              <p className="text-sm">WIDTH 35 cm</p>
            </div>

            <div>
              <button
                onClick={toggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                  enabled ? "bg-black" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                    enabled ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
          <section className="max-w-6xl mx-auto px-4 py-10">
            <p className="text-lg font-semibold mb-6">Delivery, Returns & Seller</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ul>
                <p className="text-base font-semibold capitalize mb-2">We've got your back</p>
                <li className="text-sm text-gray-700">
                  One delivery fee to most locations. Free returns within 30 days (excludes final sale, made-to-order items, and some hazardous products).
                </li>
              </ul>

              <ul>
                <p className="text-base font-semibold capitalize mb-2">Estimated delivery</p>
                <li className="text-sm text-gray-700">Standard: Jul 17 - Jul 21</li>
                <li className="text-sm text-gray-700">Express: Jul 16 - Jul 22</li>
              </ul>

              <ul>
                <p className="text-base font-semibold capitalize mb-2">Orders & Returns</p>
                <li className="text-sm text-gray-700">Orders & delivery duties & taxes</li>
                <li className="text-sm text-gray-700">Returns & refunds</li>
              </ul>
            </div>

            <div className="mt-10">
              <ul>
                <p className="text-base font-semibold capitalize mb-2">Import duties information</p>
                <li className="text-sm text-gray-700">
                  Duties included for major countries (EU, UK, US, etc.). The price you see is the price you pay.
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* Newsletter */}
        <section className="flex flex-col md:flex-row gap-10 items-start justify-between px-4 md:px-10 py-10 max-w-7xl mx-auto">
          <div className="max-w-md">
            <p className="text-xl capitalize">Never miss a thing</p>
            <p className="text-sm">
              Sign up for promotions, tailored new arrivals, stock updates and more – straight to your inbox
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <input
              type="email"
              className="placeholder:capitalize w-full border h-12 rounded-md px-4"
              placeholder="your email address"
            />
            <button className="w-full sm:w-32 px-6 py-3 bg-black text-white text-xs uppercase tracking-widest rounded-lg shadow-sm hover:bg-gray-900 transition">
              Add to Bag
            </button>
            <p className="text-xs text-gray-500">
              By signing up, you consent to receive marketing by email and/or SMS. Read our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </div>
      <FooterBar />
    </section>
  );
}

export default ProductDetails;
