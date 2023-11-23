import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  const navItems = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];

  return (
    <footer className="pb-16 pt-10">
      <div className="container flex justify-around gap-4">
        <div className="flex flex-col gap-3">
          <div>
            <img src={logo} alt="" />
          </div>
          <p className="text-textColor ">
            CopyRight 2023 consectetur adipisicing elit.
          </p>
          <div className="flex gap-3">
            <span className="border border-black p-[5px] rounded-full">
              <BiLogoFacebook className="text-[1.2rem]" />
            </span>
            <span className="border border-black p-[5px] rounded-full">
              <BiLogoLinkedin className="text-[1.2rem]" />
            </span>
            <span className="border border-black p-[5px] rounded-full">
              <BiLogoInstagram className="text-[1.2rem]" />
            </span>
            <span className="border border-black p-[5px] rounded-full">
              <BiLogoYoutube className="text-[1.2rem]" />
            </span>
          </div>
        </div>
        <div>
          <h2 className="font-[700] text-[18px] mb-3 text-center">
            Quick Links
          </h2>
          <ul className="menu flex flex-col items-center gap-[12px]">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px]  font-[500]"
                        : "text-textColor text-[16px] font-[400] hover:text-primaryColor"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="font-[700] text-[18px] mb-3 text-center">I want to:</h2>
          <ul className="menu flex flex-col items-center gap-[12px]">
            <li>
              <Link className="text-textColor">Find a doctor</Link>
            </li>
            <li>
              <Link className="text-textColor">Request an appoinment</Link>
            </li>
            <li>
              <Link className="text-textColor">Find a location</Link>
            </li>
            <li>
              <Link className="text-textColor">Get a Option</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-[700] text-[18px] mb-3 text-center">Support</h2>
          <ul className="menu flex flex-col items-center gap-[12px]">
            <li>
              <Link className="text-textColor">Donate</Link>
            </li>
            <li>
              <Link className="text-textColor">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
