import React, { Component } from 'react';
import './dashboard.css';
import homeStyles from '../home/home.module.css';
import styles from './dashboard.module.css'
import Header from '../components/header';
class Dashboard extends Component {

    handleClick = () => {
        this.props.history.push('/home')
    }
    render() {
        const pStyle = {
            color: 'red',
            backgroundColor: 'blue'
        }
        return (
            <div>
                <Header name="Dashboard" />
                <p style={pStyle}>internal</p>
                <p style={{ color: 'red' }}>inline</p>
                <p className='para'>external</p>
                <p className={'para'}>external</p>
                <p className={styles.preferred}>externa;l preferred</p>
                <p className={styles.jayanth}>externa;l preferred</p>
                <h1><i className="fa fa-home"></i></h1>
                <button className="btn btn-primary" onClick={this.handleClick}>Home</button>
            </div>
        )
    }
}

export default Dashboard;