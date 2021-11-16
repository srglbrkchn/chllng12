import React from "react";

function Entery (props) {
    return(
        <input type={props.type} placeholder={props.placeholder} name={props.name} />
    );
}

export default Entery;