import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const doRequestPasswordReset = async function () {
        const emailValue = email;
        try {
            await Parse.User.requestPasswordReset(emailValue);
            alert(`Success! Please check ${email} to proceed with password reset.`);
            return true;
        } catch (error) {
            alert(`Error! ${error}`);
            return false;
        }
    };

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="centered-content">
                    <img
                        className="logoImage"
                        src="images/logo.jpg"
                        alt="logo" />
                    <h1> Elder Friendly Chat</h1>
                </div>
                <div className="border"></div>
                <br></br>
                <br></br>
                <h2 className="centered-content">Reset your Password</h2>
                <br></br>
                <br></br>
                <div className="centered-content">
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Your account email"
                        size="large"
                        className="input"
                    />
                </div>
                <br></br>
                <br></br>
                <div className="centered-content">
                    <button
                        onClick={() => doRequestPasswordReset()}
                        type="primary"
                        className="button"
                        color={'#208AEC'}
                        size="large"
                    >
                        Request password reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;