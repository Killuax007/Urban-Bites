/* eslint-disable  */
import { useState, useEffect } from "react";
import { foodItems, foodItemsById } from "./Api.js";
import MenuCard from "../components/foodcard.jsx";
import { Foods } from "./foods.js";
import "./style.css";
import Navbar from "../components/foodbar.jsx";
const Resturant = () => {
  const [menuData, setMenuData] = useState(Foods);
  useEffect(() => {
    foodItems().then((food) => {
      setMenuData(food);
    });
  }, []);
  const uniqueList = [
    ...new Set(
      menuData.map((curElement) => {
        return curElement.category;
      })
    ),
  ];

  const [menuList] = useState(uniqueList);
  const filterItem = (category) => {
    const updatedList = Foods.filter((curElement) => {
      return curElement.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard data={menuData} />
    </>
  );
};

export default Resturant;
