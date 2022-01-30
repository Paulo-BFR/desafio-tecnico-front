import React from 'react';
import ReactDOM from "react-dom";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/home'
import Cadastro from './pages/cadastro';
import Login from './pages/login';



function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/home' exact component={Home}></Route>
                <Route path='/cadastro' exact component={Cadastro}></Route>
            </Routes>
        </BrowserRouter>
    )
};
ReactDOM.render(<Router />, document.getElementById("root"));
export default Router;