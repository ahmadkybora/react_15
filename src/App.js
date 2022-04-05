import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';
import products from "./components/products";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/products" component={products}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;