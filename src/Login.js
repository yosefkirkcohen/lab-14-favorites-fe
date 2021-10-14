import { Button, TextField } from '@mui/material';
import React, { Component } from 'react'
import { login, signup } from './fetch-utils';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleLogin = async(e) => {
        const {
            email,
            password
        } = this.state;
        e.preventDefault();
        const { token } = await login(email, password);
        this.props.handleTokenChange(token)
        this.props.history.push('/search')
    }

    handleSignup = async (e) => {
        const {
            email,
            password
        } = this.state;
        e.preventDefault();
        const { token } = await signup(email, password);
        this.props.handleTokenChange(token);
        this.props.history.push('/search');
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    }

    render() {
        const {
            email,
            password
        } = this.state;
        return (
            <div className="login-div">
                    <TextField
                        value={email}
                        label="Email"
                        variant="standard"
                        size="small"
                        onChange={this.handleEmailChange}
                    />
                    <TextField
                        value={password}
                        label="Password"
                        variant="standard"
                        size="small"
                        onChange={this.handlePasswordChange}
                    />
                    <div className="login-buttons-div">
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={this.handleLogin}
                        >
                            Login
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={this.handleSignup}
                        >
                            Signup
                        </Button>
                    </div>
            </div>
        )
    }
}