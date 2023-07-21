import React from "react";
import "./CheckOut.css";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const { products } = useSelector((state) => state.cart);

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  return (
    <div className={"container-ch"}>
      <div className={"wrapper-ch"}>
        <h2>Your order is successful</h2>
        <p>Expect it in 1 hour</p>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default CheckOut;
