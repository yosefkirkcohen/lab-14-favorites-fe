import React, { Component } from 'react'
import { signup } from './fetch-utils';

export default class SignupPage extends Component {

    state = {
        email: '',
        password: ''
    }
    handleSubmit = async(e) => {
        e.preventDefault();

        const { token } = await signup(this.state.email, this.state.password)

        this.props.handleTokenChange(token)

        this.props.history.push('/search')
    }

    render() {
        return (
            <div>
                <form className='signup' onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type='email' value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} />
                    </label>
                    <label>
                        Password
                        <input  type='password' value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
