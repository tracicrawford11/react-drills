import React, { Component } from 'react';

class Login extends Component {
    constructor () {
        super ()
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleUsernameChange(uname) {
        this.setState ( {username: uname})
    }
    handlePasswordChange(pword) {
        this.setState ( {password: pword})
    }
    handleLogin() {
        alert (`Username: ${this.state.username} Passwood: ${this.state.password}`)

    }
    render () {
        return (
            <div>
                <input onChange = {e => this.handleUsernameChange (e.target.value)} type='text'/>
                <input onChange = { e=>this.handlePasswordChange (e.target.value)} type='text'/>
                <button onClick = {this.handleLogin}>Log In</button>
            </div>
        )
    }
}
export default Login;