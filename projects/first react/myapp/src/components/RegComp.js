import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log("Reg comp renderd");
        return (
            <div>i am the RegComp {this.props.name}</div>
        )
    }
}

export default RegComp