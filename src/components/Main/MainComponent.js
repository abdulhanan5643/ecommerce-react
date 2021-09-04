import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "../Header/HeaderComponent";
import About from "../About/AboutComponent";
import Contact from "../Contact/ContactComponent";
import Categories from "../Categories/CategoriesComponent";
import Footer from "../Footer/FooterComponent";
import Home from "../Home/HomeComponent";


class Main extends Component {
    constructor() {
        super();
        this.state = {
            selected: true
        };
    }
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/categories" component={Categories}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;