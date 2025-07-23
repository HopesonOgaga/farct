import React from "react";
import { X } from "lucide-react";
import Header from "../header";
import FooterBar from "../footer";
import { Link } from "react-router";

export default function BagContent() {
  return (
    <section className="px-4 sm:px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <Header></Header>
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold">Shopping Bag</h2>
      </div>

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row gap-8 mb-6">
        {/* Cart Item */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border rounded-lg shadow-sm">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src=""
                alt="Product Image"
                className="w-24 h-24 bg-gray-100 rounded object-cover"
              />
              <div className="space-y-1">
                <p className="text-sm font-semibold">VEJA</p>
                <p className="text-sm text-gray-600">Campo Sneakers</p>
                <p className="text-xs text-gray-400">FARFETCH ID: 28456224</p>
              </div>
            </div>

            <div className="text-sm font-medium">$100</div>

            <div className="space-y-1 text-sm text-gray-600 text-left">
              <p>
                Size: 35 EU{" "}
                <span className="text-blue-600 cursor-pointer ml-1">
                  Change
                </span>
              </p>
              <p>
                Quantity: 1{" "}
                <span className="text-blue-600 cursor-pointer ml-1">
                  Change
                </span>
              </p>
            </div>

            <button className="text-red-500 hover:text-red-700">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 p-6 border rounded-lg shadow-sm bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>

          <div className="flex justify-between mb-2 text-sm">
            <span>Subtotal</span>
            <span>$120.00</span>
          </div>

          <div className="flex justify-between mb-2 text-sm">
            <span>Delivery</span>
            <span>$24.00</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold text-base mb-6">
            <span>Total</span>
            <span>$134.00</span>
          </div>

          {/* temp linking  */}
          <Link to={"/checkout"}>
            {" "}
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">
              Go to Checkout
            </button>
          </Link>
        </div>
      </section>
      <FooterBar></FooterBar>
    </section>
  );
}
