import React from 'react';
import CategoriesArr from "./Categories.json";
import Category1 from './Category1';

export default function Categories() {
  return (
    <div className='container'>
        <div className='row'>
            {CategoriesArr.map((categoryObj)=>{
                return <Category1 categoryObj={categoryObj} />;
            })}
        </div>
    </div>
  )
}
