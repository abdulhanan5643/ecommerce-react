import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Main from "./components/Main/MainComponent";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>
    );
}

export default App;
