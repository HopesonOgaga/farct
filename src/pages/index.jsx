import React from "react";
import Header from "../components/header";
import FooterBar from "../components/footer";
import InfoSection from "../components/info";
import PersonalInfo from "../components/personalinfo";

function Index() {
  return (
    <section className="min-h-screen">
      <Header />
      <section className="px-4 py-10 max-w-7xl mx-auto space-y-8">
        <div className="text-center mb-10">
          <p className="text-3xl md:text-4xl font-semibold capitalize text-gray-800">
            choose your department
          </p>
        </div>

        <section className="flex flex-wrap justify-center gap-6">
          <div
            className="border border-gray-300 border-2 rounded-md text-center flex items-center justify-center w-full sm:w-[45%] lg:w-[30%] h-[200px] lg:h-[35vh] hover:shadow-md hover:bg-blue-100 transition duration-300"
            style={{
              backgroundImage: "url('/images/welcome/welcome-page-woman.jpeg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <p className="text-2xl  font-bold text-white uppercase tracking-wider ">
              Womenwear
            </p>
          </div>

          <div
            className="border border-gray-300 border-2 rounded-md text-center flex items-center justify-center w-full sm:w-[45%] lg:w-[30%] h-[200px] lg:h-[35vh] hover:shadow-md hover:bg-blue-100 transition duration-300"
            style={{
              backgroundImage: "url(/images/welcome/welcome-page-man.jpeg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <p className="text-2xl  font-bold text-white uppercase tracking-wider ">
              Men
            </p>
          </div>

          <div
            className="border border-gray-300 border-2 rounded-md text-center flex items-center justify-center w-full sm:w-[45%] lg:w-[30%] h-[200px] lg:h-[35vh] hover:shadow-md hover:bg-blue-100 transition duration-300"
            style={{
              backgroundImage: "url('/images/welcome/welcome-page-kid.jpeg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <p className="text-2xl  font-bold text-white uppercase tracking-wider ">
              Kidswear
            </p>
          </div>
        </section>

        <section>
          <InfoSection></InfoSection>
        </section>
        <section>
          <PersonalInfo></PersonalInfo>
        </section>
      </section>
      <FooterBar></FooterBar>
    </section>
  );
}

export default Index;
