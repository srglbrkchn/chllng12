import React from "react";
import Entery from "./Entery";
import inputInfos from "../inputInfo";

function Signup() {
    return (
        <div>
            {inputInfos.map(inputInfo => {
                return (<Entery type={inputInfo.type} placeholder={inputInfo.placeholder} />)
            })}
            <button className="signup-btn">Claim your free trial</button>
            <p>By clicking the button, you are agreeing to our
                <span>Terms and Services</span>
            </p>
        </div>
    );}

    export default Signup;