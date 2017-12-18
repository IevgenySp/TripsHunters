/**
 * Created by isp on 11/9/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import validateInput from '../utils/loginValidator';

const pageTitleStyle = {
    fontFamily: "PT Sans Narrow",
    fontWeight: 'bold',
    fontSize: '22px'
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
};

const loginButtonStyle = {
    marginTop: '15px'
};

const loginTitleStyle = {
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

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            identifier: '',
            password: '',
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
        const { errors, identifier, password, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div style={formStyle}>
                    <div style={loginTitleStyle}>Login</div>

                    { errors.form && <div className="loginAlert">{errors.form}</div> }

                    <div><TextField
                        name="identifier"
                        floatingLabelText="Username / Email"
                        floatingLabelStyle={{fontFamily: fontStyle}}
                        floatingLabelFocusStyle={colorStyle}
                        underlineFocusStyle={underlineStyle}
                        value={identifier}
                        errorText={errors.identifier}
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
                    <FlatButton
                        className="login"
                        label="Login"
                        labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                        primary={true}
                        disabled={isLoading}
                        type="submit"
                        style={loginButtonStyle}
                    />
                </div>
            </form>
        );
    }
}

LoginPage.propTypes = {
    //login: React.PropTypes.func.isRequired
};

LoginPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(
    (state, ownProps) => ({
        ownProps
    })
)(LoginPage);