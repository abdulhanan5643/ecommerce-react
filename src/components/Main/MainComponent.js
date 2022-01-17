import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/HeaderComponent";
import About from "../About/AboutComponent";
import Contact from "../Contact/ContactComponent";
import Categories from "../Categories/CategoriesComponent";
import Footer from "../Footer/FooterComponent";
import Home from "../Home/HomeComponent";
import Search from "../Search/SearchComponent";
import Wishlist from "../Wishlist/WishlistComponent";
import Login from "../Login/LoginComponent";
import Cart from '../Cart/CartComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            cartProducts: []
        };
    }
    render() {
        const addToCart = (product) => {
            this.setState({ cartProducts: [...this.state.cartProducts, product] })
        }
        window.localStorage.setItem("cartProducts", JSON.stringify(this.state.cartProducts))
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={() => (<Home addToCart={addToCart} products={this.props.products} />)} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/search" component={Search} />
                    <Route path="/wishlist" component={Wishlist} />
                    <Route path="/login" component={Login} />
                    <Route path="/cart" component={() => (<Cart cartProducts={this.state.cartProducts} />)} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;