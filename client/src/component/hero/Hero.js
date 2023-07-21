import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Hero.css";
import manEating from "../../assets/man-having-his-meal.svg";

const Hero = () => {
  return (
    <>
      <section style={{ height: "200vh" }} id="home" className="container-Hr">
        <div className="wrapper-Hr">
          <div className="left-Hr">
            <h2 className="title-Hr">Do you crave delicious food</h2>
            <p className="firstMsg-Hr">
              But going out to take <span>food costs time....</span>
            </p>
            <p className="secondMsg-Hr">
              Why not order <span>pizza</span> or something <br />{" "}
              <span>delicious </span>
              from our restaurnt
            </p>
            <p className="desc-Hr">
              Our restaurant always puts the client above. They are our single
              most important thing for our business.
            </p>
            <div className="buttons-Hr">
              <button className="buttonOrder-Hr">Order now!</button>
              <button className="buttonSee-Hr">
                <a href="#foods">
                  See what's available <AiOutlineArrowDown />
                </a>
              </button>
            </div>
          </div>
          <div className="right-Hr">
            <img src={manEating} alt="" className="manEatingImg-Hr" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
