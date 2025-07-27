import React from "react";
import Header from "../components/header";
import FooterBar from "../components/footer";
import Items1 from "../components/products/items1";
import InfoSection from "../components/info";
import PersonalInfo from "../components/personalinfo";
import { itemsGroup } from "../components/productlist";

function Home() {
  return (
    <section className=" ">
      <Header />

      {/* Hero Section */}
      <section className="px-6 md:px-10 max-w-[1440px] mx-auto space-y-20">
        <div className="flex flex-col md:flex-row justify-evenly items-center h-full px-6">
          <div className="flex flex-col items-center md:items-center gap-6 text-center md:text-left max-w-md ">
            <p className="capitalize text-2xl font-medium">beach bohemian</p>
            <p className="text-xl capitalize text-gray-700 md:text-center">
              embrace your free spirited side in paisley spirit, fringing and
              natural fabrics
            </p>
            <button className="border-2 border-black rounded-md shadow-sm capitalize px-6 py-2 font-medium hover:bg-black hover:text-white transition">
              shop now
            </button>
          </div>
          <div className="w-full max-w-xl mt-8 md:mt-0">
            <img
              src="/images/homepagelady.jpeg"
              alt="Beach fashion"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* New In Section */}
      <section className="w-full py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6 text-center md:text-left">
          <p className="text-xl font-medium text-gray-800">
            New in: handpicked daily from the world’s best brands and boutiques
          </p>
          <button className="border-2 border-black rounded-md shadow-sm capitalize px-6 py-2 font-medium hover:bg-black hover:text-white transition">
            shop now
          </button>
        </div>
      </section>
      {/* section 1  */}
      <section>
        <Items1 items={itemsGroup[0]} />
      </section>

      {/* bag section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-center gap-4 text-center md:text-left max-w-md">
            <p className="capitalize text-2xl font-medium">
              the summer collection
            </p>
            <a
              href="#"
              target="_blank"
              className="underline text-sm font-medium text-green-600 hover:text-green-800 transition "
            >
              shop eres
            </a>
          </div>
          <div className="w-full max-w-xl mt-8 md:mt-0">
            <img
              src="/images/multiplebags.webp"
              alt="Summer collection"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Grouped Items */}
      <section>
        {itemsGroup.map((group, index) => (
          <Items1 key={index} items={group} />
        ))}
      </section>

      {/* Summer Collection Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-center gap-4 text-center md:text-left max-w-md">
            <p className="capitalize text-2xl font-medium">
              the summer collection
            </p>
            <a
              href="#"
              target="_blank"
              className="underline text-sm font-medium text-green-600 hover:text-green-800 transition "
            >
              shop eres
            </a>
          </div>
          <div className="w-full max-w-xl mt-8 md:mt-0">
            <img
              src="/images/brownlady.webp"
              alt="Summer collection"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <Items1 items={itemsGroup[1]} />

      {/* Elevate */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-center gap-4 text-center md:text-left max-w-md">
            <p className="capitalize text-2xl font-medium">
              the summer collection
            </p>
            <a
              href="#"
              target="_blank"
              className="underline text-sm font-medium text-green-600 hover:text-green-800 transition "
            >
              shop eres
            </a>
          </div>
          <div className="w-full max-w-xl mt-8 md:mt-0">
            <img
              src="/images/elevate.webp"
              alt="Summer collection"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <InfoSection />
      </section>
      <section>
        <PersonalInfo />
      </section>
      <FooterBar />
    </section>
  );
}

export default Home;
