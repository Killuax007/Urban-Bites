// import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import { toast } from "react-toastify";
export const Signin = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/users/signin",
      data
    );
    localStorage.setItem("userId", response.data.id);
    localStorage.setItem("token", response.data.token);
    if (response.status == 200) {
      toast.success("User signed in successfully");
      Navigate("/dashboard");
    } else {
      toast.error(response.data.message);
    }
  }
  const passwordToggle = () => {
    const toggle = document.getElementById("password");
    if (toggle.type === "password") {
      toggle.type = "text";
    } else {
      toggle.type = "password";
    }
  };

  return (
    <div>
      <Navbar2 />

      <div className=" bg-[url('./images/bg.jpg')]  flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
          <h2 className="mt-10 text-center text-4xl font-bold font-Cottage leading-9 tracking-tight text-yellow-400 ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mb-7">
          <form noValidate className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block font-Cottage text-md font-medium leading-6 text-yellow-400"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  className=" font-Cottage block w-full font-semibold rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className=" font-Cottage block text-sm font-medium leading-6 text-yellow-400"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className=" font-Cottage font-semibold text-yellow-400 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className=" relative flex flex-row mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  className="block font-Cottage font-bold  w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
                <span
                  className=" absolute right-1 mt-1 mr-1 text-white"
                  onClick={passwordToggle}
                >
                  <i className="fa fa-eye text-black " aria-hidden="true" />
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className=" font-Cottage justify-center rounded-sm border-2 p-3 w-full  border-yellow-300 text-yellow-200  hover:bg-yellow-400 hover:text-black font-semibold px-3 py-1.5 "
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 font-Cottage  text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold font-Cottage leading-6 text-yellow-400 hover:text-indigo-500"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
