import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AdminPage from './routes/AdminPage.js';
import AuthPage from './routes/AuthPage.js';
import {Route} from 'react-router-dom';

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>123</h1>
                <Route path ="/admin" component = {AdminPage}/>
                <Route path ="/auth" component = {AuthPage}/>
            </div>
        )
    }
}

export default Root