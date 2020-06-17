import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import DoneProjects from './pages/DoneProjects';
import OfferServices from './pages/OfferServices';
import Contacts from './pages/Contacts';
import ThemeToggleable from '../src/utils/ThemeToggleable';

const Routes : React.FC<ThemeToggleable>  = (propsUpstream) => {
    return (
        <BrowserRouter>
            <Route render={ 
                (props) => ( 
                    <Home {...props} toggleTheme={propsUpstream.toggleTheme} /> 
                ) 
            } path="/" exact/>
            <Route component={ CreatePoint } path="/create-point"/>
            <Route render={ 
                (props) => ( 
                    <DoneProjects {...props} toggleTheme={propsUpstream.toggleTheme}/>
                )
            } path="/done-projects"/>
            <Route render={ 
                (props) => (
                    <OfferServices {...props} toggleTheme={propsUpstream.toggleTheme}/>
                )
            } path="/offer-services"/>
            <Route render={ 
                (props) => (
                    <Contacts {...props} toggleTheme={propsUpstream.toggleTheme}/>
                ) 
            } path="/contacts"/>
        </BrowserRouter>
    );
}
export default Routes;
