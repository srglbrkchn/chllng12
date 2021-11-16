import React from "react";
import Entery from "./Entery";
import inputInfos from "../../inputInfo";

function InputField() {
    return (
        <div className="input-field">
            {inputInfos.map(inputInfo => {
                return (<Entery type={inputInfo.type} placeholder={inputInfo.placeholder}/>);
            })}
        </div>
    );
}

export default InputField;