import React from 'react'
import { useState } from 'react'
import '../Css/Div3.css'

const Card = ({ title, price, imgSrc, bodyText, buttonLabel, cardClass, titleClass, priceClass, imgClass, bodyTextClass, buttonClass }) => {
  return (
    <div className={cardClass}>
      <p className={titleClass}>{title}</p>
      <p className={priceClass}>{price}</p>
      <img className={imgClass} src={imgSrc} alt="" />
      <p className={bodyTextClass}>{bodyText}</p>
      <button className={buttonClass}>{buttonLabel}</button>
    </div>
  );
};

const Div3 = () => {

  const cardData = [
    {
      title: "NEWBIE CLASS",
      price: "$00.00",
      imgSrc: "images/vector_smart_object.png",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonLabel: "REGISTER NOW",
      cardClass: "card-4",
      titleClass: "title-copy-2",
      priceClass: "title-9",
      imgClass: "vector-smart-object",
      bodyTextClass: "body-text-9",
      buttonClass: "button-6"
    },
    {
      title: "ADVANCE CLASS",
      price: "$00.00",
      imgSrc: "images/vector_smart_object.png",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonLabel: "REGISTER NOW",
      cardClass: "card-5",
      titleClass: "title-copy",
      priceClass: "title-10",
      imgClass: "vector-smart-object-2",
      bodyTextClass: "body-text-10",
      buttonClass: "button-6"
    },
    {
      title: "EXPERT CLASS",
      price: "$00.00",
      imgSrc: "images/vector_smart_object.png",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonLabel: "REGISTER NOW",
      cardClass: "card-6",
      titleClass: "title-11",
      priceClass: "title-12",
      imgClass: "vector-smart-object-3",
      bodyTextClass: "body-text-11",
      buttonClass: "button-6"
    }
  ];

  const [email, setEmail] = useState('');
  
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior (preventing page reload)
    event.preventDefault();
    // Reload the page
    window.location.reload();
  };


  return (
    <>
<div className="main-content-wrapper">
    <div className="background-3">
      <div className="text-10">
        <p className="title-6">DONT MISS OUR UPDATE</p>
        <p className="body-text-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form">
      <div className="shape-holder-3">
        <label htmlFor="email" className={`text-11 ${email ? 'hide' : ''}`}></label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={handleChange} 
          required 
          style={{ width: '300px' }} // Adjust width here
        />
      </div>
      <button type="submit" className="button-3">Subscribe</button>
    </form>
    </div>
    <div className="image">
      <div className="shape-holder-4">
        <img className="mask-4" src="images/mask.png" alt="" />
      </div>
      <div className="text-12">
        <p className="title-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <p className="body-text-7">TRAINER DEVANDRA</p>
      </div>
    </div>
    <div id='services' className="background-4">
      <div id='services' className="text-13">
        <p className="title-8">Pricing</p>
        <p className="body-text-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
      <div className="row match-height group">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          price={card.price}
          imgSrc={card.imgSrc}
          bodyText={card.bodyText}
          buttonLabel={card.buttonLabel}
          cardClass={card.cardClass}
          titleClass={card.titleClass}
          priceClass={card.priceClass}
          imgClass={card.imgClass}
          bodyTextClass={card.bodyTextClass}
          buttonClass={card.buttonClass}
        />
      ))}
    </div>
    </div>
    <div className="group-5">
      <div className="background-5" />
      <img className="shape-6" src="images/shape_11.png" alt="" />
      <div className="content group">
        <img
          className="place-your-image-here-double-click-to-edit"
          src="images/place_your_image_here_dou_3.png"
          alt=""
        />
        <div className="col">
          <div className="text-17">
            <p className="title-13">
              NEW
              <br />
              EXPERIENCE
            </p>
            <p className="body-text-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
          </div>
          <button className="button-7">READ MORE</button>

        </div>
      </div>
    </div>
    <div className="background-6">
      <div className="content-2 group">
        <div className="col-4">
          <div className="text-19">
            <p className="title-14">
              BEST
              <br />
              INSTRUCTOR
            </p>
            <p className="body-text-13">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
          </div>
          <button className="button-8">READ MORE</button>

        </div>
        <img
          className="place-your-image-here-double-click-to-edit-2"
          src="images/place_your_image_here_dou_4.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="group-3">
      <div className="background-7">
        <div className="shape-7" />
        <div className="shape-holder-5">
          <div className="shape-holder-6">
            <div className="card-7">
              <p className="title-15">123</p>
              <p className="body-text-14">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="design-3 group">
        <div className="col-2">
          <img className="shape-8" src="images/shape_19.png" alt="" />
          <img className="shape-9" src="images/shape_18.png" alt="" />
        </div>
        <img className="shape-10" src="images/shape_21.png" alt="" />
        <img className="shape-11" src="images/shape_23.png" alt="" />
        <div className="col-5">
          <img className="shape-12" src="images/shape_20.png" alt="" />
          <img className="shape-13" src="images/shape_22.png" alt="" />
        </div>
      </div>
      <div className="card-8 group">
        <p className="title-16">123</p>
        <p className="body-text-15">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="card-9">
        <p className="title-17">123</p>
        <p className="body-text-16">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="text-21">
        <p className="title-18">OUR STATS</p>
        <p className="body-text-17">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
    </div>
  </div>


    </>
  )
}

export default Div3
