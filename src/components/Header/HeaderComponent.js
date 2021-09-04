import React, {Component} from "react";
import {Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import { NavLink } from 'react-router-dom';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isSelected:false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    selected(){
        this.setState({
            isSelected: !this.state.isSelected
        });
    }
    render() {
        return(
            <div>
                <Navbar className="my-navbar" dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">Ecommerce Website</NavbarBrand>
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
                <Jumbotron className="my-jumbotron text-white">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ecommerce Website</h1>
                                <p>World's best online shopping website!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;