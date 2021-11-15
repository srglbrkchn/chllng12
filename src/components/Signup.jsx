import React from "react";
import Entery from "./Entery";

function Signup() {
    return (
        <div>
            First Name Last Name Email Address Password 
            <Entery type="text" placeholder="First Name" />
            <button className="signup-btn">Claim your free trial</button>
             <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </div>
    );
}

export default Signup;