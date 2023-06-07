"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavImg from "../../../public/logo.png";
import "../../style/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="con flex flex-row p-8 bg-white h-20 w-full items-center z-100">
      <div className="flex flex-row justify-start">
        <Link href={"/"}>
          <Image src={NavImg} alt="NavImg" width="150" height="100" />
        </Link>
      </div>

      <div className={`navitem ${isMobile ? "mobile" : ""} ml-auto text-xl font-semibold`}>
        <div className="ml-6 hover:text-cyan-600">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="ml-6 hover:text-cyan-600">
          <Link href={"/about"}>About</Link>
        </div>
        <div className="ml-6 hover:text-cyan-600">
          <Link href={"/movie"}>Movies</Link>
        </div>
        <div className="ml-6 hover:text-cyan-600">
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
      <div className="humbugger ml-auto">
        {isMobile ? (
          <FaTimes style={{ fontSize: "25px" }} onClick={handleToggle} />
        ) : (
          <FaBars style={{ fontSize: "25px" }} onClick={handleToggle} />
        )}
      </div>
    </header>
  );
};
export default Navbar