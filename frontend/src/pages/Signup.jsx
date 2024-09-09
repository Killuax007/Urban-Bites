/* eslint-disable  */
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

export const Signup = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post("http://localhost:8000/user/signup", {
      firstname: data.firstname,
      email: data.email,
      password: data.password,
    });
    localStorage.setItem("token", response.data.token);

    if (response.status == 200) {
      toast.success("Otp sent successfully..");
      Navigate("/auth");
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
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mb-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  {...register("firstname")}
                  className="block w-full rounded-md border-0 pl-3 py-1.5 font-Cottage font-bold text-gray-900 shadow-sm  placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-Cottage text-md font-medium leading-6 text-yellow-400"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", {
                    required: "Invalid email details....",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Invalid email address",
                    },
                  })}
                  className="block w-full rounded-md border-0 pl-3 py-1.5 font-Cottage font-bold text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className=" flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block  font-Cottage text-md font-medium leading-6 text-yellow-400"
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
                  {...register("password", {
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters\n
                      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                      - Can contain special characters`,
                    },
                  })}
                  className="pl-3 block w-full font-Cottage font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
                <span
                  onClick={passwordToggle}
                  className=" absolute right-1 my-1"
                >
                  <i
                    className="fa fa-eye text-black cursor-pointer "
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
            <div>
              {errors.password && (
                <div
                  className=" border-transparent cursor-pointer  font-Raleway flex p-4  text-sm text-rose-500 rounded-lg  "
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Danger</span>
                  <div>
                    <span className="font-medium">
                      Ensure that these requirements are met:
                    </span>
                    <ul className="mt-1.5 list-disc list-inside">
                      <li>- at least 8 characters</li>
                      <li>
                        {" "}
                        - must contain at least 1 uppercase letter, 1 lowercase
                        letter, and 1 number\n
                      </li>
                      <li>- Can contain special characters</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center ">
                <label
                  htmlFor="confirm-password"
                  className="block text-md mb-0 font-Cottage font-thin leading-6 text-yellow-400 "
                >
                  Confirm Password
                </label>
              </div>
              <div className="flex flex-row relative mt-2 ">
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  autoComplete="confirmPassword"
                  {...register("confirmPassword", {
                    required: "confirmpassword is not match with password !!!!",
                    validate: (value, formValues) =>
                      value === formValues.password || "password not matching",
                  })}
                  className="pl-3 block w-full font-Cottage font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />

                <span
                  onClick={passwordToggle}
                  className=" absolute right-1 my-1"
                >
                  <i
                    className="fa fa-eye text-black cursor-pointer "
                    aria-hidden="true"
                  />
                </span>
              </div>
              <span>
                {errors.confirmPassword && (
                  <span className="text-rose-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </span>
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
