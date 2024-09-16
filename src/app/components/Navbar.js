"use client";
import Link from "next/link";
import React, { useState } from "react";
import { campaignMedium } from "../styles/fonts";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import logoPic from "../assets/logo small.png";
import { motion, useReducedMotion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const isAnimationDisabled = useReducedMotion();

  const animateDiv = {
    opacity: 1
  }

  const initialDiv = {
    opacity: 0
  }

  return (
    <nav className={`flex justify-between items-center w-full h-18 px-4 fixed backdrop-blur-xs nav z-10 ${campaignMedium.className}`}>
      {/* Desktop Menu */}
      <motion.div
        initial={isAnimationDisabled ? animateDiv : initialDiv}
        animate={isAnimationDisabled ? undefined : animateDiv}
        transition={{duration: 1}}
      >
          <div>
            <Link href="/" className="focus:border-2 focus:border-black">
              <Image
                  src={logoPic}
                  alt="Small logo for Inkblot Book Club"
                  width={100}
                  height={100}
                  priority={true}
                  className="mt-2"
              ></Image>
            </Link>
          </div>
      </motion.div>
      <motion.ul
        initial={isAnimationDisabled ? animateDiv : initialDiv}
        animate={isAnimationDisabled ? undefined : animateDiv}
        transition={{duration: 1}}
        >
          <ul className="hidden md:flex p-4 items-center">
            <Link href="about">
              <li className="nav-links cursor-pointer mx-4 text-lg md:text-xl link-underline">
                ABOUT
              </li>
            </Link>
          </ul>
        </motion.ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-30 md:hidden"
      >
        {nav ? <HiOutlineX size={40} className="fill-white" /> : <HiMenu size={40} className="fill-white" />}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black z-20 flex flex-col items-center justify-center space-y-6 md:hidden transition-transform transform ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul>
          <Link href="about">
            <li className="nav-links cursor-pointer text-4xl hover:underline hover:underline-offset-8 focus:underline decoration-2 duration-200">
              ABOUT
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
