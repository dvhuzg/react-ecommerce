import React from "react";
import "./Cart.css";
const Cart = ({ cartItem, addToCart, decreaseQty }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <div className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <div className="no-items product">No product added in Cart</div>
            )}
            {cartItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button>
                        <i className="fa -solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <div className="fa fa-plus"></div>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <div className="fa fa-minus"></div>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total price:</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
