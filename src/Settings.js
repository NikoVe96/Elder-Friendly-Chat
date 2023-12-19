import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { MdTextFields } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Parse from 'parse/dist/parse.min.js';

function Settings() {

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
        return user;
    };

    const doUserLogOut = async function () {
        try {
            await Parse.User.logOut();
            // To verify that current user is now empty, currentAsync can be used
            const currentUser = await Parse.User.current();
            if (currentUser === null) {
                alert('Success! No user is logged in anymore!');
                window.location.href = '/login';
            }
            // Update state variable holding current user
            getCurrentUser();
            return true;
        } catch (error) {
            alert(`Error! ${error.message}`);
            return false;
        }
    };

    return (
        <>
            <br></br>
            <div className="container">
                <div className="centered-content">
                    <img className="logoImage" src="images/logo.jpg" alt="logo" />
                    <h1> Elder Friendly Chat</h1>
                    <div className="border"></div>
                </div>
                <h2> Settings </h2>
                <br></br>
                <div className="centered-buttons">
                    <GoPerson className="icons" />
                    <Link to="/conversations"><button class="button"> Profile information </button></Link>
                </div>
                <div className="centered-buttons">
                    <MdTextFields className="icons" />
                    <Link to="/conversations"><button class="button"> Text size </button></Link>
                </div>
                <div className="centered-buttons">
                    <IoNotificationsOutline className="icons" />
                    <Link to="/conversations"><button class="button"> Notifications </button></Link>
                </div>
                <div className="centered-buttons">
                    <IoLogOutOutline className="icons" />
                    <button class="button" onClick={doUserLogOut}> Log out </button>
                </div>
                <div>
                    <Link to="/">
                        <button className="home-button">Home</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Settings;