/**
 * Created by isp on 11/9/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

import validateInput from '../utils/signUpValidator';

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
};

const signUpButtonStyle = {
    marginTop: '15px'
};

const signUpTitleStyle = {
    fontSize: '20px',
    fontFamily: 'Conv_Galano Grotesque DEMO Bold',
    background: 'linear-gradient(80deg, #EF4E7B,#A166AB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '10px 0 0 0'
};

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

const underlineStyle = {
    borderBottom: '2px solid #1098AD'
};

const colorStyle = {
    color: '#1098AD'
};

const checkbox = {
    margin: '10px 0 0 0',
    whiteSpace: 'nowrap',
    fontSize: '12px'
};

class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            identifier: '',
            email: '',
            password: '',
            retypePassword: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            /*this.props.login(this.state).then(
             (res) => this.context.router.push('/'),
             (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
             );*/
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, identifier, password, email, retypePassword, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div style={formStyle}>
                    <div style={signUpTitleStyle}>Sign Up</div>

                    <div><TextField
                        name="identifier"
                        floatingLabelText="Name"
                        floatingLabelStyle={{fontFamily: fontStyle}}
                        floatingLabelFocusStyle={colorStyle}
                        underlineFocusStyle={underlineStyle}
                        value={identifier}
                        errorText={errors.identifier}
                        onChange={this.onChange}
                    /></div>
                    <div><TextField
                        name="email"
                        floatingLabelText="Email"
                        floatingLabelStyle={{fontFamily: fontStyle}}
                        floatingLabelFocusStyle={colorStyle}
                        underlineFocusStyle={underlineStyle}
                        value={email}
                        errorText={errors.email}
                        onChange={this.onChange}
                    /></div>
                    <div><TextField
                        name="password"
                        floatingLabelText="Password"
                        floatingLabelStyle={{fontFamily: fontStyle}}
                        floatingLabelFocusStyle={colorStyle}
                        underlineFocusStyle={underlineStyle}
                        value={password}
                        errorText={errors.password}
                        onChange={this.onChange}
                        type="password"
                    /></div>
                    <div><TextField
                        name="retypePassword"
                        floatingLabelText="Re-type password"
                        floatingLabelStyle={{fontFamily: fontStyle}}
                        floatingLabelFocusStyle={colorStyle}
                        underlineFocusStyle={underlineStyle}
                        value={retypePassword}
                        errorText={errors.retypePassword}
                        onChange={this.onChange}
                        type="password"
                    /></div>
                    <div style={checkbox}><Checkbox
                        label="I agree to the Terms of Use and Pricacy Policy"/>
                    </div>
                    <FlatButton
                        className="Sign Up"
                        label="signUp"
                        labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                        primary={true}
                        disabled={isLoading}
                        type="submit"
                        style={signUpButtonStyle}
                    />
                </div>
            </form>
        );
    }
}

SignUpPage.propTypes = {
    //login: React.PropTypes.func.isRequired
};

SignUpPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(
    (state, ownProps) => ({
        ownProps
    })
)(SignUpPage);