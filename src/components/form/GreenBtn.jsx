import React from "react";

function GreenBtn(props) {
    return (
        <button className={props.className} type={props.type} name={props.name}>{props.text}</button>
    );
}

export default GreenBtn;