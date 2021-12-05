import React from "react";
import InputField from "./InputField";
import GreenBtn from "./GreenBtn";
import BlueHeader from "./BlueHeader";

function Signup() {

    function handleSubmit(event) {
        console.log("submitted");
        event.preventDefault();
    }

    return (
        <div className="form-main">
            <BlueHeader emphasis="Try it free 7 days " normal=" then $20/mo.thereafter"/>
            <form className="form-content" onSubmit={handleSubmit} noValidate>
                <InputField/>
                <GreenBtn
                    type="submit"
                    className="green-btn"
                    text="Claim your free trial"
                    name="submit-btn"
                   />
                <p>By clicking the button, you are agreeing to our 
                    <span> Terms and Services</span>
                </p>
            </form>
        </div>
    );
}

export default Signup;