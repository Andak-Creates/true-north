import React from "react";
import DetailCard from "./ui/DetailCard";

const Services = () => {
  return (
    <section
      id="services"
      className="text-center my-[60px] px-[40px]"
      data-aos="fade-up"
    >
      <h1 className="text-[30px] md:text-[40px]">Our Global IT Services</h1>
      <p className="w-[95%] md:w-[75%] text-center text-[16px] mx-auto mt-[20px] text-[#363D4F]">
        We provide comprehensive information technology services to help
        businesses thrive in the digital age with cutting-edge solutions and
        expert support.
      </p>

      {/* Card Holder */}
      <div
        className="grid grid-cols-1 w-[80%s]  md:w-[90%] mx-auto mt-[40px]
      md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <DetailCard
          style="w-full p-[20px] md:w-fit"
          iconStyle="w-[80px]"
          detailIcon="/assets/icons/software.png"
          title="Software Development"
          descStyle="text-[16px]"
          desc="Custom software solutions tailored to your business requirements with modern technologies and best practices."
        />

        <DetailCard
          style="w-full p-[20px] md:w-fit"
          iconStyle="w-[80px]"
          detailIcon="/assets/icons/structure.png"
          title="System Design"
          descStyle="text-[16px]"
          desc="Comprehensive system architecture
           and database design for scalable and efficient 
           operations."
        />

        <DetailCard
          style="w-full p-[20px] md:w-fit"
          iconStyle="w-[80px]"
          detailIcon="/assets/icons/appDev.png"
          title="Applications Development"
          descStyle="text-[16px]"
          desc="Mobile and web applications that deliver
           exceptional user experiences across all 
           platforms and devices."
        />

        <DetailCard
          style="w-full p-[20px] md:w-fit"
          iconStyle="w-[80px]"
          detailIcon="/assets/icons/cloud.png"
          title="Platform Development"
          descStyle="text-[16px]"
          desc="Enterprise-grade platforms
            and cloud solutions to
            streamline your business 
            processes globally."
        />

        <DetailCard
          style="w-full p-[20px] md:w-fit"
          iconStyle="w-[80px]"
          detailIcon="/assets/icons/IT.png"
          title="IT Support Solutions"
          descStyle="text-[16px]"
          desc="Comprehensive technical support and 
          maintenance services to keep your 
          systems running smoothly 24/7."
        />

        <DetailCard
          style="w-full p-[20px] md:w-fit"
          iconStyle="w-[80px]"
          detailIcon="/assets/icons/security.png"
          title="Security Solutions"
          descStyle="text-[16px]"
          desc="Advanced cybersecurity measures
           to protect your digital assets 
          and sensitive data worldwide."
        />

        <DetailCard
          style="w-full p-[20px] md:w-fit"
          iconStyle="w-[80px]"
          detailIcon="/assets/icons/motherBoard.png"
          title="Infrastructure Management"
          descStyle="text-[16px]"
          desc="Complete IT infrastructure
                setup, monitoring, and optimization 
                for maximum performance."
        />

        <DetailCard
          style="w-full p-[20px] md:w-fit"
          iconStyle="w-[80px]"
          detailIcon="/assets/icons/geomap.png"
          title="Digital Transformation"
          descStyle="text-[16px]"
          desc="Strategic digital transformation consulting to modernize
                your business operations
                globally."
        />
      </div>
    </section>
  );
};

export default Services;
