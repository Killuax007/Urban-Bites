import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Ordersuccess from "./pages/Ordersuccess";
import Checkout from "./pages/Checkout";
import { FoodContextProvider } from "./store/contexts/foodContext";
import Demo from "./pages/demo";
import { UserContextProvider } from "./store/contexts/userContext";
function App() {
  return (
    <>
      <UserContextProvider>
        <FoodContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
              <Route path="/ordersuccess" element={<Ordersuccess />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </FoodContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
