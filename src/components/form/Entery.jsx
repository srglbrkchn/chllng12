import React, {useState} from "react";
import ErrorSign from "./ErrorSign";

function Entery(props) {
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        const iValue = event.target.value;
        setInputValue(iValue);

        console.log(event.target);
    }

    return (
        <div className="input-outer-area">
            <div className="input-area">
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={handleChange}
                    value={inputValue}
                    required/>
              <ErrorSign visibility = "" />
            </div>
            <p className="error-msg">{props.errMsg}</p>
        </div>
    );
}

export default Entery;