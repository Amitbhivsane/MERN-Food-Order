import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeProduct } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  const handleRemoveProduct = (id) => {
    console.log(id);
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = () => {
    if (products.length > 0) {
      navigate("/checkout");
    }
  };
  return (
    <div className={"container-c"}>
      <div className={"wrapper-c"}>
        <div className={"left-c"}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className={"product-c"}>
                <div
                  onClick={() => handleRemoveProduct(product._id)}
                  className={"closeBtn-c"}
                >
                  <AiOutlineClose />
                </div>
                <img
                  src={`http://localhost:5000/images/${product.img}`}
                  className={"img-c"}
                />
                <div className={"productData-c"}>
                  <h3 className={"title-c"}>{product.title}</h3>
                  <div className={"productAndQuantity-c"}>
                    <span className={"quantity-c"}>{product.quantity} x </span>
                    <span className={"price-c"}>
                      <span>$</span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className={"noProducts-c"}>
              No products in the cart. Go shopping!
            </h1>
          )}
        </div>
        <div className={"right-c"}>
          <div className={"totalProductMsg-c"}>
            Total products: {products.length}
          </div>
          <div className={"subtotalCheckoutBtns-c"}>
            <span className={"subtotal-c"}>Subtotal: ${totalPrice}</span>
            <span
              onClick={handleOrder}
              disabled={products.length === 0}
              className={"orderNowBtn-c"}
            >
              Order now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
