import React from "react";
import { FaCheck } from "react-icons/fa";
import DetailCard from "./ui/DetailCard";

const About = () => {
  return (
    <section
      id="about"
      className="w-[85%] md:w-[85%] mx-auto my-[100px]
    flex flex-col md:flex-row items-center gap-4"
    >
      <div
        className="w-full md:w-[50%]"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h1 className="text-[40px]">About Us</h1>
        <p className="text-[16px] fadedText">
          We are a global information technology services company specializing
          in innovative solutions that drive business growth worldwide. Our
          expertise spans across software development, system design, platform
          development, applications development, and comprehensive IT support
          services.
        </p>

        <div className="mt-[30px] flex flex-col gap-2 text-[15px]">
          <p className="flex justify-start items-center gap-2 ">
            <span className="circleGradient">
              <FaCheck />{" "}
            </span>{" "}
            2 decades of aggregated experience
          </p>

          <p className="flex justify-start items-center gap-2 ">
            <span className="circleGradient">
              <FaCheck />{" "}
            </span>{" "}
            Cutting-edge technology solutions
          </p>

          <p className="flex justify-start items-center gap-2 ">
            <span className="circleGradient">
              <FaCheck />{" "}
            </span>{" "}
            Agile development methodology
          </p>

          <p className="flex justify-start items-center gap-2 ">
            <span className="circleGradient">
              <FaCheck />{" "}
            </span>{" "}
            Comprehensive project management
          </p>

          <p className="flex justify-start items-center gap-2 ">
            <span className="circleGradient">
              <FaCheck />{" "}
            </span>{" "}
            24/7 technical support
          </p>

          <p className="flex justify-start items-center gap-2 ">
            <span className="circleGradient">
              <FaCheck />{" "}
            </span>{" "}
            Scalable and secure solutions
          </p>
        </div>
      </div>

      {/* right */}
      <div className="flex w-full md:w-[50%] h-fit  mx-auto relative">
        {/* background */}
        <div
          className="absolute w-[90%] h-[90%] top-1/2 rounded-full 
        left-1/2 -translate-x-1/2 
        -translate-y-1/2  bg-[#F7F8FA] z-[-1]"
        ></div>

        <div className="grid grid-cols-2 gap-4 w-[100%] mx-auto">
          <DetailCard
            style="p-[20px] w-auto"
            iconStyle="w-[35px]"
            fontStyle="text-[30px] font-bold"
            detailIcon="/assets/icons/clients.png"
            title="3+"
            descStyle="text-[15px]"
            desc="Clients Served"
          />

          <DetailCard
            style="p-[10px] "
            iconStyle="w-[35px]"
            fontStyle="text-[30px] font-bold"
            detailIcon="/assets/icons/achievement.png"
            title="4+"
            descStyle="text-[15px]"
            desc="Projects Completed"
          />

          <DetailCard
            style="p-[20px]"
            iconStyle="w-[35px]"
            fontStyle="text-[30px] font-bold"
            detailIcon="/assets/icons/success.png"
            title="99%"
            descStyle="text-[15px]"
            desc="Success Rate"
          />

          <DetailCard
            style="p-[20px] w-"
            iconStyle="w-[35px]"
            fontStyle="text-[30px] font-bold"
            detailIcon="/assets/icons/supportRate.png"
            title="24/7"
            descStyle="text-[15px]"
            desc="Clients Served"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
