// import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";

export const Home = () => {
  return (
    <>
      <Navbar2 />
      <div className="relative text-center">
        <img src="./images/bg.jpg" className="w-full h-screen" alt="" />
        <div className=" absolute top-1/3  w-full center">
          <span className=" font-Horence  text-white  text-4xl sm:text-8xl justify-center m-auto text-center  ">
            For the love of delicious food
          </span>
          <h1 className=" font-Raleway mt-3 text-white text-md text-sm sm:text-xl justify-center m-auto text-center ">
            Come with family & feel the joy of mouthwatering food{" "}
          </h1>
          <div className="mt-5">
            <Link to="/signup">
              <button className=" font-Alex text-2xl justify-center rounded-md  border-2 p-3 w-36 border-yellow-300 text-yellow-200 hover:bg-yellow-400 hover:text-black font-normal ">
                Sign up
              </button>
            </Link>
            <Link to="/signin">
              <button className="font-Alex text-2xl justify-center rounded-md border-2 p-3 w-36 ml-6 border-yellow-300 text-yellow-200  hover:bg-yellow-400 hover:text-black font-normal ">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
