import React, { useState, useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cart = (props) => {
    const [cartProducts, setCartProducts] = useState();
    const getlocalstoragevalues = () => {
        if (typeof window !== "undefined") {
            setCartProducts(JSON.parse(window?.localStorage?.getItem("cartProducts")))
        }
    }
    useEffect(() => {
        getlocalstoragevalues();
    }, [])
    console.log("Cart props", props)
    var cart;
    if (cartProducts) {
        cart = cartProducts.map((product) => {
            console.log(product);
            debugger
            return (
                <div className="col-12">
                    <Card>
                        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardText>{product.description}</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Your Cart</h3>
                    </div>
                </div>
                <div className="row">
                    {cart}
                </div>
            </div>
        </>
    );
}

export default Cart;