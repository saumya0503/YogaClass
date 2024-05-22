import React from 'react'
import { useState } from 'react'
import '../Css/Div4.css'
const Div4 = ({ imageUrl, title, description }) => {
  return (

<>
  <div className="container8">
    <p className="p12">don't miss our update</p>
    <p className="p13">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum
      commodi consequuntur.
    </p>
    <form action="url">
      <input
        type="email"
        name="email"
        id="email"
        className="email"
        placeholder="Your Email"
      />
    </form>
    <button className="subscribe">Subscribe</button>
  </div>
  <div className="container9">
    <div className="col1">
      <p className="title">Title here</p>
      <p className="lorem">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
        tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
        maiores sequi cupiditate sint dolorum enim at accusamus provident
        voluptatem voluptas!
      </p>
    </div>
    <div className="col2">
      <p className="title1">About</p>
      <ul style={{ listStyle: "none" }}>
        <li>History</li>
        <li>Our Team</li>
        <li>Brand Guidelines</li>
        <li>Terms &amp; Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div className="col3">
      <p className="title2">Services</p>
      <ul style={{ listStyle: "none" }}>
        <li>How to Order</li>
        <li>Our Product</li>
        <li>Order Status</li>
        <li>Promo</li>
        <li>Payment Method</li>
      </ul>
    </div>
    <div className="col4">
      <p className="title3">Follow</p>
      <ul style={{ listStyle: "none" }}>
        <li>
          <i className="fa-brands fa-facebook" />
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <i className="fa-brands fa-twitter" />
          <a href="https://twitter.com">Twitter</a>
        </li>
        <li>
          <i className="fa-brands fa-instagram" />
          <a href="https://instagram.com">Instagram</a>
        </li>
        <li>
          <i className="fa-brands fa-whatsapp" />
          <a href="https://whatsapp.com">Whatsapp</a>
        </li>
      </ul>
    </div>
  </div>
</>

  );
};

export default Div4;
