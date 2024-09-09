import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/userReducer";
const UserContext = createContext();
import axios from "axios";

const initialState = { state: [], user: {} };
//eslint-disable-next-line
function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `http://localhost:8000/user`;

  async function getUser(token) {
    const response = await axios.get(`${url}/authlogin`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { userId } = await response.data;
    const user = await axios.get(`${url}/${userId}`);
    dispatch({ type: "GET_USER", user: user.data });
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        url,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
const useUserContext = () => {
  return useContext(UserContext);
};
// eslint-disable-next-line react-refresh/only-export-components
export { UserContextProvider, UserContext, useUserContext };
