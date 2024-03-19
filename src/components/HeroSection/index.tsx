import { IMAGES } from "@/assets/images";
import React from "react";

interface HeroSectionProps {
  bgSrc: string;
  children?: React.ReactNode;
  end?: boolean;
  login?: boolean;
}

export const HeroSection = ({ bgSrc, children, end, login}: HeroSectionProps) => {

  return (
    <div>
      <div className={` ${login ? 'h-[100vh]' : 'height-full' } w-full absolute`} >
        <img
          className={`${login ? "h-[100vh]" : 'h-full'} w-full object-fill relative z-10`}
          src={IMAGES.Blur}
          alt=""
        />
      </div>
      <div>
        <div className={`absolute z-20 flex ${end ?'items-end' : 'items-start' } min-h-[90vh] w-full`}>
          {children}
        </div>
        <div className=" h-[100vh]">
          <img className={`${login ? "h-[100vh]" : 'h-full'} w-full object-fill`} src={bgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};
