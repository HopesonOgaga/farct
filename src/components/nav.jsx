import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white md:py-4 md:mt-6 shadow-sm">
      {/* Desktop Nav */}
      <div className="container mx-auto max-w-7xl hidden md:flex justify-between items-center px-4">
        {/* Links */}
        <ul className="flex gap-10 text-sm capitalize">
          <li className="relative group cursor-pointer">
            <span className="hover:text-green-600">Sale</span>
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

        {/* Search */}
        <div className="ml-10 flex-1 text-right">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-64 border-b border-gray-300 focus:border-green-500 px-3 py-1.5 text-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex items-center justify-between container mx-auto max-w-7xl px-4 py-3 md:hidden">
        <button onClick={toggle}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>

        <h1 className="text-2xl font-bold uppercase">Fartech</h1>

        <div className="flex items-center gap-3">
          <button>
            <img
              src="/images/heart.png"
              alt="Favorites"
              className="w-6 h-6 hover:opacity-80"
            />
          </button>
         <Link to={"/check"}>
          <button>
            <img
              src="/images/parcel.png"
              alt="Cart"
              className="w-6 h-6 hover:opacity-80"
            />
          </button>
         </Link>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-5/6 max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggle}>
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Main Nav Categories */}
        <div className="flex justify-around p-4 font-semibold capitalize border-b">
          <Link to="/">
            <nav>
              <a href="#" className="active:underline">
                Womenwear
              </a>
            </nav>
          </Link>
          <Link to="/menhome">
            <nav>
              <a href="#" className="active:underline">
                Menswear
              </a>
            </nav>
          </Link>
          <nav>
            <a href="#" className="active:underline">
              Electronics
            </a>
          </nav>
        </div>

        {/* Full Nav List */}
        <ul className="p-4 space-y-4 text-sm capitalize">
          <li>
            <a href="#" className="block hover:text-green-600">
              Sale
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-green-600">
              New In
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-green-600">
              Vacation
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-green-600">
              Brands
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-green-600">
              Clothing
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-green-600">
              Shoes
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-green-600">
              Bags
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-green-600">
              Accessories
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-green-600">
              Homeware
            </a>
          </li>
        </ul>
        <div>
          {/* style sing in nd login butons here tired  note this is mobile view */}
          <div className="p-4 border-t mt-4">
            <div className="flex flex-col gap-3">
              <Link
                to="/sign"
                className="w-full text-center bg-black text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="w-full text-center border border-black py-2 rounded-md font-semibold text-black hover:bg-gray-100 transition"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={toggle}
        ></div>
      )}
    </nav>
  );
}
