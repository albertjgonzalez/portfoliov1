import React, { Component } from 'react';
import { Wave } from 'react-animated-text';
import './style.css';

// const ExampleTwo = () => (
//   <Random text="EXAMPLE TEXT" />
// );

class LandingPage extends Component {

    state = {
        open: true,
        pauseText: true,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ pauseText: false });
        }, 1000);
    }

    render() {
        return (
            <div id="landingPage">
                <div id="landingAnimation">
                    <Wave id="movingText" paused={this.state.pauseText} iterations="1" effect="verticalFadeIn" effectChange={2} speed="10" text="I am Albert J Gonzalez" />
                    <Wave id="movingText" paused={this.state.pauseText} iterations="1" effect="verticalFadeIn" effectChange={4} speed="6" text="Welcome to my website" />
                </div>
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
