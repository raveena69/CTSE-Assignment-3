    
import React from 'react';
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import {  Home,ContactUs} from "../Containers";

class BasicRouter extends React.Component{
    render(){
        return (
            <Router >
                <Route exact path='/' component={Home} />
                <Route  path='/contact-us' component={ContactUs} />
            </Router>
        )
    }
}

export default BasicRouter