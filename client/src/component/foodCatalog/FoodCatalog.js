import React from "react";
import "./FoodCatalog.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndpoint = location.pathname.split("/")[2];
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async () => {
      const res = await fetch(
        `http://localhost:5000/product?category=${foodEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setFilteredFoods(data);
    };
    fetchFoodType();
  }, [foodEndpoint]);

  return (
    <div className={"container-fc"}>
      <div className={"wrapper-fc"}>
        {filteredFoods?.length !== 0 && (
          <h2 className={"title-fc"}>The best {foodEndpoint} in the region</h2>
        )}
        <div className={"foods-fc"}>
          {filteredFoods.length !== 0 ? (
            filteredFoods.map((f) => (
              <Link to={`/food/${f._id}`} key={f._id} className={"food-fc"}>
                <div className={"imgContainer-fc"}>
                  <img
                    src={`http://localhost:5000/images/${f?.img}`}
                    className={"foodImg-fc"}
                  />
                </div>
                <div className={"foodDetails-fc"}>
                  <h4 className={"foodTitle-fc"}>{f?.title}</h4>
                  <span className={"price-fc"}>
                    <span>$</span> {f?.price}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <h1 className={"noQuantity-fc"}>No {foodEndpoint} right now</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCatalog;
