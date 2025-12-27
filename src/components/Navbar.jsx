import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="left-nav"></div>
            <div className="text-accent middle-nav flex gap-4">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="right-nav flex gap-3">
                <img src={user} alt="user-logo" />
                <button className='btn btn-primary px-8 py-1'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;