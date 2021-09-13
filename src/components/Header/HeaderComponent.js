import React, {Component} from "react";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from "reactstrap";
import {NavLink} from 'react-router-dom';
import './header.css'

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isSelected: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    selected() {
        this.setState({
            isSelected: !this.state.isSelected
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row d-flex mt-2">
                        <div className="col-md-2 col-3 justify-content-end">
                            <p>ENGLISH</p>
                        </div>
                        <div className="col-md-2 col-2 justify-content-center">
                            <p>PKR</p>
                        </div>
                        <div className="col-md-4 col-7">
                            <p><i className="fa fa-phone fa-lg"></i> Call Us 090078601</p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h6><i className="fa fa-shopping-cart"></i> Free delivery on order over <span className="text-danger">PKR 2000</span></h6>
                        </div>
                    </div>

                </div>
                <Navbar className="my-navbar" dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/"><img src={require('../../shared/images/logo.png').default} height="50" width="50" alt='Ecommerce Website' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" exact={true} to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" exact={true} to='/categories'>Categories</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" exact={true} to='/about'>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" exact={true} to='/contact'>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;