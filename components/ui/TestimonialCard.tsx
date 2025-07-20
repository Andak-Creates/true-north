import Link from "next/link";
import React from "react";

type TestimonialCardProps = {
  desc: string;
  username: string;
  userhandle: string;
  avatar: string;
  socialIcon: string;
};

const TestimonialCard = ({
  desc,
  username,
  avatar,
  userhandle,
  socialIcon,
}: TestimonialCardProps) => {
  return (
    <div
      className="h-fit w-auto p-[5px] 
     bg-white
     rounded-lg text-left shadow-md"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div
        className="flex flex-col gap-[30px] w-auto h-auto  p-[30px] border-[1px]
     border-[#E9EBF1] rounded-lg"
      >
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[16px] font-bold">Incredibly useful product</h3>
          <p className="text-[16px] fadedText">{desc}</p>
        </div>

        <div className="flex flex-row justify-between">
          {/* Avatar Name and handle */}
          <div className="flex flex-row gap-[10px]">
            <div className="rounded-[50px] w-auto bg-[#E8E4F7]">
              <img
                src={`${avatar}`}
                alt="avatar"
                className="w-[50px] rounded-full"
              />
            </div>

            {/* userName and handle */}
            <div className="text-[12px] flex flex-col justify-center">
              <p>{username}</p>
              <Link href={"#"} className="text-[#2563EB]">
                {userhandle}
              </Link>
            </div>
          </div>

          {/* Social media Icon */}
          <div className="rounded-[50px] w-fit p-1 h-fit bg-white border-2 border-[#E9EBF1]">
            <img
              src={`${socialIcon}`}
              alt="avatar"
              className="w-[30px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
