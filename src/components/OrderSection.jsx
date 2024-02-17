import React, { useState } from "react";
import order from "../assets/images/order-img.jpg";
import { useNavigate } from "react-router-dom";

const OrderSection = () => {
  const navgate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your Order has been placed successfully.");
    navgate("/")
  };

  return (
    <>

      <section className="order" id="order">
        <h1 className="heading">
          <span>Order</span> now
        </h1>
        <div className="row">
          <div className="image">
            <img src={order} alt="" />
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="text" placeholder="name" required />
              <input type="email" placeholder="email" />
            </div>

            <div className="inputBox">
              <input type="number" placeholder="number" required />
              <input type="text" placeholder="food name" />
            </div>

            <textarea
              placeholder="address"
              name=""
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>


            <button
              type="submit"
              className="btn"


            >
              Order Now
            </button>{" "}

          </form>
        </div>
      </section>
    </>
  );
};

export default OrderSection;
