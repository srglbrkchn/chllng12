import React from "react";

function BlueHeader(props) {
    return (
        <div className="blue-header">
        <p><span>{props.emphasis}</span> {props.normal}</p></div>
    );
}

export default BlueHeader;