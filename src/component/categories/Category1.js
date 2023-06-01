import React from 'react';
import "./Categories.css"

export default function Category1({categoryObj}) {
  return (
    <div className='col'>
        <div className='category text-center'>
            <img src={categoryObj.image} alt='image is not there' />
            <div>{categoryObj.title}</div>
        </div>
    </div>
  )
}
