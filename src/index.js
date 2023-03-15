import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import Home from "./Home";
import ICT from "./components/ICT";
import PSD from "./components/PSD";

const App = () => {


    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ict" element={<ICT />} />
                <Route path="/psd" element={<PSD />} />
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(
        <App />
    , document.getElementById('root'));
