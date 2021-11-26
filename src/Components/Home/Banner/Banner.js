import React from "react";
import Bounce from 'react-reveal/Bounce';
import './Banner.css'
const Banner = () => {
  return (
    <div className='gg' style={{
          backgroundImage:
            "url('https://www.apple.com/v/iphone/home/bc/images/overview/retail/why_apple__el2f318k348y_large.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          boxShadow: '1px 1px 5px gray',
          padding: '100px 0px'}}>
      <Bounce>   
      <h2 style={{color: '#10273F'}}  className='fw-bold'>Why Our Shop is The Best <br /> Place to Buy Smart Phone.</h2>
      </Bounce>
      <Bounce>
      <p className='mt-2'>You can choose a payment option that works for <br /> you, pay less with a trade‑in, connect your new <br /> iPhone to your carrier, and get set up quickly.<br />
      You can also chat with a Specialist anytime.</p>
      </Bounce>
      <p style={{color: '#DA2B7D'}} className='fw-bold mt-4'>Scroll down for learn more &#8595;</p>
    </div>
  );
};

export default Banner;
