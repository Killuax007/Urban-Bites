/* eslint-disable  */
import axios from "axios";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";

export const fetchUser = async (id) => {
  const res = await axios.get(
    "https://urban-bites-4cua.onrender.com/users/" + id
  );
  console.log(res.data);

  return res.data;
};
export const foodItems = async () => {
  const res = await axios.get("http://localhost:8000/foods/");
  return res.data;
};
export const foodItemsById = async (id) => {
  const res = await axios.get("http://localhost:8000/foods/" + id);
  return res.data;
};

export const addToCart = async (item) => {
  try {
    const response = await axios.post(
      `https://urban-bites-4cua.onrender.com/users/cart`,
      {
        item,
      }
    );
    toast.success("item added to cart successfully");
    return response.data;
  } catch (error) {
    toast.error("item already in cart");
  }

  // console.log(response);
};
export const addAddress = async (item) => {
  try {
    const response = await axios.post(
      `https://urban-bites-4cua.onrender.com/users/address`,
      {
        item,
      }
    );
    toast.success("Address added successfully");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }

  // console.log(response);
};
export const fetchItemsFromCart = async (id) => {
  const res = await axios.get(
    "https://urban-bites-4cua.onrender.com/users/carts/" + id
  );
  return res.data;
};
export function useCart(id) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function getData(id) {
      const res = await axios.get(
        "https://urban-bites-4cua.onrender.com/users/carts/" + id
      );
      // console.log(res.data);
      setCart(res.data);
    }
    getData(id);
  }, []);
  return cart;
}
// export function useOrder(id) {
//   const [order, setOrder] = useState();
//   useEffect(() => {
//     async function getData(id) {
//       const res = await axios.get(
//         "https://urban-bites-4cua.onrender.com/users/order/" + id
//       );
//       console.log(res.data);
//       setOrder(res.data);
//     }
//     getData(id);
//   }, []);
//   return order;
// }
export const deleteItem = async (_id) => {
  await axios.delete(
    "https://urban-bites-4cua.onrender.com/users/carts/" + _id
  );
};
export const getId = async (id) => {
  const res = await axios.get(
    "https://urban-bites-4cua.onrender.com/users/order/" + id
  );
  const result = await res.data;
  return result;
};
