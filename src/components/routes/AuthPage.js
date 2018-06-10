import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../auth/SignInForm.js';
import SignUpForm from '../auth/SignUpForm.js';
import {Route, NavLink} from 'react-router-dom';

class AuthPage extends Component {
    static propTypes = {

    };

    handleSignUp = (values) => {
        console.log('__sign-in__', values);
    };

    handleSignIn = (values) => {
        console.log('__sign-up__', values);
    };

    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <NavLink to = "/auth/signin" activeStyle = {{color: 'red'}}>sign in</NavLink>
                <NavLink to = "/auth/signup" activeStyle = {{color: 'red'}}>sign up</NavLink>
                <Route path ="/auth/signin" render = {() => <SignInForm onSubmit = {this.handleSignIn}/>}/>
                <Route path ="/auth/signup" render = {() => <SignUpForm onSubmit = {this.handleSignUp}/>}/>
            </div>
        )
    }
}

export default AuthPage