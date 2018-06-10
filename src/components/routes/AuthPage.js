import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../auth/SigninForm.js';

class AuthPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <SignInForm/>
            </div>
        )
    }
}

export default AuthPage