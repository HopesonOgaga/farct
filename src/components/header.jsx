import React from "react";
import NavBar from "./nav";

export default function Header() {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between container mx-auto max-w-7xl">
        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-base capitalize tracking-wide">
            <li>
              <a href="/womens" className="hover:text-green-600 transition-colors">Womens Wear</a>
            </li>
            <li>
              <a href="/mens" className="hover:text-green-600 transition-colors">Mens Wear</a>
            </li>
            <li>
              <a href="/children" className="hover:text-green-600 transition-colors">Children Wear</a>
            </li>
          </ul>
        </nav>

        {/* Logo */}
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase text-center">Fartech</h1>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <span className="w-6 h-6 rounded-full bg-green-500" aria-hidden="true"></span>
          
          <button aria-label="User Profile">
            <img src="/images/user.png" alt="User profile" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </button>
          
          <button aria-label="Favorites">
            <img src="/images/heart.png" alt="Favorites" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </button>
          
          <button aria-label="Cart">
            <img src="/images/parcel.png" alt="Shopping cart" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </button>
        </div>
      </div>
      <NavBar></NavBar>
    </header>
  );
}
