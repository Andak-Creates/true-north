import React from "react";
import ContactForm from "./ui/ContactForm";
import DetailCard from "./ui/DetailCard";

const Contact = () => {
  return (
    <div className="flex flex-col ">
      <section
        id="contact"
        className="w-full md:w-[90%] md:mx-auto
     flex flex-col lg:flex-row items-end  gap-[80px] p-[40px]"
      >
        {/* Left */}
        <div className="w-full" data-aos="fade-up">
          <h1 className="text-[30px] md:text-[40px]">Get In Touch with Us</h1>
          <p className="text-[16px]">
            Ready to transform your business with innovative IT solutions?
            Contact us today for a free consultation and project qoute.
          </p>

          <div className="mt-[10px]">
            <ContactForm />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-[20px] mt-[25px] w-full">
          {/* contact cards */}
          {/* Call us */}
          <div
            className="p-[2px] rounded-lg border-2 border-[#E9EBF1] shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="relative flex bg-[#F7F8FA] px-[20px] py-[40px]
        rounded-lg overflow-hidden justify-start items-center gap-[30px]"
            >
              <div className="p-[5px] rounded-full bg-white border-2 border-[#E9EBF1]">
                <img
                  src="/assets/icons/phone.png"
                  alt=""
                  className="h-[40px]"
                />
              </div>

              <div>
                <h3 className="text-[18px] font-semibold">Call Us!</h3>
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-[12px] ">
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri 9am-6pm</p>
                </div>
              </div>

              <img
                src="/assets/icons/donut.png"
                alt=""
                className="absolute h-[100%] w-[200px] right-0 bg-cover top-0"
              />
            </div>
          </div>

          {/* Message us */}
          <div
            className="p-[2px] rounded-lg border-2 border-[#E9EBF1] shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="relative flex bg-[#F7F8FA] px-[20px] py-[40px]
        rounded-lg overflow-hidden justify-start gap-[30px] items-center"
            >
              <div className="p-[5px] rounded-full bg-white border-2 border-[#E9EBF1]">
                <img src="/assets/icons/mail.png" alt="" className="h-[40px]" />
              </div>

              <div>
                <h3 className="text-[20px] font-semibold">Message Us</h3>
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-[12px]">
                  <p>info@truenorthglobalsolution.com</p>
                  <p>We reply within 24hrs</p>
                </div>
              </div>

              <img
                src="/assets/icons/donut.png"
                alt=""
                className="absolute h-[100%] w-[200px] right-0 bg-cover top-0"
              />
            </div>
          </div>

          {/* Office */}
          <div
            className="p-[2px] rounded-lg border-2 border-[#E9EBF1] shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="relative flex bg-[#F7F8FA] px-[20px] py-[40px]
        rounded-lg overflow-hidden justify-start items-center gap-[30px]"
            >
              <div className="p-[5px] rounded-full bg-white border-2 border-[#E9EBF1]">
                <img
                  src="/assets/icons/location.png"
                  alt=""
                  className="h-[40px]"
                />
              </div>

              <div>
                <h3 className="text-[20px] font-semibold">Office</h3>
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-[12px]">
                  <p>
                    123 Global Plaza, International
                    <br className="md:hidden" />
                    District Business Hub, United States
                  </p>
                </div>
              </div>

              <img
                src="/assets/icons/donut.png"
                alt=""
                className="absolute h-[100%] w-[200px] right-0 bg-cover top-0"
              />
            </div>
          </div>

          {/* Business Hours */}
          <div
            className="p-[2px] rounded-lg border-2 border-[#E9EBF1] shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="relative flex bg-[#F7F8FA] px-[20px] py-[40px]
        rounded-lg overflow-hidden justify-start items-center gap-[30px]"
            >
              <div className="p-[5px] rounded-full bg-white border-2 border-[#E9EBF1]">
                <img
                  src="/assets/icons/timer.png"
                  alt=""
                  className="h-[40px]"
                />
              </div>

              <div>
                <h3 className="text-[20px] font-semibold">Business Hours</h3>
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-[12px]">
                  <p>Mon - Fri 10:00 AM - 3:00 PM</p>
                  <p>Weekend support available</p>
                </div>
              </div>

              <img
                src="/assets/icons/donut.png"
                alt=""
                className="absolute h-[100%] w-[200px] right-0 bg-cover top-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TrueNorth */}
      <div
        className="flex flex-col w-[90%] p-2 mx-auto
      my-[100px]"
      >
        <h1 className="text-[30px] md:text-[40px] text-center">
          Why Choose TrueNorth?
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5">
          <DetailCard
            iconStyle="w-[35px]"
            style="p-[10px]"
            detailIcon="/assets/icons/consult.png"
            descStyle="text-[14px] fadedText"
            desc="Free initial consultation"
          />

          <DetailCard
            iconStyle="w-[35px]"
            style="p-[10px]"
            detailIcon="/assets/icons/priceTag.png"
            descStyle="text-[14px] fadedText"
            desc="Transparent pricing"
          />

          <DetailCard
            iconStyle="w-[35px]"
            style="p-[10px]"
            detailIcon="/assets/icons/geomap.png"
            descStyle="text-[14px] fadedText"
            desc="Global expertise, local service"
          />

          <DetailCard
            iconStyle="w-[35px]"
            style="p-[10px]"
            detailIcon="/assets/icons/supportRate.png"
            descStyle="text-[14px] fadedText"
            desc="Ongoing support & maintenance"
          />

          <DetailCard
            iconStyle="w-[35px]"
            style="p-[10px]"
            detailIcon="/assets/icons/achievement.png"
            descStyle="text-[14px] fadedText"
            desc="Proven track record"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
