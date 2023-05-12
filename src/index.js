import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import Institucional from "./Components/Institutional/Institutional";
import Product from "./Components/Product/Product";
import Marketing from "./Components/Marketing/Marketing";
import NucleoIcons from "./Components/views/NucleoIcons";
import PolicyAndPrivacy from "./Components/PolicyAndPrivacy/PolicyAndPrivacy";
import "./index.css";
import TopNavbar from "./Components/Navbars/TopNavbar";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        {/* <NavBars /> */}
        <TopNavbar />
        <Switch>
            <Route path="/index" render={(props) => <HomePage {...props} />} />
            <Route path="/institucional" render={(props) => <Institucional {...props} />} />
            <Route path="/produto" render={(props) => <Product {...props} />} />
            <Route path="/mercado" render={(props) => <Marketing {...props} />} />
            <Route path="/icons" render={(props) => <NucleoIcons {...props} />} />
            <Route path="/politica-privacidade" render={(props) => <PolicyAndPrivacy {...props} />} />
            <Redirect to="/index" />
        </Switch>
        <Footer />
    </BrowserRouter>
);
