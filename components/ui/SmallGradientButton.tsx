import React from "react";

type SmallGradientButtonProps = {
  text: string;
  fontSize: number;
};

const SmallGradientButton = ({ text, fontSize }: SmallGradientButtonProps) => {
  return (
    <button>
      <div style={{ fontSize: fontSize }} className="gradiantButton">
        {text}
      </div>
    </button>
  );
};

export default SmallGradientButton;
