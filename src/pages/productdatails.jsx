import React from "react";
import Header from "../components/header";

function ProductDetails() {
  return (
    <section>
      <Header></Header>
      <div>
        {/* section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-10 max-w-7xl mx-auto h-screen">
          {/* Scrollable Image Grid with hidden scrollbar */}
          <div className="h-screen pr-2 flex flex-col overflow-hidden w-full">
            <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
              <div className="grid grid-cols-2 gap-4 pb-10">
                <img
                  src="/images/zimmerbags.webp"
                  alt="Product view 1"
                  className="w-full rounded-lg object-cover"
                />
                <img
                  src="/images/zimmerbags2.webp"
                  alt="Product view 2"
                  className="w-full rounded-lg object-cover"
                />
                <img
                  src="/images/zimmerbags3.webp"
                  alt="Product view 3"
                  className="w-full rounded-lg object-cover"
                />
                <img
                  src="/images/zimmerbags4.webp"
                  alt="Product view 4"
                  className="w-full rounded-lg object-cover"
                />
                <img
                  src="/images/zimmerbags5.webp"
                  alt="Product view 5"
                  className="col-span-2 w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sticky Product Info */}
          <div className="sticky top-10 h-fit space-y-6">
            {/* Labels */}
            <div className="space-y-1">
              <p className="text-gray-400 capitalize text-sm">New Season</p>
              <h1 className="text-2xl capitalize font-light tracking-[-0.05em]">
                Zimmermann
              </h1>
              <p className="capitalize text-sm tracking-wide text-gray-700">
                Goldentime Tote Bag
              </p>
            </div>

            {/* Price & Size */}
            <div className="space-y-1">
              <p className="font-semibold text-lg capitalize">$581</p>
              <p className="text-sm capitalize text-gray-600">
                One Size Available
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-black text-white uppercase text-xs tracking-widest rounded-lg shadow-sm w-full sm:w-56">
                Add to Bag
              </button>
              <button className="px-6 py-3 border border-gray-400 text-xs uppercase tracking-widest rounded-lg shadow-sm w-full sm:w-56">
                Wishlist
              </button>
            </div>

            {/* Delivery Info */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>Estimated Delivery</p>
              <p className="font-medium text-black">Jul 17 - Jul 21</p>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section></section>
      </div>
    </section>
  );
}

export default ProductDetails;
