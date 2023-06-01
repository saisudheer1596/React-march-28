import React, { Component } from 'react';
import categories1 from "./Categories.json";
import Category from "./Category";

export default class Categories1 extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {categories1.map((category) => (
                        <Category
                            key={"ctg" + category.id}
                            image={category.image}
                            title={category.title}
                            id={category.id}
                        ></Category>
                    ))}
                    <Category></Category>
                </div>
            </div>
        );
    }
}
