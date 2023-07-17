import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './css/style.css';
import './font/stylesheet.css';
import {AppRoutes} from "./routes";


function Menu (props){
    return(
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

createRoot(document.getElementById('root')).render(<Menu />);

