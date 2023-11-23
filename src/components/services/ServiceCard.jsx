import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const ServiceCard = ({ service, index }) => {
  const { name, desc, bgColor, textColor } = service;
  return (
    <div className="py-[30px] px-3 lg:px-5" key={index}>
      <h2 className="heading">{name}</h2>
      <p className="para">{desc}</p>

      <div className="flex items-center justify-between">
        <Link
          to={"/doctors"}
          className="w-[44px] h-44px] rounded-full border border-solid border-gray-500 mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none p-2"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>

        <span
          className="w-[44px] h-[44px] flex items-center justify-center font-[600] text-[18px] leading-[30px] rounded-l-[8px]"
          style={{ background: `${bgColor}`, color: `${textColor}` }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
