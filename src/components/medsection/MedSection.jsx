import React from "react";
import { Link } from "react-router-dom";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import { BsArrowRight } from "react-icons/bs";

const MedSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap[30px] mtt-[30px] lg:mt-[55px] p-5">
      <div className="py-[30px] px-5 border border-solid border-gray-500 rounded-md">
        <div className="flex items-center justify-center">
          <img src={icon01} alt="" />
        </div>
        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Find A Doctor
          </h2>
          <p className="text-[16px] font-[400] leading-7 mt-4 text-textColor text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure odit
            necessitatibus facilis ratione vel, quod e.t consectetur adipisicing
            elit. Iure
          </p>
          <Link
            to={"/doctors"}
            className="w-[44px] h-44px] rounded-full border border-solid border-gray-500 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none p-2"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
      <div className="py-[30px] px-5 border border-solid border-gray-500 rounded-md">
        <div className="flex items-center justify-center">
          <img src={icon02} alt="" />
        </div>
        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Find a Location
          </h2>
          <p className="text-[16px] font-[400] leading-7 mt-4 text-textColor text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure odit
            necessitatibus facilis ratione vel, quod e.t consectetur adipisicing
            elit. Iure
          </p>
          <Link
            to={"/doctors"}
            className="w-[44px] h-44px] rounded-full border border-solid border-gray-500 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none  p-2"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
      <div className="py-[30px] px-5 border border-solid border-gray-500 rounded-md">
        <div className="flex items-center justify-center">
          <img src={icon03} alt="" />
        </div>
        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Book Appointment
          </h2>
          <p className="text-[16px] font-[400] leading-7 mt-4 text-textColor text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure odit
            necessitatibus facilis ratione vel, quod e.t consectetur adipisicing
            elit. Iure
          </p>
          <Link
            to={"/doctors"}
            className="w-[44px] h-44px] rounded-full border border-solid border-gray-500 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none  p-2"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedSection;
