import React from "react";

const items = [
  {
    image: "/images/whitebag.jpg",
    itemName: "Annie Bag",
    itemInfo: "Eugene ribbed sleeveless top",
    itemPrice: "$420",
  },
  {
    image: "/images/brownlady.webp",
    itemName: "Annie Bag",
    itemInfo: "Eugene ribbed sleeveless top",
    itemPrice: "$420",
  },
  {
    image: "/images/lady.jpg",
    itemName: "Annie Bag",
    itemInfo: "Eugene ribbed sleeveless top",
    itemPrice: "$420",
  },
  {
    image: "/images/briefcase.jpg",
    itemName: "Annie Bag",
    itemInfo: "Eugene ribbed sleeveless top",
    itemPrice: "$420",
  },
];

function Items1() {
  return (
    <section className="p-6  min-h-max">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt="product"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.itemName}</h3>
              <p className="text-sm text-gray-500">{item.itemInfo}</p>
              <p className="mt-2 text-black font-bold">{item.itemPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Items1;
