import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client"
import "./sass/global.sass";
import "./font/stylesheet.sass";
import {AppRoutes} from "./routes";

function Menu (){
    return(
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

createRoot(document.getElementById("root")!).render(<Menu />);

