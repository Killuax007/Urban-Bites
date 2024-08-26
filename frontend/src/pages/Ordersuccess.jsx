// import React from 'react'
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
// import { useOrder } from "./Api";

export default function Ordersuccess() {
  const id = localStorage.getItem("userId");

  return (
    <div>
      <Navbar2 />
      <div className=" bg-[url('./images/bg.jpg')]  flex  flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <Confetti />
        <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">
              Order Successfully Placed
            </p>
            <h1 className=" font-Cottage mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Order Number # {id}
            </h1>
            <p className="mt-6 text-base leading-7 text-yellow-400">
              You can check your order in My Account {">"} My Orders
            </p>
            <div className=" font-Cottage mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/order"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Orders
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
