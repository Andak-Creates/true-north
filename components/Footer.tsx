import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="my-[50px] py-[50px] px-[20px] flex flex-wrap justify-between gap-[30px] w-[90%] mx-auto">
        {/* company bio */}
        <div className="flex flex-col gap-[15px] w-full md:w-[35%]">
          <Link
            href="#home"
            className="flex flex-row justify-start
        items-center gap-[3px]"
          >
            <img src="/logo.png" alt="" className="w-[20px] h-[30px]" />
            <h1 className="font-bold text-[25px]">TrueNorth</h1>
          </Link>

          <p className="fadedText text-[12px]">
            We are a leading global IT services company specializing in
            innovative solutions that drive business growth worldwide. From
            software development to comprehensive IT support, we deliver
            excellence in every project across the globe.
          </p>
        </div>

        {/* services */}
        <div className="w-fit">
          <h3 className="text-[15px] text-[#979FB4] mb-[15px] font-semibold">
            Services
          </h3>

          <ul className="fadedText text-[14px] grid gap-1">
            <li>
              <Link href={"#"} className="linkHover">
                Software Development
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                System Design
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Applications Development
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Platform Development
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                IT Support Solutions
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Security Solutions
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Infrastructure Management
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Digital Transformations
              </Link>
            </li>
          </ul>
        </div>

        {/* company */}
        <div className="w-fit">
          <h3 className="text-[15px] text-[#979FB4] mb-[15px] font-semibold">
            Company
          </h3>
          <ul className="fadedText text-[14px] grid gap-1">
            <li>
              <Link href={"#"} className="linkHover">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Our Team
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Careers
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Blog
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="w-full md:w-[250px]">
          <h3 className="text-[15px] text-[#979FB4] mb-[15px] font-semibold">
            Contacts
          </h3>
          <ul className="fadedText text-[14px] grid gap-1">
            <li>
              <Link href={"#"} className="linkHover flex items-center">
                <img
                  src="/assets/icons/phone.png"
                  alt="phone"
                  className="w-[25px]"
                />{" "}
                +1 (555) 123-4567
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover flex items-center">
                <img
                  src="/assets/icons/mail.png"
                  alt="mail"
                  className="w-[25px]"
                />{" "}
                info@truenorthglobalsolutions.com
              </Link>
            </li>
            <li>
              <Link href={"#"} className="linkHover flex items-center">
                <img
                  src="/assets/icons/location.png"
                  alt="location"
                  className="w-[25px]"
                />{" "}
                123 Global Plaza, International District, Business Hub
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* footer Icons  */}
      <div
        className="py-[50px] px-[20px] flex justify-between items-center gap-[30px] w-[90%] border-t-[2px]
     border-[#E9EBF1] mx-auto"
      >
        {/* Copy right */}
        <div className="flex flex-col md:flex-row md:gap-[10px] text-[12px]">
          <p className="text-[#8f95a5]">Copyright @2025</p>
          <p>TrueNorth Global Solutions</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {/* Linked in */}
          <div className="rounded-[50px] w-fit p-1 h-fit bg-white border-2 border-[#E9EBF1]">
            <img
              src="/assets/socialLogos/linkedIn.png"
              className="w-[20px] rounded-full"
              alt=""
            />
          </div>

          {/* X */}
          <div className="rounded-[50px] w-fit p-1 h-fit bg-white border-2 border-[#E9EBF1]">
            <img
              src="/assets/socialLogos/x.png"
              className="w-[20px] rounded-full"
              alt=""
            />
          </div>

          {/* instagram */}
          <div className="rounded-[50px] w-fit p-1 h-fit bg-white border-2 border-[#E9EBF1]">
            <img
              src="/assets/socialLogos/plainInstagram.png"
              className="w-[20px] rounded-full"
              alt=""
            />
          </div>

          {/* Facebook */}
          <div className="rounded-[50px] w-fit p-1 h-fit bg-white border-2 border-[#E9EBF1]">
            <img
              src="/assets/socialLogos/plainFacebook.png"
              className="w-[20px] rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
