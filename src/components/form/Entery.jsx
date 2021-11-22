import React from "react";

function Entery(props) {
    return (
        <div className="input-outer-area">
            <div className="input-area">
                <input type={props.type} placeholder={props.placeholder} name={props.name} required/>
                <svg className="err-sign" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g>
                </svg>
            </div>
            <p className="error-msg">{props.errMsg}</p>
        </div>
    );
}

export default Entery;