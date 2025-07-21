import React from "react";
import Header from "../../components/header";
import FooterBar from "../../components/footer";
import InfoSection from "../../components/info";
import MenProducts from "../../components/products/menproducts";
import PersonalInfo from "../../components/personalinfo";

export default function MenHome() {
  return (
    <section className="">
      {/* Header */}
      <Header />

      <section className="w-full h-screen bg-white ">
        <div className="flex flex-col md:flex-row justify-evenly items-center h-full px-6">
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-center gap-8 text-center md:text-center max-w-md">
            <p className="capitalize text-4xl font-medium w-full">
              what's your t-shirt style
            </p>
            <p className="text-xl capitalize text-gray-700">
              Graphic, striped, pastel… find your perfect tee in our summer edit
            </p>

            <button className="border-2 border-black rounded-md shadow-sm capitalize px-6 py-2 font-medium hover:bg-black hover:text-white transition ">
              shop now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-xl md:max-w-lg mt-8 md:mt-16">
            <img
              src="/images/menzim1.jpeg"
              alt="Men's T-shirt Fashion"
              className="w-full h-2/3 rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* mid section  */}

      <section>
        <MenProducts></MenProducts>
      </section>
      <section>
        <InfoSection></InfoSection>
      </section>
      <section>
        <PersonalInfo></PersonalInfo>
      </section>
      <FooterBar></FooterBar>
    </section>
  );
}
