import React from "react";
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
import App from "./App";
import Notfound from "./Notfound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/> 
            {/* todo: <Route path="/country/:countrySlug" component={CountryGraph}> */}
            <Route component={Notfound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;

