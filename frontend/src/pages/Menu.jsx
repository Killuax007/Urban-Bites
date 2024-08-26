// import React from 'react'

import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import Resturant from "./Restaurant";
export default function Menu() {
  return (
    <div>
      <Navbar2 />
      <div className="text-center bg-gray-700">
        <span className=" inline-block  text-6xl text-yellow-400 font-Alex font-bold mt-5">
          Our Menu
        </span>
        <div className="">
          <Resturant />
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
