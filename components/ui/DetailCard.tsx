import React from "react";

type DetailCardProps = {
  style?: string;
  iconStyle?: string;
  fontStyle?: string;
  detailIcon: string;
  title?: string;
  desc: string;
  descStyle?: string;
};

const DetailCard = ({
  style,
  iconStyle,
  descStyle,
  detailIcon,
  title,
  fontStyle,
  desc,
}: DetailCardProps) => {
  return (
    <div
      className=" w-full p-[5px] 
     bg-white
     rounded-lg text-left h-fit"
      data-aos="fade-up"
    >
      <div
        className={
          style
            ? // If style prop is provided, use it for custom styling
              `flex flex-col ${style} border-double border-[4px]
     border-[#E9EBF1] rounded-lg p-[5px]`
            : // Default style if no style prop is provided
              `flex flex-col gap-[4px] w-[130px] md:w-[150px] p-[5px] border-[1px]
     border-[#E9EBF1] rounded-lg`
        }
      >
        <img
          src={detailIcon}
          alt="icon"
          className={iconStyle ? `${iconStyle}` : "w-[16px] md:w-[30px]"}
        />
        <h3 className={fontStyle ? `${fontStyle}` : "font-bold text-[12px]  "}>
          {title}
        </h3>
        <p
          className={descStyle ? `${descStyle}` : "text-[12px] text-[#363D4F]"}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
