import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/index';
import HomePage from './components/HomePage/index';

class App extends Component {
    state = {
        pageEnter: true,
    }

    componentDidMount() {
    }

    render() {
        if (this.state.pageEnter) {
            return (
                <div className="App">
                    <LandingPage openPage={() => { this.setState({ pageEnter: false }); }} />
                </div>
            );
        }

        return (
            <HomePage />
        );
    }
}

export default App;
