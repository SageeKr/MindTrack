import React from "react";
import "./Login.css";

export default function Login({isLoggedIn}) {
    return (
        <div className="login">
            <div className="form">
                <div className="login-form">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    {/* eslint-disable-next-line no-unused-expressions */}
                    <button onClick={() =>{isLoggedIn()}}>login</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </div>
            </div>
        </div>
    );
}