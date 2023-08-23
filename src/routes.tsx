import React from "react";
import { Route, Routes} from "react-router-dom";
import { Application } from "./pages/application";
import {Home} from "./pages/home";
import {LoanPage} from "./pages/loanPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/loanPage" element={<LoanPage />} />
            <Route path="/application" element={<Application />} />
        </Routes>
    );
}