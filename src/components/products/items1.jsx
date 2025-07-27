import React from "react";
import { useCart } from "../../api/CartContext";

import { useNavigate } from "react-router-dom";



function Items1({ items }) {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();


  const handleClick = (item) => {
    navigate("/productdetails", { state: { product: item } });
  };

  return (
    <section className="p-6 min-h-max">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleClick(item)}
          >
            <img
              src={item.images?.[0]}
              alt={item.itemName}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.itemName}
              </h3>
              <p className="text-sm text-gray-500">{item.itemInfo}</p>
              <p className="mt-2 text-black font-bold">{item.itemPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Items1