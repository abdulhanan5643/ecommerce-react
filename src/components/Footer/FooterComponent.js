import React from "react";
import {Link} from "react-router-dom";
import './footer.css'

function Footer() {
    return (
        <div className="footer text-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2 mt-5">
                        <h5>Links</h5>
                        <ul className="list-unstyled text-decoration-none">
                            <li className="footer-link"><Link to="/home">Home</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5 mt-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>
                            HONG KONG<br/>
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br/>
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br/>
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                            confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center text-white mt-5">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i
                                className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook"
                               href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-facebook"
                               href="https://www.instagram.com/?hl=en="><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-auto">
                        <p>© Copyright 2018 Ecommerce Website</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;