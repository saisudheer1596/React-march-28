import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    Swal.fire({
      title: 'About Us',
      text: 'Welcome to our website!',
      icon: 'info',
    });
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <div 
        className="about-us"
      >
        Welcome to our website!
      </div>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <button onClick={()=>navigate(1)}>Go next</button>
    </div>
  )
};

export default AboutUs;
