import React from "react";
import { Link } from "react-router-dom";
import { CircleHelp } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import { ShoppingBag } from 'lucide-react';

const infoS = [
  {
    image: <ShoppingBag className="w-8 h-8" />,
    title: "How to Shop",
    info: "Your guide to shopping and placing orders",
    linkUrl: "#",
    isIcon: true,
  },
  {
    image: <CircleHelp className="w-8 h-8" />,
    title: "FAQs",
    info: "Your questions are answered",
    linkUrl: "#",
    isIcon: true,
  },
  {
    image: <MessageSquareText className="w-8 h-8" />,
    title: "Need Help?",
    info: "Contact our global customer care service",
    linkUrl: "#",
    isIcon: true,
  },
];

function InfoSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {infoS.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="mb-4">
              {info.isIcon ? (
                info.image
              ) : (
                <img
                  src={info.image}
                  alt={info.title}
                  className="w-8 h-8 object-contain"
                />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{info.info}</p>
            <Link to={info.linkUrl} className="text-sm hover:text-green-800">
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoSection;
