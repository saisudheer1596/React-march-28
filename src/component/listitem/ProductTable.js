import React from 'react';
import product from './Product.json'

export default function ProductTable() {
  return <>
  <hr />
   <h2 className='text-center'> Product List</h2>

   <table className='table table-bordered table-striped'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating.rate</th>
            <th>Image</th>
        </tr>
    </thead>
    <tbody>
        {product.map((product)=>{
            return <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td style={product.rating.rate>4 ? {color:"green"}:{color:"red"}}>{product.rating.rate}</td>
                <td className='image_1'><a href='#'><img src={product.image} width='100' height='100' /></a></td>
            </tr>
        })}

    </tbody>
   </table>
  </>
}


