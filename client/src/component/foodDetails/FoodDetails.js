import React from "react";
import "./FoodDetails.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProduct } from "../../redux/cartSlice";

const FoodDetails = () => {
  const [foodDetails, setFoodsDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);
  console.log(products);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const res = await fetch(`http://localhost:5000/product/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setFoodsDetails(data);
    };
    fetchFoodDetails();
  }, [id]);

  const changeQuantity = (command) => {
    if (command === "dec") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };
  return (
    <div className={"container-fd"}>
      <div className={"wrapper-fd"}>
        <div className={"left-fd"}>
          <img src={`http://localhost:5000/images/${foodDetails?.img}`} />
        </div>
        <div className={"right-fd"}>
          <h2 className={"title-fd"}>{foodDetails?.title}</h2>
          <div className={"price-fd"}>
            Price: <span>$</span> {foodDetails?.price}
          </div>
          <div className={"quantity-fd"}>
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity("dec")}
            >
              -
            </button>
            <span className={"quantityNumber-fd"}>{quantity}</span>
            <button onClick={() => changeQuantity("inc")}>+</button>
          </div>
          <div className={"category-fd"}>
            <h3>Category: </h3>
            <span className={"categoryName-fd"}>{foodDetails?.category}</span>
          </div>
          <div className={"productDesc-fd"}>
            <div>Description: </div>
            <p>
              {foodDetails?.desc?.length > 50
                ? `${foodDetails?.desc}`.slice(0, 50)
                : foodDetails?.desc}
            </p>
          </div>
          <button onClick={addToCart} className={"addToCart-fd"}>
            Add To Cart <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
