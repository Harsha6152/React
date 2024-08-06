import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "harsha"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "harsha"
            });
        }, 3000);
    }
    render() {
        console.log("Parent comp renderd");
        return (
            <div>
                i am ParentComp
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp