import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/foodReducer";
const FoodContext = createContext();
const initialState = { state: [], foods: [], food: {}, filteredFoods: [] };
//eslint-disable-next-line
function FoodContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `http://localhost:8000/foods`;
  async function getFoodItems(query) {
    const response = await fetch(query);
    const foodItems = await response.json();
    dispatch({ type: "ALL_FOODS", foods: foodItems });
  }
  async function getFoodItemsBYId(id) {
    const response = await fetch(`${url}/${id}`);
    const foodItem = await response.json();
    dispatch({ type: "FOOD_BY_ID", food: foodItem });
  }
  async function getFoodByCategory(value) {
    const response = await fetch(`${url}/q?category=${value}`);
    const res = await response.json();
    dispatch({ type: "FOOD_BY_CATEGORY", filteredFoods: res });
  }
  useEffect(() => {
    getFoodItems(url);
  }, []);
  return (
    <FoodContext.Provider
      value={{
        ...state,
        url,
        getFoodItems,
        getFoodItemsBYId,
        getFoodByCategory,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
const useFoodContext = () => {
  return useContext(FoodContext);
};
// eslint-disable-next-line react-refresh/only-export-components
export { FoodContextProvider, FoodContext, useFoodContext };
