import React from "react";
import NavBar from "./nav";
import { Link } from "react-router-dom";
import { useCart } from "../api/CartContext";

export default function Header() {
  // const [profile, setProfileIcon] = useState(false);
  const { cart } = useCart();
  return (
    <header className="p-4">
      <div className="flex items-center justify-between container mx-auto max-w-7xl hidden md:flex">
        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-base capitalize tracking-wide">
            <li>
              <a
                href="/women"
                className="hover:text-green-600 transition-colors"
              >
                Womens Wear
              </a>
            </li>
            <li>
              <a
                href="/menhome"
                className="hover:text-green-600 transition-colors"
              >
                Mens Wear
              </a>
            </li>
            <li>furnitture </li>
            <li>electronics</li>
          </ul>
        </nav>

        {/* Logo */}
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase text-center">
            Fartech
          </h1>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <span
            className="w-6 h-6 rounded-full bg-green-500"
            aria-hidden="true"
          ></span>

          <Link to={"/sign"} className="hover:opacity-80 transition-opacity">
            <button aria-label="User Profile">
              <img
                src="/images/user.png"
                alt="User profile"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </button>
          </Link>

          <button aria-label="Favorites">
            <img
              src="/images/heart.png"
              alt="Favorites"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </button>

          <Link to={"/check"} className="relative">
            <button aria-label="Cart">
              <img
                src="/images/parcel.png"
                alt="Shopping cart"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
      <NavBar></NavBar>
    </header>
  );
}
