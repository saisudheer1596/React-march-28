import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div>
      <h2> This is AboutUs Page</h2>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <button onClick={()=>navigate(1)}>Go next</button>
    </div>
  )
}
