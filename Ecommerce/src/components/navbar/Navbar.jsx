import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import SearchBar from "../search/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }
    
    // CartItems
    const cartItems = useSelector((state) => state.cart);

    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-2">
            {/* Home Page*/}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Products available */}
              <li>
                <Link to={'/allproduct'}>All Products</Link>
            </li>


            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'}>Login/Signup</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>

        </ul>
    )
    return (
        /*<div>
            Navigationbar
        </div>*/
        <nav className="bg-blue-800 sticky top-0">
                {/* main  */}
                <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                    {/* left  */}
                    <div className="left py-3 lg:py-0">
                        <Link to={'/'}>
                            <h2 className=" font-bold text-white text-2xl text-center">Ecommerce-V1</h2>
                        </Link>
                    </div>
                    {/* Search Bar  */}
                    <SearchBar />
                    {/* right  */}
                    <div className="right flex justify-center mb-4 lg:mb-0">
                        {navList}
                    </div>
                    
                </div>
            </nav>
    );
}

export default Navbar;