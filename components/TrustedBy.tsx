import Link from "next/link";
import React from "react";

const TrustedBy = () => {
  return (
    <section
      data-aos="fade-up"
      className="h-auto my-[40px] py-[30px] w-full px-[40px] flex flex-col
    text-center gap-[20px]"
    >
      <h2 className="text-[20px] md:text-[25px] mt-[60px] mb-[20px] ">
        The world&apos;s best companies trust TrueNorth.
      </h2>

      {/* Partners Logos? */}
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-center ">
          {[
            "/assets/partners/amplitude.png",
            "/assets/partners/invoice.png",
            "/assets/partners/triber.png",
            "/assets/partners/xpeng.png",
            "/assets/partners/verox.png",
            "/assets/partners/republic.png",
          ].map((src, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              key={index}
              className={`flex items-center justify-center w-full md:w-[200px] h-[60px] ${
                index !== 0
                  ? "border-t md:border-l md:border-t-0  border-gray-300 "
                  : ""
              }`}
            >
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="w-[100px] h-[50px] object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>

      <p
        className="w-[95%] md:w-[75%] text-[16px]  mx-auto mt-[20px] text-[#363D4F]"
        data-aos="fade-up"
      >
        Helps drive business scale by developing needed enterprise IT solutions
        that are customized to solving business problems and needs
      </p>

      <Link
        data-aos="fade-up"
        href={"#"}
        className="border-[1px] w-fit text-[12px] md:text-[16px]
               border-[#E9EBF1] px-[30px] py-[10px] mx-auto mb-[30px]  
   rounded-[50px] shadow-md bg-white font-bold"
      >
        Start your TrueNorth Journey
      </Link>
    </section>
  );
};

export default TrustedBy;
