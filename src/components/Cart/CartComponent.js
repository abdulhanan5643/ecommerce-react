import React,{useState,useEffect} from "react";

const Cart=(props)=>{
    const [cartProducts,setCartProducts]=useState();
    useEffect(() => {
        setCartProducts(JSON.parse(window.localStorage.getItem("cartProducts")))
    }, [])
    console.log("Cart props",cartProducts)
    return(
        <>
        <div>Cart</div>
        </>
    );
}

export default Cart;