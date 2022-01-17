import './App.css';
import React, { useState,useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/MainComponent";
import PRODUCTS from "./shared/data";

function App() {
    const [products, setProducts] = useState();
    useEffect(() => {
        setProducts(PRODUCTS);
    }, [])
    return (
        <BrowserRouter>
            <div className="App">
                <Main products={products} />
            </div>
        </BrowserRouter>
    );
}

export default App;
