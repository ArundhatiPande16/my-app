import React, { Component } from 'react'
import Header from '../components/header';
import './login.css'
class Login extends Component {
    state = {
        username: '',
        password: '',
        showError:false,
        userData:[
            {username: 'jaya', password:'1234'},
            {username: 'anish', password:'3163'},
            {username: 'aru', password:'2222'},
            {username: 'jaya12', password:'1234'},
            {username: 'jaya1', password:'1234'}
        ]
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
         this.state.userData.filter(value=>{
            if(this.state.username === value.username && this.state.password === value.password){
                this.props.history.push('/dashboard')
            } else{
                this.setState({showError: true})
            }
        })
        // if (this.state.username === 'jaya' && this.state.password === '1234') {
        //     this.props.history.push('/dashboard')
        // } else {
        //     this.setState({showError: true})
        // }

    }
    // handleUserName = (event) => {
    //     this.setState({ username: event.target.value })
    //     console.log(event.target.value)
    // }
    // handlePassword = (event) => {
    //     this.setState({ password: event.target.value })
    // }
    handleLogin = (event) => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div>
                <Header name="Login" />
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Enter Username"
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleLogin} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control"
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleLogin} placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                               { this.state.showError ? <div className="alert alert-warning">
                                    Not valid credentials
                              </div> : null}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Login;