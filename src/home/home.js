import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header';
class Home extends Component {
    state = {
        name: 'jayanth',
        age: 26
    }
    changeDetails = () => {
        this.setState({ name: 'anish', age: '23' })
    }
    render() {
        const { name, age } = this.state;
        return (
            <div>
                <Header
                    name="Home"
                    color='blue'>
                        <div>jayanth</div>
                    </Header>
                                                                                                                                                                                                                                                                                                                                                                    date='sevd' />
                <h1> {name}</h1>
                <h1> {age}</h1>
                <button className="btn btn-info" onClick={this.changeDetails}>Change details</button>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        )
    }
}
export default Home;