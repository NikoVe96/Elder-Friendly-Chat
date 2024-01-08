import { Link } from "react-router-dom";
import './Styles.css';
import Parse from 'parse/dist/parse.min.js';
import React, { useState } from 'react';


export const LogIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    const doUserLogIn = async function () {
        const usernameValue = username;
        const passwordValue = password;
        try {
            const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
            alert(
                `Success! User ${loggedInUser.get(
                    'username'
                )} has successfully signed in!`
            );
            const currentUser = await Parse.User.current();
            console.log(loggedInUser === currentUser);
            setUsername('');
            setPassword('');
            getCurrentUser();
            window.location.href = "/home"
            return true;
        } catch (error) {
            alert(`Error! ${error.message}`);
            return false;
        }
    };

    const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        setCurrentUser(currentUser);
        return currentUser;
    };

    return (
        <div>
            <br></br>
            {currentUser === null && (
                <div className="container">
                    <div className="centered-content">
                        <img className="logoImage" src="images/logo.jpg" alt="logo" />
                        <h1> Elder Friendly Chat</h1>
                    </div>
                    <div className="border"></div>
                    <figure className="centered-content">
                        <img className="profilepicture" src="images/avatar-face.png" alt="Face Image"></img>
                        <figcaption><h2>Log in</h2></figcaption>
                    </figure>
                    <div className="centered-content">
                        <input
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Username"
                            size="large"
                            className="input"
                        />
                        <br></br>
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Password"
                            size="large"
                            type="password"
                            className="input"
                        />
                    </div>
                    <div className="centered-content">
                        <button
                            onClick={() => doUserLogIn()}
                            type="primary"
                            className="button"
                            color={'#208AEC'}
                            size="large"
                            block
                        >
                            Log In
                        </button>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>


                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid flex-grow h-32 rounded-box place-items-center">
                            <p> Don't have an account yet?
                                <br></br>
                                <h4><Link to="/signup"> sign up here</Link></h4>
                            </p>
                        </div>
                        <div className="divider lg:divider-horizontal text-xl"></div>
                        <div className="grid flex-grow h-32 rounded-box place-items-center">
                            <Link to="/reset-password"><h4> Forgot your password? </h4></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LogIn;