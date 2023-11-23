import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  return (
    <div className="container flex items-center justify-center gap-[2rem]">
      {doctors.map((doctor, index) => {
        return (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            photo={doctor.photo}
            avgRating={doctor.avgRating}
            totalRating={doctor.totalRating}
            totalPatients={doctor.totalPatients}
            hospital={doctor.hospital}
          />
        );
      })}
    </div>
  );
};

export default DoctorList;
