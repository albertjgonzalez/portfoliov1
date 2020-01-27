import React, { Component } from 'react';
import './style.css';

class LandingPage extends Component {

    state = { open: true }
    render() {
        return (
            <div id="landingPage" >
                <div onClick={this.props.openPage} id="enterButton">
                    <p id="text">
                        Enter
                    </p>
                </div>
            </div>
        );
    }
}

export default LandingPage;
