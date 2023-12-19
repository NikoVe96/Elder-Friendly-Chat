import './Styles.css';
import { Link } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
import React, { useState, useEffect } from 'react';
import { BiConversation } from "react-icons/bi";
import { GoPersonAdd } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

function MainPage() {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        async function fetchCurrentUser() {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        }

        fetchCurrentUser();
    }, []);

    const getCurrentUser = async function () {
        const user = await Parse.User.current();
        if (!user) {
            alert('No user is logged in!');
        }
        return user;
    };

    return (
        <>
            <br></br>
            <div className="container">
                <div className="centered-content">
                    <img className="logoImage" src="images/logo.jpg" alt="logo" />
                    <h1> Elder Friendly Chat</h1>
                    <div className="border"></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="centered-content">
                        {currentUser === null && (
                            <h2>{`Hello!`}</h2>
                        )}
                        {currentUser !== null && (
                            <h2>{`Hello ${currentUser.get('username')}!`}</h2>
                        )}
                    </div>
                    <br></br>
                    <div className="centered-buttons">
                        <BiConversation className="icons" />
                        <Link to="/convo2"><button class="button"> View conversations</button></Link>
                    </div>
                    <div className="centered-buttons">
                        <GoPersonAdd className="icons" />
                        <Link to="/add-contact"> <button className="button">Add new contact</button></Link>
                    </div>
                </div>
                <div>
                    <Link to="/settings">
                        <button className="settings-button"><IoSettingsOutline /> Settings</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MainPage;
