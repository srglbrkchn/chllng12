import React, {useState} from "react";
import ErrorSign from "./ErrorSign";

function Entery(props) {
    const [inputValue,
        setInputValue] = useState("");

    const [err,
        setErr] = useState(false);

    function handleChange(event) {
        const iValue = event.target.value;
        setInputValue(iValue);
    }

    function handleOnBlur(event) {
        if (event.target.validity.valueMissing || event.target.validity.typeMismatch) {
            setErr(true);
            event.target.placeholder = "";
        } else {
            setErr(false);
        }
    }

    function handleFocus (event) {
        setErr(false);
    }



    return (
        <div className="input-outer-area">
            <div
                className="input-area"
                style={{
                border: err && "solid 2px hsl(0, 100%, 74%)"
            }}>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    onFocus={handleFocus}
                    value={inputValue}
                    style={{
                    color: err && "hsl(0, 100%, 74%)"
                }}
                    required/>
                <ErrorSign
                    visibility={err
                    ? "visible"
                    : "hidden"}/>
            </div>
            <p
                className="error-msg"
                style={{
                display: err
                    ? "block"
                    : "none"
            }}>{props.errMsg}</p>
        </div>
    );
}

export default Entery;