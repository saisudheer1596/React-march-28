import React, { Component } from 'react';
import propTypes from "prop-types";
import "./Category.css";

export default class Category extends Component {
  render() {
    let {id, image, title }= this .props;
    return(
        <div className='col-sm-1 category'>
            <img key={"img" + id} src={image} alt='category'/>
            <span
              key={"tle" + id}
              className='d-block text-center text-primary fw-bold'
            >
              {title}
            </span>
        </div>
    );
  }
}
    
Category.propTypes = {
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    id: propTypes.number,
};

Category.defaultProps = {
    image:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1350e22cff9663e7.png?q=100",
    title: "Top Offers",
    id:0,
};