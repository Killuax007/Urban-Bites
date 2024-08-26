// import React from "react";
/* eslint-disable  */
import "../style.css";
const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar ">
        <div
          className="flex flex-row sm:flex-col w-full md:block  md:w-auto"
          id="navbar-default"
        >
          {menuList.map((curElement, id) => {
            return (
              <button
                key={id}
                className="btn-group__item font-Raleway"
                onClick={() => {
                  filterItem(curElement);
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
