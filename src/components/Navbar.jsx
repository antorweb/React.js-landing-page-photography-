// 

import React, { useState } from "react";
import navBannar from "../assets/images/Header.png";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        id="navbar"
        style={{
          background: `URL(${navBannar})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
        className="py-[29px]"
      >
        <div className="container">
          <div id="navbar-row" className="flex justify-between items-center">
            <div className="flex gap-[129px] items-center">
              <Link to={"/"}>
                <img src={logo} alt="nav-logo" />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <ul className="flex items-center gap-[30px]">
                  <li className="text-[16px] font-normal font-inter text-[#fff]">
                    <Link to={"/"}>About</Link>
                  </li>
                  <li className="text-[16px] font-normal font-inter text-[#fff]">
                    <Link to={"/"}>Project</Link>
                  </li>
                  <li className="text-[16px] font-normal font-inter text-[#fff]">
                    <Link to={"/"}>Blog</Link>
                  </li>
                  <li className="text-[16px] font-normal font-inter text-[#fff]">
                    <Link to={"/"}>Pricing</Link>
                  </li>
                  <li className="text-[16px] font-normal font-inter text-[#fff]">
                    <Link to={"/"}>Studio</Link>
                  </li>
                  <li className="text-[16px] font-normal font-inter text-[#fff]">
                    <Link to={"/"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Toggle Button */}
            <label className="burger md:hidden" onClick={() => setOpen(!open)}>
              <input type="checkbox" checked={open} readOnly />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-4 animate-fadeIn">
              <ul className="flex flex-col gap-4 text-center">
                <li className="text-[16px] font-normal font-inter text-[#fff]">
                  <Link to={"/"}>About</Link>
                </li>
                <li className="text-[16px] font-normal font-inter text-[#fff]">
                  <Link to={"/"}>Project</Link>
                </li>
                <li className="text-[16px] font-normal font-inter text-[#fff]">
                  <Link to={"/"}>Blog</Link>
                </li>
                <li className="text-[16px] font-normal font-inter text-[#fff]">
                  <Link to={"/"}>Pricing</Link>
                </li>
                <li className="text-[16px] font-normal font-inter text-[#fff]">
                  <Link to={"/"}>Studio</Link>
                </li>
                <li className="text-[16px] font-normal font-inter text-[#fff]">
                  <Link to={"/"}>Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
