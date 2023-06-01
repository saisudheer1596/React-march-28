import React from 'react';
import Categories2 from './Categories2';
import Carousel2 from './Carousel2';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate=useNavigate();
  const func1 = function () {
    navigate('/employeetable');
  }
  const func2 = function () {
    navigate('/productlist');
  }
  return (
    <div>
      <Categories2 />
      <Carousel2 />
      <button onClick={func1} className='btn btn-primary'>EmployeeTable</button>
      <br />
      <button onClick={func2} className='btn btn-secondary'>productlist</button>
    </div>
  );
}

export default Home;
