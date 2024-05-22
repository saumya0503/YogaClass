import { useState } from 'react'
import '../Css/Footer.css'
const Footer = () => {
  return (
    <>
<footer id='contact' className="group-9">
    <div className="background-8">
      <div className="footer group">
        <div className="col-1">
          <p className="title-19">Title Here</p>
          <p className="body-text-18">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
            dignissim enim.
          </p>
        </div>
        <div className="col-2-2">
          <p className="title-20">About</p>
          <p className="body-text-19">
            History
            <br />
            Our Team
            <br />
            Brand Guidelines
            <br />
            Terms &amp; Condition
            <br />
            Privacy Policy
          </p>
        </div>
        <div className="col-3-2">
          <p className="title-21">Services</p>
          <p className="body-text-20">
            How to Order
            <br />
            Our Product
            <br />
            Order Status
            <br />
            Promo
            <br />
            Payment Method
          </p>
        </div>
        <div className="col-4-2">
          <p className="title-22">Follow</p>
          <div className="row-2 group">
            <div className="social-media">
              <div className="icon">
                <img className="facebook" src="images/facebook.png" alt="" />
                <img className="twitter" src="images/twitter.png" alt="" />
                <img className="instagram" src="images/instagram.png" alt="" />
                <img className="whatsapp" src="images/whatsapp.png" alt="" />
              </div>
            </div>
            <p className="body-text-21">
              Facebook
              <br />
              Twitter
              <br />
              Instagram
              <br />
              Whatsaap
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>

    </>
  )
}

export default Footer
