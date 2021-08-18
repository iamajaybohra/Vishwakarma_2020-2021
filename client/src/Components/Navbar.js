import React from 'react';

import '../css/navbar.css'


const Navbar = () => {
    return(
        <>
            <div className = "Navbar">
                <div className = "Content">
                    <a href = "http://localhost:3000/">Home</a>
                </div>
                <div className = "Content">
                    <a href = "http://localhost:3000/About">About Corona</a>
                </div>
                <div className = "Content">
                    <a href = "http://localhost:3000/IvsC">India Fights Corona</a>
                </div>
                <div className = "Content">
                    <a href = "http://localhost:3000/Vaccine">Get Vaccine</a>
                </div>
                <div className = "Content">
                    <a href = "http://localhost:3000/Contact">Contact</a>
                </div>
            </div>
        </>
    )
}
export default Navbar;