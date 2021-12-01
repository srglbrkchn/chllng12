import React from "react";
import Entery from "./Entery";
import inputInfos from "../../inputInfo";

function InputField() {
    return (
        <div className="input-field">
            {inputInfos.map((inputInfo, index) => {
                return (<Entery
                    key = {index}
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