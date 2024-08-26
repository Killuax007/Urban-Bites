/* eslint-disable  */
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import axios from "axios";
import { fetchUser, useCart } from "./Api";

export default function user() {
  const id = localStorage.getItem("userId");
  const data = useCart(id);
  const [user, setUser] = useState({});
  const [order, setOrder] = useState([]);

  let sum = 0;

  data.forEach((element) => {
    sum += element.foods.price;
  });
  const discountPrice = (price, percent) => {
    return price - price / percent;
  };
  useEffect(() => {
    async function getUser(id) {
      fetchUser(id).then((user) => {
        setUser(user.order);
      });
    }
    async function getOrder(id) {
      fetchUser(id).then((user) => {
        setOrder(user.order.items);
      });
    }
    getUser(id);
    getOrder(id);
  }, []);
  return (
    <div>
      <Navbar2 />
      <div className="mx-auto   bg-[url('./images/bg.jpg')] max-w-full px-4 sm:px-6 lg:px-8">
        <div className=" font-Cottage px-4 py-6 sm:px-6">
          <h1 className="text-2xl my-5 font-bold tracking-tight text-yellow-400">
            order Number #{data && id}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-rose-700">
            order Status : pending
          </h3>
          {data &&
            order.map((item, index) => (
              <div className="flow-root" key={index}>
                <ul role="list" className=" my-1 divide-y divide-gray-200">
                  <li className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md buser buser-gray-200">
                      <img
                        className="h-full w-full m- object-cover object-center"
                        src={item.img}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 justify-between ">
                      <div className="text-base font-medium text-white">
                        <p>{item.name}</p>
                        <br />
                        <p className=" text-yellow-400">{item.category}</p>
                      </div>
                      <div>
                        <p className="flex justify-between mr-1 text-md text-white">
                          {item.price}.00
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
        </div>
        <div className="buser-t buser-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between my-2 text-base font-medium text-white">
            <p>Subtotal</p>
            <p>{discountPrice(sum, 10)}.00</p>
          </div>
          <div className="flex justify-between my-2 text-base font-medium text-white">
            <p>Total Items in Cart</p>
            <p>{data.length} items</p>
          </div>
          <p className="mt-0.5 text-xl text-white">Shipping Address :</p>
          <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-medium leading-6 text-white">
                  {user.name}
                </p>
                <p className="text-sm font-medium leading-6 text-white">
                  {user.email}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {user.street} <br /> {user.city}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {user.pincode}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {user.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
