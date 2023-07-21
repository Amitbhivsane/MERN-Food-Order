import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import Create from "./component/create/Create";
import FoodDetails from "./component/foodDetails/FoodDetails";
import FoodCatalog from "./component/foodCatalog/FoodCatalog";
import Cart from "./component/cart/Cart";
import CheckOut from "./component/checkout/CheckOut";
import SignUp from "./component/signup/SignUp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/foods/:id" element={<FoodCatalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
