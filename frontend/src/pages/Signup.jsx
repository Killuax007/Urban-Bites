/* eslint-disable  */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import { toast } from "react-toastify";

export const Signup = () => {
  const Navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (window.navigator.onLine === true) {
      const response = await axios.post(
        "http://localhost:8000/users/signup",
        data
      );
      const userId = response.data.response._id;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", userId);
      setIsLogged(true);
      if (response.status == 200) {
        toast.success("Otp sent successfully..");
        Navigate("/auth");
      }
    } else {
      toast.error("Check Network Connection");
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
      <div className=" bg-[url('./images/bg.jpg')] flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center font-Cottage text-4xl font-bold leading-9 tracking-tight text-yellow-400">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mb-7">
          <form noValidate className="space-y-6">
            <div>
              <label
                htmlFor="firstname"
                className=" font-Cottage block text-md font-medium leading-6 text-yellow-400"
              >
                firstname
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={data.firstname}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 pl-3 py-1.5 font-Cottage font-bold text-gray-900 shadow-sm  placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-Cottage text-md font-bold leading-6 text-yellow-400"
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
                  className="block w-full rounded-md border-0 pl-3 py-1.5 font-Cottage font-bold text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className=" flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-Cottage text-md font-bold leading-6 text-yellow-400"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className=" font-thin font-Cottage text-yellow-400 hover:text-white"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="flex flex-row relative mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={handleChange}
                  className="pl-3 block w-full font-Cottage font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-md sm:leading-6"
                />
                <span
                  onClick={passwordToggle}
                  className=" absolute right-1 my-1"
                >
                  <i className="fa fa-eye text-black " aria-hidden="true" />
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className=" mt-3 justify-center rounded-sm border-2 p-3 w-full  border-yellow-300 text-yellow-200  hover:bg-yellow-400 hover:text-black font-bold px-3 py-1.5 font-Cottage"
              >
                Request OTP
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 font-Cottage">
            Existing member..?
            <Link
              to="/signin"
              className="font-semibold leading-6 text-yellow-400 hover:text-indigo-500 font-Cottage"
            >
              Signin here..
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
