import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { MdTextFields } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Parse from 'parse/dist/parse.min.js';
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

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
            setCurrentUser(await Parse.User.current());
            if (currentUser === null) {
                alert('Success! No user is logged in anymore!');
                window.location.href = '/login';
            }
            getCurrentUser();
            return true;
        } catch (error) {
            alert(`Error! ${error.message}`);
            return false;
        }
    };

    function backButton() {
        window.location.href = "/home";
    }

    return (
        <>
            <br></br>
            <div className="container">
                <div className="centered-content">
                    <table>
                        <tr>
                            <td
                                width="20px"
                                onClick={backButton}>
                                <button
                                    className="back-button">
                                    < TbArrowBackUp />
                                </button>
                            </td>
                            <td width="600px"> <h1>Elder Friendly Chat</h1></td>
                            <td
                                width="20px">
                                <Link to="/settings-ug">
                                    <button
                                        className="guide-button">
                                        <FaRegQuestionCircle />
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </table>
                    <div className="border"></div>
                </div>
                <h2> Settings </h2>
                <br></br>
                <div className="centered-buttons">
                    <GoPerson className="icons" />
                    <Link to="/user-info">
                        <button
                            class="button">
                            Profile information
                        </button>
                    </Link>
                </div>
                <div className="centered-buttons">
                    <MdTextFields className="icons" />
                    <Link>
                        <button
                            class="button">
                            Text size
                        </button>
                    </Link>
                </div>
                <div className="centered-buttons">
                    <IoNotificationsOutline className="icons" />
                    <Link>
                        <button
                            class="button">
                            Notifications
                        </button>
                    </Link>
                </div>
                <div className="centered-buttons">
                    <IoLogOutOutline className="icons" />
                    <button
                        class="button"
                        onClick={doUserLogOut}>
                        Log out
                    </button>
                </div>
                <div>
                    <Link to="/home">
                        <button className="home-button">Home</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Settings;