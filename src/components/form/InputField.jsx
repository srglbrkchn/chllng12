import React from "react";
import Entery from "./Entery";
import inputInfos from "../../inputInfo";

function InputField(props) {
    return (
        <div className="input-field">
            {inputInfos.map((inputInfo, index) => {
                return (<Entery
                    submitted = {props.submitted}
                    key = {index}
                    id = {index}
                    type={inputInfo.type}
                    placeholder={inputInfo.placeholder}
                    name={inputInfo.name}
                    errMsg = {inputInfo.errMsg}
                    />);
            })}
        </div>
    );
}

export default InputField;