import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/doctor-img01.png";
import { BiMenu } from "react-icons/bi";
import "../../App.css";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerScroll = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("stick");
      } else {
        headerRef.current.classList.remove("stick");
      }
    });
  };

  useEffect(() => {
    headerScroll();
    return () => window.removeEventListener("scroll", headerScroll);
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

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
    <>
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <img src={logo} alt="logo" />
            </div>

            {/* Menu Items */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {navItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? "text-primaryColor text-[16px] leading-7 font-[700]"
                            : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* _________ */}

            <div className="flex items-center gap-4">
              {/* User Img */}
              <div className="hidden">
                <Link to={"/"}>
                  <figure className="w-[35px] h-[35px] rounded-full">
                    <img
                      className="rounded-full w-full cursor-pointer"
                      src={userImg}
                      alt="user pic"
                    />
                  </figure>
                </Link>
              </div>
              {/* Login Btn */}

              <Link to={"/login"}>
                <button className="flex items-center justify-center rounded-[50px] text-white font-[600] h-[44px] py-2 px-6 bg-primaryColor ">
                  Login
                </button>
              </Link>

              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
