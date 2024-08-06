import React from 'react';

function FunProps(props) {
    return (
        <div>
            <h3> this is fun comp</h3>,
            <h3>hello {props.name} from {props.place}</h3>
        </div>
    );
}

export default FunProps;