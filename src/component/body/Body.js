import React from "react";
import "./Body.css";
import ListDemo1 from "../listitem/ListDemo1";
import ListDemo2 from "../listitem/ListDemo2";
import UserList from "../listitem/UserList";
import ProductTable from "../listitem/ProductTable";
import EmployeeTable from "../listitem/EmployeeTable"
import ProductCard from "../listitem/ProductCard";
import ProductList from "../listitem/ProductList";
import EmployeeCrud from "../employee crud/EmployeeCrud";
import EmployeeCrud1 from "../employee crud/EmployeeCrud1";
import EmployeeCrud2 from "../http/EmployeeCurd";
import {Route, Routes  } from "react-router-dom";
import Home from "../routing/Home";
import AboutUs from "../routing/AboutUs";
import ContactUs from "../routing/ContactUs";
import NotFound from "../routing/NotFound";
import ProductDetails from "../routing/ProductDetails";
import Login from "../navbar/Login";



export default function Body() {
    return (
        <div className="body">
            {/*<div className="body"> This is my body component</div>*/}
            {/*<ListDemo1 />
            <ListDemo2 />
            <EmployeeTable />    
            <UserList />
            <ProductTable />
            <ProductList />
            <EmployeeCrud />
            <EmployeeCrud2 />
        <ProductCard />
        <EmployeeCrud1 />*/}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/aboutus" element={<AboutUs />} />
                <Route exact path="/contactus" element={<ContactUs />} />
                <Route exact path="/productcard" element={<ProductCard />} />
                <Route exact path="/productdetails/:id" element={<ProductDetails />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} /> (No Match Route)
            </Routes>
        </div>

    )
}