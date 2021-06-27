import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'
import Logo from '../images/mailLogo.png'


const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink className="navbar-brand ms-auto" to="/create">
                        <div className="d-flex">
                            <img src = {Logo} className = "px-3" alt = "Logo" height="30px" />
                            <h4>Send mail</h4>
                        </div>
                    </NavLink>
                    <NavLink className="navbar-brand ms-auto" to="/home">
                    <div className="d-flex">
                        <img src = {Logo} className = "px-3" alt = "Logo" height="30px" />
                        <h4>Homepage</h4>
                    </div>
                </NavLink>
                <NavLink className="navbar-brand ms-auto" to="/history">
                <div className="d-flex">
                    <img src = {Logo} className = "px-3" alt = "Logo" height="30px" />
                    <h4>History</h4>
                </div>
            </NavLink>
                     
                </div>
            </nav>
        </>
    )
}

export default Navbar
