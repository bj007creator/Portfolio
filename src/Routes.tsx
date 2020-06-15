import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import DoneProjects from './pages/DoneProjects';
import OfferServices from './pages/OfferServices';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={ Home } path="/" exact/>
            <Route component={ CreatePoint } path="/create-point"/>
            <Route component={ DoneProjects } path="/done-projects"/>
            <Route component={ OfferServices } path="/offer-services"/>
        </BrowserRouter>
    );
}
export default Routes;
