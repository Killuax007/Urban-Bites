// import React from "react";

import Footer from "../components/footer";
import Card from "../components/card";
import Story from "../components/story";
import { Link } from "react-router-dom";
import Navbar2 from "../components/navbar2";
export function Dashboard() {
  return (
    <>
      <Navbar2 />
      <div className="bg-zinc-300">
        <section className="pl-8 ">
          <div className="md:mt-0 ">
            <div className="mt-10 md:mt-20 lg:mt-12 xl:mt-0">
              <div
                className="md:grid md:grid-cols-2 md:items-center md:flex-wrap md:gap-2 swiper-slide mt-24 md:mt-0"
                id="slider"
              >
                <div className="content md:pl-16 lg:pl-36">
                  <span className="text-2xl font-semibold text-orange-700 mb-6">
                    Our New Dish
                  </span>
                  <h3 className="text-6xl font-semibold mt-2 mb-2 font-custom3">
                    New Spicy Pasta
                  </h3>
                  <p className="text-xl text-zinc-600 leading-8 mb-6">
                    Spicy pasta is a delicious and easy recipe that you can make
                    in less than 30 minutes. Its perfect for a quick weeknight
                    dinner or a special occasion.
                  </p>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Order Now
                    </span>
                  </button>
                </div>
                <div className="image size-12/12 md:pt-10 mt-0 md:mt-0 -ml-6 md:ml-0">
                  <img src="./pasta.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <h3 className=" text-center text-6xl font-semibold mt-2 mb-4 font-custom3">
            We Serves
          </h3>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-3 center text-center mx-8 sm:mx-1">
            <Link to="/menu">
              <Card name="Best Cokes and Burgers" img="./banner1.png" />
            </Link>
            <Link to="/menu">
              <Card name="Best Fried rice" img="./fried-rice.png" />
            </Link>
            <Link to="/menu">
              <Card name="Best Chocolate and Milkshake" img="./chocolate.png" />
            </Link>
          </div>
        </section>
        <div>
          <Story />
        </div>
      </div>
      <Footer />
    </>
  );
}
