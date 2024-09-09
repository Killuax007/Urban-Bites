/* eslint-disable  */
import { useState, useEffect } from "react";
import { foodItems, foodItemsById } from "./Api.js";
import MenuCard from "../components/foodcard.jsx";
import { Foods } from "./foods.js";
import "./style.css";
import Navbar from "../components/foodbar.jsx";
import { useFoodContext } from "../store/contexts/foodContext.jsx";
const Resturant = () => {
  const { foods, getFoodByCategory } = useFoodContext();
  const [menuData, setMenuData] = useState(Foods);

  const uniqueList = [
    ...new Set(
      menuData.map((curElement) => {
        return curElement.category;
      })
    ),
  ];

  const [menuList] = useState(uniqueList);
  const filterItem = (category) => {
    const updatedList = menuData.filter((curElement) => {
      return curElement.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar menuList={menuList} filterItem={filterItem} />
      <MenuCard data={foods} />
    </>
  );
};

export default Resturant;
