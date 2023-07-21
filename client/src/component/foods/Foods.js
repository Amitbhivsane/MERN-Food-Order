import React from "react";
import "./Food.css";
import { Link } from "react-router-dom";
import { foodTypes } from "../../data/data";
const Foods = () => {
  return (
    <section id="foods" className="container-f">
      <div className="wrapper-f">
        <h4 className="subtitle-f">What we offer</h4>
        <h2 className="title-f">Best meals in the city</h2>
        <div className="foods-f">
          {foodTypes.map((foodType) => (
            <Link
              to={`/foods/${foodType.name}`}
              key={foodType.id}
              className="food-f"
            >
              <h4>{foodType.name}</h4>
              <div className="imgContainer-f">
                <img src={foodType.img} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
