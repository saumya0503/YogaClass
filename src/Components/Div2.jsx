import React from 'react'
import { useState } from 'react'
import '../Css/Div2.css'

const Card = ({ maskSrc, title, bodyText, cardClass, textClass, titleClass, bodyTextClass }) => {
  return (
    <div className={cardClass}>
      <img className="mask" src={maskSrc} alt="" />
      <div className={textClass}>
        <p className={titleClass}>{title}</p>
        <p className={bodyTextClass}>{bodyText}</p>
      </div>
    </div>
  );
};

const Div2 = () => {
  const cardData = [
    {
      maskSrc: "images/mask_2.png",
      title: "EXPERT CLASS",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardClass: "card group",
      textClass: "text-7",
      titleClass: "title-3",
      bodyTextClass: "body-text-3"
    },
    {
      maskSrc: "images/mask_3.png",
      title: "ADVANCED CLASS",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardClass: "card-2",
      textClass: "text-8",
      titleClass: "title-4",
      bodyTextClass: "body-text-4"
    },
    {
      maskSrc: "images/mask_4.png",
      title: "NEWBIE CLASS",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardClass: "card-3",
      textClass: "text-9",
      titleClass: "title-5",
      bodyTextClass: "body-text-5"
    }
  ];
  return (
    <>
<div className="background-2">
      <div id='about' className="text-6">
        <p className="title-2">CHOOSE CLASS</p>
        <p className="body-text-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
      <div className="wrapper-2">
      <div className="design-2 group">
        <img className="shape-3" src="images/shape_28.png" alt="" />
        <img className="shape-4" src="images/shape_29.png" alt="" />
        <img className="shape-5" src="images/shape_30.png" alt="" />
      </div>
      {cardData.map((card, index) => (
        <Card
          key={index}
          maskSrc={card.maskSrc}
          title={card.title}
          bodyText={card.bodyText}
          cardClass={card.cardClass}
          textClass={card.textClass}
          titleClass={card.titleClass}
          bodyTextClass={card.bodyTextClass}
        />
      ))}
    </div>
    </div>


    </>
  )
}

export default Div2
