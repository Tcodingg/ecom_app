import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Cart() {
  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector((state) => state.cart);

  let items_price = 0;
  let items_tax = 0;
  let total_price = 0;

  useEffect(() => {
    cart.forEach((item) => {
      // counter += (item.price.slice(1)) * parseInt( item.qty).toFixed(2);

      items_price += item.price.slice(1) * item.qty;
      items_tax += item.price.slice(1) * item.qty * 0.13;
      total_price += items_price + items_tax;
    });
    setPrice(items_price.toFixed(2));
    setTax(items_tax.toFixed(2));
    setTotalPrice(total_price.toFixed(2));
  }, [cart, cart.length, cart.qty, price, tax]);

  useEffect(() => {
    // scroll to the top on reload
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cart section bd-container">
      <h2 className="section-title">Cart</h2>

      {cart.length <= 0 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RiShoppingCartLine className="empty_cart" />
        </div>
      )}
      <div className="cart_item_container bd-grid">
        {cart.map((item) => {
          return <CartItem key={item.id} id={item.id} item={item} />;
        })}
      </div>
      <div className="checkout">
        <h4 className="price">Price: ${price}</h4>
        <h4 className="tax"> Tax:${tax}</h4>
        <div className="border_line"></div>
        <h2 className="total">Total: ${totalPrice} </h2>

        <button className="checkout_btn">Checkout</button>
      </div>
    </section>
  );
}
