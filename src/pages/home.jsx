import React from "react";
import Header from "../components/header";
import FooterBar from "../components/footer";
import Items1 from "../components/products/items1";
import InfoSection from "../components/info";
import PersonalInfo from "../components/personalinfo";

function Home() {
  return (
    <section className=" ">
      <Header />

      {/* Hero Section */}
      <section className="w-full h-screen bg-white">
        <div className="flex flex-col md:flex-row justify-evenly items-center h-full px-6">
          {/* Text */}
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

          {/* Image */}
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
        <Items1></Items1>
      </section>

      {/* bag section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto">
          {/* Text */}
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

          {/* Image */}
          <div className="w-full max-w-xl mt-8 md:mt-0">
            <img
              src="/images/multiplebags.webp"
              alt="Summer collection"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* bags section will be changed */}
      <section>
        <Items1></Items1>
        <Items1></Items1>
      </section>

      {/* Summer Collection Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto">
          {/* Text */}
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

          {/* Image */}
          <div className="w-full max-w-xl mt-8 md:mt-0">
            <img
              src="/images/brownlady.webp"
              alt="Summer collection"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* treding section // will be chnaged  */}
      <Items1></Items1>

      {/* elevate */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto">
          {/* Text */}
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

          {/* Image */}
          <div className="w-full max-w-xl mt-8 md:mt-0">
            <img
              src="/images/elevate.webp"
              alt="Summer collection"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* information section */}
      <section>
        <InfoSection></InfoSection>
      </section>
      <section>
        <PersonalInfo></PersonalInfo>
      </section>
      {/* Footer */}
      <FooterBar />
    </section>
  );
}

export default Home;
