import React from 'react'
import Categories from "./Categories2.json";
import Category2 from "./Category2";

export default function Categories2() {
  return (
    <div className='container'>
        <div className='row'>
            {Categories.map((categoryObj)=>{
                return <Category2 categoryObj={categoryObj} />;
            })}
        </div>
    </div>
  );
 }