import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AdminPage from './routes/AdminPage.js';
import AuthPage from './routes/AuthPage.js';
import PersonPage from './routes/PersonPage.js'
import {Route} from 'react-router-dom';
import ProtectedRoute from './common/ProtectedRoute'

import EventsPage from './routes/EventsPage'

import {connect} from 'react-redux'
import {moduleName, signOut} from '../ducks/auth'
import {Link} from 'react-router-dom'

class Root extends Component {
    static propTypes = {

    };

    render() {
        const {signOut, signedIn} = this.props
        const btn = signedIn
            ? <button onClick = {signOut}>Sign out</button>
            : <Link to="/auth/signin">sign in</Link>

        return (
            <div>
                {btn}
                <h1>123</h1>
                <ProtectedRoute path ="/admin" component = {AdminPage}/>
                <ProtectedRoute path="/people" component={PersonPage}/>
                <ProtectedRoute path="/events" component={EventsPage}/>
                <Route path ="/auth" component = {AuthPage}/>
            </div>
        )
    }
}

export default connect(state => ({
    signedIn: !!state[moduleName].user
}), {signOut}, null, {pure: false})(Root)