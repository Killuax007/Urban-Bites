import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import { toast } from "react-toastify";

export const Auth = () => {
  const [otp, setOtp] = React.useState("");
  const Navigate = useNavigate();
  async function handleSubmit() {
    const response = await axios.get(
      "https://urban-bites-4cua.onrender.com/users/auth?otp=" + otp
    );
    console.log(response.status);
    if (response.status == 200) {
      toast.success("Sign-up successfully");

      Navigate("/dashboard");
    }
  }

  return (
    <>
      <Navbar2 />
      <div className="bg-[url('./images/bg.jpg')] flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="my-10 h-96 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="my-10 font-Cottage text-center text-4xl font-bold leading-9 tracking-tight text-yellow-400">
            {" "}
            Otp verification{" "}
          </h2>
          <div>
            <label
              htmlFor="otp"
              className="block text-md font-Cottage  leading-6 text-yellow-400"
            >
              Enter otp
            </label>
            <div className="mt-2">
              <input
                id="otp"
                name="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="block font-Cottage w-full text-md font-bold rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className=" font-Cottage mt-7 justify-center rounded-sm border-2 p-3 w-full  border-yellow-300 text-yellow-200  hover:bg-yellow-400 hover:text-black font-semibold px-3 py-1.5 hover:ease-in-out "
              >
                Verify...
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
