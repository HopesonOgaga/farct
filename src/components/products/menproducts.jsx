import React from "react";

// Product sections data
const sections = [
  {
    title: "Featured Products",
    items: [
      {
        image: "/images/menitem/pexels-bemistermister-380782.jpg",
        itemName: "Annie Bag",
        itemInfo: "Eugene ribbed sleeveless top",
        itemPrice: "$420",
      },
      {
        image: "/images/menitem/pexels-david-bartus-43782-297933.jpg",
        itemName: "Annie Bag",
        itemInfo: "Eugene ribbed sleeveless top",
        itemPrice: "$420",
      },
      {
        image: "/images/menitem/pexels-fidel-2814832.jpg",
        itemName: "Annie Bag",
        itemInfo: "Eugene ribbed sleeveless top",
        itemPrice: "$420",
      },
      {
        image: "/images/menitem/pexels-solliefoto-298863.jpg",
        itemName: "Annie Bag",
        itemInfo: "Eugene ribbed sleeveless top",
        itemPrice: "$420",
      },
    ],
  },
  {
    title: "Best of sale: shop our editor's picks",
    items: [
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
    ],
  },
  {
    title: "Best Sellers",
    items: [
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
      {
        image: "/images/briefcase.jpg",
        itemName: "Annie Bag",
        itemInfo: "Eugene ribbed sleeveless top",
        itemPrice: "$420",
      },
    ],
  },
];

function MenProducts() {
  return (
    <section className="w-full px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div ><p className="text-lg font-base ">New in: handpicked daily from the world’s best brands and boutiques</p></div>
        {sections.map((section, sIndex) => (
          <div key={sIndex}>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.itemName}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenProducts;
