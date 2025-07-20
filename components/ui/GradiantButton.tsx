import React from "react";

type GradiantButtonProps = {
  text: string;
  fontSize?: string;
};

const GradiantButton = ({ text, fontSize }: GradiantButtonProps) => {
  return (
    <button className="py-[2px] px-[3px] rounded-[50px] bg-gradient-to-b from-purple-600 to-blue-500 inline-block ">
      <div className="bg-white rounded-[50px] p-[2px]">
        <div className={` gradiantButton ${fontSize}`}>{text}</div>
      </div>
    </button>
  );
};

export default GradiantButton;
