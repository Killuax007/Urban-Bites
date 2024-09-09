const reducer = (state, action) => {
  switch (action.type) {
    case "ALL_FOODS":
      return { ...state, foods: action.foods };
    case "FOOD_BY_CATEGORY":
      return { ...state, foods: action.filteredFoods };
    default:
      return state;
  }
};
export default reducer;
