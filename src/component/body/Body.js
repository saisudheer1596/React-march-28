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
import { Route, Routes } from "react-router-dom";
import Home from "../routing/Home";
import AboutUs from "../routing/AboutUs";
import ContactUs from "../routing/ContactUs";
import NotFound from "../routing/NotFound";
import ProductDetails from "../routing/ProductDetails";
import Login from "../navbar/Login";
import Navbar from "../navbar/Navbar";
import Swal from "sweetalert2";
import { useState } from "react";



export default function Body() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        Swal.fire({
            title: 'Logout',
            text: 'Are you sure you want to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Logout',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                setIsLoggedIn(false);
                Swal.fire('Logged out!', '', 'success');
            }
        });
    };
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
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/aboutus" element={<AboutUs />} />
                <Route exact path="/contactus" element={<ContactUs />} />
                <Route exact path="/productcard" element={<ProductCard />} />
                <Route exact path="/productdetails/:id" element={<ProductDetails />} />
                <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
                <Route exact path="/employeetable" element={<EmployeeTable />} />
                <Route exact path="/productlist" element={<ProductList />} />
                <Route path="*" element={<NotFound />} /> (No Match Route)
            </Routes>
        </div>

    )
}