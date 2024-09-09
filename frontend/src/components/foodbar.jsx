// import React from "react";
/* eslint-disable  */
import "../style.css";
import { useFoodContext } from "../store/contexts/foodContext.jsx";

const Navbar = ({ menuList, filterItem }) => {
  const { getFoodByCategory } = useFoodContext();

  return (
    <>
      <nav className="navbar ">
        <div
          className="flex flex-row sm:flex-col w-full md:block  md:w-auto"
          id="navbar-default"
        >
          {menuList &&
            menuList.map((curElement, id, event) => {
              return (
                <button
                  key={id}
                  className="btn-group__item font-Raleway"
                  onClick={(event) => {
                    getFoodByCategory(curElement);
                  }}
                >
                  {curElement}
                </button>
              );
            })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
