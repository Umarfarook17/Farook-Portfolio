import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className="navbar navbar-expand-lg px-5 pt-3 ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand text-light" href="/">Umar <span className='text-success'>Farook</span></a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto me-3 mt-2 mt-lg-0">
                        <li className="nav-item me-3 active">
                            <a className="nav-link activate" href="#home">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-light" href="#about">About</a>
                        </li>
                            <li className="nav-item me-3">
                                <a className="nav-link text-light" href="#skills">Skills</a>
                            </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-light" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-light" href="#contact">Contact</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar