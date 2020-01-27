import React, { Component } from 'react';
import './style.css';


class HomePage extends Component {
    state = {}
    render() {
        return (
            <div className="grid-container" id="homePage">
                <div className="grid-item" id="divLeft">
                    <div className="divButton">
                        Bio
                    </div>
                </div>
                <div className="grid-item" id="divCenter">
                    <div className="divButton">
                        Projects
                    </div>
                </div>
                <div className="grid-item" id="divRight">
                    <div className="divButton">
                        Contact
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
