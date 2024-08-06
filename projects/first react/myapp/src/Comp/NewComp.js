import React, { Component } from 'react';
import bella from "./bella.png";
import bellb from "./bellb.png";

export class NewComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Subscribe to tutorial",
            sub: "subscribe",
            imageUrl: bella
        }
    }
    styles = {
        fontstyle: "italic",
        color: "teal"
    };
    Buttonchange = () => {
        this.setState({
            message: "hit the bell icon never want to miss an update",
            sub: "Subscribed"

        })
    }
    imageChange = () => {
        this.setState({
            imageUrl: bellb,
            message: "thank you for the subscribing"
        })
    }
    render() {
        return (
            <div className='App'>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub} </button>
                <p />
                <img style={{ width: "30px", height: "30px" }} src={this.state.imageUrl} onClick={this.imageChange} alt="" />

            </div>
        )
    }
}

export default NewComp