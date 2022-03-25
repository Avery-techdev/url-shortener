import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "../ImageLoader/Loader";
import Hamburger from "./Hamburger";
import Logo from "../Icons/Logo"

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div>
      <div className="w-full h-12 bg-blue-500 xl:px-40">
        <ul className="my-10 w-full p">
          <li className="px-3 inline-block relative xl:top-3">
            <a href="#">
              <Logo className=" fill-very-dark-blue" />
            </a>
          </li>
          <li className="px-12 hidden xl:inline-block">
            <a href="#">Features</a>
          </li>
          <li className="pr-12 hidden xl:inline-block">
            <a href="#">Pricing</a>
          </li>
          <li className="pr-12 hidden xl:inline-block">
            <a href="#">Resources</a>
          </li>
          <ul className="inline-block w-6/12 text-right">
            <li className="pr-12 hidden xl:inline-block">
              <a href="#">Login</a>
            </li>
            <button className="hidden xl:inline-block bg-cyan py-1 rounded-full w-24 text-white">
              SignUp
            </button>
          </ul>

          {hamburgerOpen ? (
            <div className=" text-center bg-dark-violet text-white text-h5 font-poppins-bold rounded-xl m-5">
              <li className="py-5">Features</li>
              <li className="">Pricing</li>
              <li className="py-5">Resources</li>
              <hr className="border-grayish-violet opacity-30 w-10/12 m-auto" />
              <li className="py-5">Login</li>
              <button className=" bg-cyan w-10/12 mb-8 py-1 rounded-full">
                SignUp
              </button>
            </div>
          ) : null}
        </ul>
        <button
          className="xl:hidden absolute right-10 top-10"
          onClick={toggleHamburger}
        >
          <Hamburger isOpen={hamburgerOpen} />
        </button>
      </div>
    </div>
  );
}
