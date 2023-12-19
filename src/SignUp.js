import './Styles.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import { async } from 'parse/lib/browser/Storage';

function SignUp() {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");

    function signUp() {

        var user = new Parse.User();
        user.set("username", newName);
        user.set("password", newPassword);
        user.set("number", newNumber);
        user.set("email", newEmail);

        //Add if statement to catch if user already exists
        // if yes, alert user and prompt to log in
        user.signUp().then(function (user) {
            //alert('New user created!');
            console.log('User created successful with name: ' + user.get("username") + ' and phone number: ' + user.get("number"));
            window.location.href = "/signedup";
        }).catch(function (error) {
            alert("Error: User already exists. Please log in if you already have an account or use a different user name if you do not have an account.")
            console.log("Error: " + error.code + " " + error.message);
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        signUp();
    }

    function handleNewName(e) {
        setNewName(e.target.value);
    }

    function handleNewNumber(e) {
        setNewNumber(e.target.value);
    }

    function handleNewPassword(e) {
        setNewPassword(e.target.value);
    }

    function handleNewEmail(e) {
        setNewEmail(e.target.value);
    }

    return (
        <>
            <div className="container">
                <h1>Sign up</h1>
                <div className='border pb-10'></div>
                <div className="centered-content">
                    <div>
                        <h4> What's your name?</h4>
                        <input className='input' onChange={handleNewName} value={newName} type="text" placeholder="Input your name"></input>
                    </div>
                    <div>
                        <h4> What's your phone number?</h4>
                        <input className='input' onChange={handleNewNumber} value={newNumber} type="text" placeholder="Input your phone number"></input>
                    </div>
                    <div>
                        <h4> What's your email adress?</h4>
                        <input className='input' onChange={handleNewEmail} value={newEmail} type="text" placeholder="Input your email"></input>
                    </div>
                    <div>
                        <h4> Choose a password</h4>
                        <input className='input' onChange={handleNewPassword} value={newPassword} type="text" placeholder="Input password"></input>
                    </div>
                    <div>
                        <button className="button" onClick={handleSubmit}>Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;