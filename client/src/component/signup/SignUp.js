import React from "react";
import "./signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/womaneating.jpg";
import { register } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/auth/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      dispatch(register(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <div className={"signUpContainer"}>
      <div className={"signUpWrapper"}>
        <div className={"signUpLeftSide"}>
          <img src={img} className={"leftImg"} />
        </div>
        <div className={"signUpRightSide"}>
          <h2 className={"title"}>Sign Up</h2>
          <form onSubmit={handleSignup} className={"signUpForm"}>
            <input
              type="text"
              placeholder="Type username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Type email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={"submitBtn"}>Sign Up</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
          {error && (
            <div className={"errorMessage"}>
              Wrong credentials! Try different ones.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
