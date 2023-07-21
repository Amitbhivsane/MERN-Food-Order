import { React, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <Link to="/" className="title">
              Web Dunia
            </Link>
          </div>
          <div className="center">
            <ul className="list">
              <li className="listitem">
                <a href="/">Home</a>
              </li>
              <li className="listitem">
                <a href="#contact">Contact</a>
              </li>
              <li className="listitem">
                <a href="#foods">Foods</a>
              </li>
              <li className="listitem">
                <a href="#faq">FAQ</a>
              </li>
              <li className="listitem">
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <AiOutlineUser className="userIcon" />
            <Link to="/cart" className="cartContainer">
              <AiOutlineShoppingCart className="cartIcon" />
              <div className="cartQuantity">{products.length}</div>
            </Link>
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
