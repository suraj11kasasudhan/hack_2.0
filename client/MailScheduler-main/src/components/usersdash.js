import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'
import Logo from '../images/mailLogo.png'


const usersdash = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink className="navbar-brand ms-auto" to="/">
                        <div className="d-flex">
                            <img src = {Logo} className = "px-3" alt = "Logo" height="40px" />
                            <h4>Mail send</h4>
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
            </nav>
        </>
    )
}

export default usersdash
