import React from "react";
import InputField from "./InputField";
import GreenBtn from "./GreenBtn";


function Signup() {
    return (
        <div className="form-content">
            <InputField />
            <GreenBtn type="submit" className="green-btn" text="Claim your free trial" name="submit-btn"/>
            {/* <p>By clicking the button, you are agreeing to our
                <span>Terms and Services</span>
            </p> */}
        </div>
    );}

    export default Signup;