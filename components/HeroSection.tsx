import React from "react";
import GradiantButton from "./ui/GradiantButton";
import DetailCard from "./ui/DetailCard";

const HeroSection = () => {
  return (
    <main
      id="home"
      className="h-[680px] md:h-[750px] w-full relative overflow-hidden
    flex flex-col justify-end items-center "
    >
      {/* Background Image */}

      <img
        src="/background.png"
        alt=""
        className="absolute h-[100%] w-[18000%] z-[-2]"
      />

      {/* main Hero Content */}
      <div className="flex flex-col" data-aos="fade-up" data-aos-delay="100">
        <div className="text-center w-[80%] md:w-[720px] mx-auto">
          <h1 className="text-[28px]  md:text-[40px] lg:text-[40px] font-semibold">
            Comprehensive IT Solution
            <br className="hidden md:block" /> for{" "}
            <span>
              <GradiantButton
                text="Global Success"
                fontSize="text-[20px] md:text-[50px]"
              />
            </span>
          </h1>
        </div>

        <div className="mt-[20px] md:mt-[20px] mx-auto text-center w-[80%] md:w-[720px]">
          <p className="text-[16px] md:text-[18px]">
            We specialize in comprehensive IT services including software
            development, system design, platform development, applications
            development, and IT support solutions tailored to your business
            needs.
          </p>

          {/* view our work & Get started Buttons */}
          <div className="flex gap-[15px] justify-center items-center mt-[20px] md:mt-[25px]">
            <button
              className="border-[1px] text-[16px]
               border-[#E9EBF1] px-[15px] py-[10px] 
   rounded-[50px] shadow-md bg-white"
            >
              View Our Work
            </button>

            <button className="gradiantButton">Get started</button>
          </div>
        </div>
      </div>

      {/* Phone mock view */}
      <div
        className="absolute bottom-0 z-[-2] h-[220px] w-[250px]
      md:w-[300px] md:h-[250px]"
        data-aos="fade"
        data-aos-delay="200"
      >
        <img
          src="phoneMock.png"
          alt="phone mockup"
          className="absolute h-[100%] w-[100%]"
        />
      </div>

      {/* Detail Cards */}
      <div className="flex w-[85%] h-[200px] md:h-[280px] md:w-[70%] justify-between  mt-[25px] md:mt-[0]">
        {/* Left cards */}
        <div
          className="flex flex-col  justify-between"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <DetailCard
            detailIcon="/assets/icons/bracket.png"
            title="Software Developement"
            desc="Custom applications built to specification"
          />

          <DetailCard
            detailIcon="/assets/icons/database.png"
            title="System Design"
            desc="Scalable architecture solutions"
          />
        </div>

        {/* Right Cards */}
        <div
          className="flex flex-col  justify-between"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <DetailCard
            detailIcon="/assets/icons/settings.png"
            title="IT Support"
            desc="24/7 technical assistance"
          />

          <DetailCard
            detailIcon="/assets/icons/shield.png"
            title="Security Solutions"
            desc="Advanced cybersecurity Protection"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
