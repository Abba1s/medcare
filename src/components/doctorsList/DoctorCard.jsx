import React from "react";
import { BsArrowRight } from "react-icons/bs";
const DoctorCard = ({
  name,
  specialty,
  photo,
  avgRating,
  hospital,
  totalRating,
  totalPatients,
}) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <img className="w-full" src={photo} alt="pic" />
        <h3 className="text-[22px] font-[600]">{name}</h3>
        <div className="flex justify-between">
          <h4 className="font-[600] p-2 bg-blue-200 rounded">{specialty}</h4>
          <p className=" font-[500] p-2 rounded">
            {avgRating} ({totalRating})
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <p className="text-[18px] leading-[30px] font-[400] text-textColor ">+{totalPatients} patients</p>
            <p className="text-[18px] leading-[30px] font-[400] text-textColor">{hospital}</p>
          </div>

          <span className="border border-gray-400 p-3 rounded-full">
            <BsArrowRight />
          </span>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
