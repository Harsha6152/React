import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure comp renderd");
        return (
            <div>i am pure comp {this.props.name}</div>
        )
    }
}

export default PureComp