import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Products from './Product';

const App = () => {

    const [state, setState] = useState([]);

    const getApiAxios = () => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick`)
            .then(response => {
                setState(response.data);
            })
    }

    const clearState = () => {
        setState([]);
    }

    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/Product">Product</Link>

            <Switch>

                <Route path="/Product">
                    <Products products={state} getApi={getApiAxios} clearState={clearState} />
                </Route>

                <Route exact path="/">
                    <p>Welcome to Ken's Cosmetics! We sell the best cosmetics in the world!</p>
                    <img src="https://i2.wp.com/exquisitemag.com/wp-content/uploads/2020/06/kylie.jpg" height = "300" /> 
                </Route>
            </Switch>
        </Router>
    );
};

export default App;