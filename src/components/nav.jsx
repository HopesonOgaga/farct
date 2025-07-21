import React from "react";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isOPen, setIsOPen] = useState(false);
  function toggle() {
    setIsOPen(!isOPen);
  }
  return (
    <nav className="bg-white md:py-4 md:mt-6 shadow-sm flex justify-between">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-4 hidden md:flex">
        {/* Navigation Links */}
        <ul className="flex gap-10 text-sm  capitalize">
          <li className="relative group cursor-pointer">
            <span className="hover:text-green-600">Sale</span>
            {/* Dropdown */}
            <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded hidden group-hover:block z-50 p-4 w-48">
              <ul className="space-y-2 text-xs text-gray-700">
                <li>
                  <a href="#" className="hover:underline">
                    Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Editor’s Choice
                  </a>
                </li>
              </ul>
              <div className="mt-3">
                <img
                  src="/images/sale-banner.jpg"
                  alt="Sale banner"
                  className="w-full rounded"
                />
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              New In
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Vacation
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Brands
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Clothing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Shoes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Bags
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Accessories
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Homeware
            </a>
          </li>
        </ul>

        {/* Search Input */}
        <div className="ml-10 flex-1 text-right">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-64 border-b border-gray-300 focus:border-green-500 px-3 py-1.5 text-sm focus:outline-none transition-all"
          />
        </div>
      </div>
      {/* mobile section */}
      <div className="flex items-center justify-between container mx-auto max-w-7xl md:hidden">
        <div >
          <button className="md:hidden p-2" onClick={toggle}>
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <div> <h1 className="text-3xl sm:text-5xl font-bold uppercase text-center">Fartech</h1></div>
        <div className="flex items-center gap-2">
          <button aria-label="Favorites">
            <img src="/images/heart.png" alt="Favorites" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </button>
           <button aria-label="Cart">
              <img src="/images/parcel.png" alt="Shopping cart" className="w-6 h-6 hover:opacity-80 transition-opacity" />
           </button>
        </div>
      </div>
    </nav>
  );
}
