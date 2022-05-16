import React from 'react';
import '../css/AppBar.css';
import {Link} from "react-router-dom";
import logo1 from "../images/logo2.png"

export default class AppBar extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light navbar">
                  <div className="container">
                    <img src={logo1} width="60px"/>
                    <div className="text-center h2 heading ma-0 pa-0" href="#">Smart Buy</div>
                    <a href="/">Home</a>
                    <a href="/contact-us">Contact Us</a>
                    <a href="/products">Products</a>
                    <a href="/about-us">About Us</a>
                    <a href="/login">Login</a>
                  </div>
                </nav>
                
            </div>
        );
    }
};