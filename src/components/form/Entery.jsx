import React, {useState} from "react";
import ErrorSign from "./ErrorSign";

function Entery(props) {
    return (
        <div className="input-outer-area">
            <div className="input-area">
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    required/>
              <ErrorSign />
            </div>
            <p className="error-msg">{props.errMsg}</p>
        </div>
    );
}

export default Entery;