import React from "react";
import "./Home.css";
import Hero from "../hero/Hero";
import illustration1 from "../../assets/male-delivery-guy-riding-scooter.svg";
import illustration2 from "../../assets/delivery-location.svg";
import illustration3 from "../../assets/deliveryman-with-pizza.svg";
import Foods from "../foods/Foods";
import Newsletter from "../newsletter/NewsLetter";
const Home = () => {
  return (
    <>
      <div className="container-H">
        <div className="wrapper-H">
          <Hero />
          <div className="delivery-H">
            <div className="titles-H">
              <span className="deliverySubtitle-H">Delivery</span>
              <h2 className="deliveryTitle-H">Always on time for you</h2>
            </div>
            <div className="deliveryInfos-H">
              <div className="deliveryInfo-H">
                <img src={illustration1} alt="" className="firstImg-H" />
                <h3>Our delivery guy is always on time</h3>
              </div>
              <div className="deliveryInfo-H">
                <img
                  src={illustration2}
                  alt=""
                  className="secondImg-H
"
                />
                <h3>He works very hard</h3>
              </div>
              <div className="deliveryInfo-H">
                <img src={illustration3} alt="" className="thirdImg-H" />
                <h3>He is friendly and social</h3>
              </div>
            </div>
          </div>
          <Foods />
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default Home;
