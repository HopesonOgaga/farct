import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import FooterBar from "../components/footer";
import { useCart } from "../api/CartContext";

export default function ProductDetails() {
  const { addToCart } = useCart();

  const [enabled, setEnabled] = useState(false);
  const toggle = () => setEnabled(!enabled);

  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div className="text-center py-20">No product data found.</div>;
  }

  return (
    <section>
      <Header />

      {/* Section 1 - Image + Info got way we can but justofy between i need space */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-36  px-4 md:px-10 py-10 max-w-7xl mx-auto min-h-screen">
        {/* Image Grid */}
        <div className="h-[75vh] md:h-screen pr-2 flex flex-col overflow-hidden w-full">
          <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
            <div className="grid grid-cols-2 gap-4 pb-10">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Product view ${i + 1}`}
                  className={`w-full rounded-lg object-cover ${
                    i === product.images.length - 1 &&
                    product.images.length % 2 !== 0
                      ? "col-span-2"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="sticky top-10  space-y-6 max-w-full md:max-w-sm px-2 md:px-0">
          <div className="space-y-1">
            <p className="text-gray-400 text-sm capitalize">
              {product.season || "New Season"}
            </p>
            <h1 className="text-2xl font-light tracking-tight capitalize">
              {product.brand}
            </h1>
            <p className="text-sm text-gray-700 capitalize tracking-wide">
              {product.name}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-lg font-semibold capitalize">{product.price}</p>
            <p className="text-sm text-gray-600 capitalize">
              One Size Available
            </p>
          </div>

          <div className="flex flex-col  gap-4">
            <div>
              {" "}
              <p className="text-lg font-semibold capitalize">
                {product.itemPrice}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full sm:w-56 px-6 py-3 bg-black text-white text-xs uppercase tracking-widest rounded-lg shadow-sm hover:bg-gray-900 transition"
            >
              Add to Bag
            </button>

            <button className="w-full sm:w-56 px-6 py-3 border border-gray-400 text-xs uppercase tracking-widest rounded-lg shadow-sm hover:border-black transition">
              Wishlist
            </button>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p>Estimated Delivery</p>
            <p className="text-black font-medium">Jul 17 - Jul 21</p>
          </div>
        </div>
      </section>

      {/* Section 2 - Details */}
      <section className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <p className="uppercase font-semibold mb-6">the details</p>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-36 mb-6">
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 capitalize text-sm">New Season</p>
            <h1 className="text-2xl capitalize font-light tracking-[-0.05em]">
              {product.brand}
            </h1>
            <p className="capitalize text-sm tracking-wide text-gray-700">
              {product.name}
            </p>

            {product.details?.highlights && (
              <ul className="flex flex-col gap-2 text-sm capitalize">
                <p className="uppercase font-medium tracking-widest">
                  highlights
                </p>
                {product.details.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-gray-400 capitalize text-sm">composition</p>
            <h1 className="text-xl capitalize font-light tracking-[-0.05em]">
              {product.details?.composition || "Not specified"}
            </h1>
            <p className="capitalize text-sm tracking-wide text-gray-700">
              {product.id || "FARFETCH ID: N/A"}
            </p>
          </div>
        </div>

        <div className="border-b-2 w-full"></div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-36 w-full mt-8">
          <div className="flex flex-col gap-4">
            <p className="font-normal capitalize text-lg">size and fit</p>
            {product.details?.size && (
              <>
                <p className="text-sm">Depth: {product.details.size.depth}</p>
                <p className="text-sm">Height: {product.details.size.height}</p>
                <p className="text-sm">Width: {product.details.size.width}</p>
              </>
            )}
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

      {/* Section 3 - Delivery Info */}
      <section className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <p className="text-lg font-semibold mb-6">
            Delivery, Returns & Seller
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ul>
              <p className="text-base font-semibold capitalize mb-2">
                We've got your back
              </p>
              <li className="text-sm text-gray-700">
                One delivery fee to most locations. Free returns within 30 days.
              </li>
            </ul>

            <ul>
              <p className="text-base font-semibold capitalize mb-2">
                Estimated delivery
              </p>
              <li className="text-sm text-gray-700">
                Standard: Jul 17 - Jul 21
              </li>
              <li className="text-sm text-gray-700">
                Express: Jul 16 - Jul 22
              </li>
            </ul>

            <ul>
              <p className="text-base font-semibold capitalize mb-2">
                Orders & Returns
              </p>
              <li className="text-sm text-gray-700">
                Orders & delivery duties & taxes
              </li>
              <li className="text-sm text-gray-700">Returns & refunds</li>
            </ul>
          </div>

          <div className="mt-10">
            <ul>
              <p className="text-base font-semibold capitalize mb-2">
                Import duties information
              </p>
              <li className="text-sm text-gray-700">
                Duties included for major countries (EU, UK, US, etc.). The
                price you see is the price you pay.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="flex flex-col md:flex-row gap-10 items-start justify-between px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <div className="max-w-md">
          <p className="text-xl capitalize">Never miss a thing</p>
          <p className="text-sm">
            Sign up for promotions, tailored new arrivals, stock updates and
            more – straight to your inbox
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="email"
            className="placeholder:capitalize w-full border h-12 rounded-md px-4"
            placeholder="your email address"
          />
          <button className="w-full sm:w-32 px-6 py-3 bg-black text-white text-xs uppercase tracking-widest rounded-lg shadow-sm hover:bg-gray-900 transition">
            Subscribe
          </button>
          <p className="text-xs text-gray-500">
            By signing up, you consent to receive marketing by email and/or SMS.
            Read our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <FooterBar />
    </section>
  );
}
