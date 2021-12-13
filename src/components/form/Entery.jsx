import React, {useState} from "react";
import ErrorSign from "./ErrorSign";

function Entery(props) {

    const submitted = props.submitted;

    const [formInfo,
        setFormInfo] = useState({fName: "", lName: "", email: "", password: ""});

    const [err,
        setErr] = useState(true);

    function handleChange(event) {
        const {name, value} = event.target;

        setFormInfo((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    function handleOnBlur(event) {
        if (event.target.validity.valueMissing || event.target.validity.typeMismatch) {
            setErr(true);
            event.target.placeholder = "";
        } else {
            setErr(false);
        }
    }

    function handleFocus(event) {
        setErr(false);
    }

    return (
        <div className="input-outer-area">
            <div
                className="input-area"
                style={{
                border: (err && submitted) && "solid 2px hsl(0, 100%, 74%)"
            }}>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    onFocus={handleFocus}
                    value={formInfo.name}
                    style={{
                    color: (err && submitted) && "hsl(0, 100%, 74%)"
                }}
                    required/>
                <ErrorSign
                    visibility={(err && submitted)
                    ? "visible"
                    : "hidden"}/>
            </div>
            <p
                className="error-msg"
                style={{
                display: (err && submitted)
                    ? "block"
                    : "none"
            }}>{props.errMsg}</p>
        </div>
    );
}

export default Entery;