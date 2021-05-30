import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './NavMenu.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
const NavMenu = () => {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    return (
        <div>
            <Navbar
                fixed="top"
                variant="light"
                expand="md"
                className=" animate-navbar nav-theme justify-content-between"
            >
                <div className="container">
                    <div>
                        <Navbar.Brand style={{ color: '#000', fontWeight: 700, fontSize:'1.5rem' }} href="#home">
                            Course Mania
                        </Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto ">
                                <Link className="nav-link mr-5" to="/">Home</Link>
                                <Link className="nav-link mr-5" to="#courses">Courses</Link>
                                <Link className="nav-link mr-5" to="/support">Support</Link>
                                <Link to="/cart">
                                    <div className="basket">
                                        <BsFillBagFill className="cart-icon" />
                                        <span>{totalQuantities}</span>
                                    </div>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default NavMenu;
