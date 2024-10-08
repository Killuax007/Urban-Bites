// // import React from 'react'
// import Footer from "../components/footer";
// import Navbar2 from "../components/navbar2";
// export default function About() {
//   return (
//     <div>
//       <Navbar2 />
//       <div className=" bg-[url('./images/bg.jpg')]  flex  flex-1 flex-col justify-center px-6 py-5 lg:px-8">
//         <div className="h-96">hlihoih</div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
import { useEffect } from "react";
// import aboutmeImage from "./user.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer";
import Navbar2 from "../components/navbar2";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar2 />
      <div className=" font-Cottage wrapper bg-[url('./images/bg.jpg')]  flex flex-col-reverse md:flex-row md:items-start items-center justify-center sm:pl-10  pt-20 ">
        <div className="w-3/4 [&>p]:text-lg [&>p]:lg:text-xl [&>h1]:lg:text-3xl">
          <h1 className="text-xl mt-6 mb-3 font-extrabold text-yellow-300">
            Frameworks and Technologies Used
          </h1>
          <p className="text-white dark:text-lightColor-300">
            In the development of this website, Ive harnessed the power of the
            following frameworks and technologies to create a modern,
            single-page application (SPA):
          </p>
          <div className="flex text-4xl  text-white md:text-[60px] justify-evenly my-8 text-grayshade-50 ">
            <span data-aos="zoom-in">
              <SiHtml5 className="hover:text-[#ef724c]   transition-all ease duration-300" />
            </span>
            <span data-aos="zoom-in">
              <SiCss3 className="hover:text-[#405bd1]  transition-all ease duration-300" />
            </span>
            <span data-aos="zoom-in">
              <SiJavascript className="hover:text-[#ece73e]  transition-all ease duration-300" />
            </span>
            <span data-aos="zoom-in">
              <SiReact className="hover:text-[#149ECA]  transition-all ease duration-300" />
            </span>
            <span data-aos="zoom-in">
              <SiReactrouter className="hover:text-[#F44250] transition-all ease duration-300" />
            </span>
            <span data-aos="zoom-in">
              <SiTailwindcss className="hover:text-[#38BDF8] transition-all ease duration-300" />
            </span>
          </div>
          <h1 className="text-xl mt-6 mb-3 font-extrabold text-yellow-300">
            A Glimpse into the Backend:
          </h1>
          <p className="text-white dark:text-lightColor-300">
            While my expertise primarily lies in frontend development, Ive
            integrated Node.js and Express.js on the backend to ensure a robust
            and efficient server-side infrastructure. This combination allows
            for smooth communication between the frontend and the server,
            ensuring a seamless user experience.
          </p>
          <div className="flex text-white text-4xl md:text-[60px] justify-evenly my-8 text-grayshade-50">
            <span data-aos="zoom-in">
              <FaNode className="hover:text-[#57A646] transition-all ease duration-300" />
            </span>
            <span data-aos="zoom-in">
              <SiExpress className="hover:text-black transition-all ease duration-300" />
            </span>
            <span data-aos="zoom-in">
              <SiMongodb className="hover:text-[#245419] transition-all ease duration-300" />
            </span>
          </div>
        </div>
        <div className="w-2/3 md:w-90 md:pl-4 lg:pl-20 sm:pr-6">
          <img
            data-aos="fade-up"
            className="rounded-3xl"
            src="./user.jpg"
            alt="aboutimg"
          />
          <h1 className="text-3xl mt-6 mb-3 font-extrabold text-yellow-300">
            About Developer
          </h1>
          <p className=" text-white dark:text-lightColor-300">
            Hello there! Im{" "}
            <span className=" text-yellow-400 font-semibold text-purpleshade-300">
              Rakesh Kumar Parida
            </span>
            , the passionate developer behind this website. With a keen eye for
            detail and a love for crafting seamless digital experiences, I set
            out to create a unique and user-friendly online shopping platform.
          </p>
          <h1 className="text-xl mt-6 mb-3 font-extrabold text-yellow-300">
            Lets Connect
          </h1>
          <p className="text-white dark:text-lightColor-300">
            Explore the website, discover the offerings, and if you have any
            questions or suggestions, Im here to listen. Your journey through
            this online shopping experience is as important to me as it is to
            you. Happy exploring!
          </p>
          <div className="flex text-4xl text-white md:text-[60px] justify-evenly my-8 text-grayshade-50">
            <Link
              to={"https://www.linkedin.com/in/ali-zarshenas-siza"}
              target="_blank"
              data-aos="zoom-in"
            >
              <FaLinkedin className="hover:text-[#0077b5]  transition-all ease duration-300" />
            </Link>
            <Link
              to={"https://github.com/Siza36"}
              target="_blank"
              data-aos="zoom-in"
            >
              <FaGithub className="hover:text-black dark:hover:text-white  transition-all ease duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
