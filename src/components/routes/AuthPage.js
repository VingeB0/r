import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../auth/SignInForm.js';
import SignUpForm from '../auth/SignUpForm.js';
import {Route, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp, signIn, moduleName} from '../../ducks/auth';
import Loader from '../common/Loader';

class AuthPage extends Component {
    static propTypes = {

    };

    handleSignUp = ({email, password}) => {
        this.props.signUp(email, password)
    };

    handleSignIn = ({email, password}) => {
        this.props.signIn(email, password)
    };

    render() {
        const {loading} = this.props;
        return (
            <div>
                <h1>Auth Page</h1>
                <NavLink to = "/auth/signin" activeStyle = {{color: 'red'}}>sign in</NavLink>
                <NavLink to = "/auth/signup" activeStyle = {{color: 'red'}}>sign up</NavLink>
                <Route path ="/auth/signin" render = {() => <SignInForm onSubmit = {this.handleSignIn}/>}/>
                <Route path ="/auth/signup" render = {() => <SignUpForm onSubmit = {this.handleSignUp}/>}/>
                {loading && <Loader />}
            </div>
        )
    }
}

export default connect(state => ({
    loading: state[moduleName].loading
}),{signUp, signIn})(AuthPage)