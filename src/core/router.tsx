import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Usuario from '../pages/usuario/usuario';

const Routes = () => {
    return (
        <BrowserRouter>
            <div className="content-wrapper">
                <Route component={Usuario} path="/" />
            </div>
        </BrowserRouter>
    )
}

export default Routes;