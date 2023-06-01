import React from 'react';
import "./Category.css"

export default function Category2({categoryObj}) {
  return (
    <div className='col'>
        <div className='category text-center'>
            <img src={categoryObj.image} alt='image is not there' />
            <div>{categoryObj.title}</div>
        </div>
    </div>
  )
}
