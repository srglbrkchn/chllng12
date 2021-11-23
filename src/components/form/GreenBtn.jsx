import React from "react";

function GreenBtn(props) {
    return (
        <button onClick={event => {event.preventDefault()}} className={props.className} type={props.type} name = {props.name}>{props.text}</button>
    );
}

export default GreenBtn;