import Big from "big.js";
import React from "react";

function BigHeader (props) {
    return (
        <h1 className = "big-header">{props.text}</h1>
    )
}

export default BigHeader;