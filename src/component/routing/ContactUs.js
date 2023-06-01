import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ContactUs() {
  const navigate =useNavigate();


  const doSomethingAndNavigate = function () {
    console.log("I am Doing Something......");
    navigate("/ProductCard");
  };
  return (
    <>
      <h2 className='text-center'> This is Contact Us Page</h2>
      <a href='/ProductCard'>Go To Product Card</a>
      <br />
      <Link to="/ProductCard"> Go To Product Card without reload</Link>
      <br />
      <button onClick={doSomethingAndNavigate}>
        Do Something & then Go to Product Card page
      </button>
      <br />
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <button onClick={()=>navigate(1)}>Go next</button>
    </>
  );
}
