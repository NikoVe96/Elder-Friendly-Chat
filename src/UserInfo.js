import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

function UserInfo() {

    const [currentUser, setCurrentUser] = useState(null);
    const [newUsername, setNewUsername] = useState(null);
    const [newNumber, setNewNumber] = useState(null);
    const [newEmail, setNewEmail] = useState(null);

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
    }

    function backButton() {
        window.location.href = "/settings";
    }

    async function updateUsername() {
        currentUser.set('username', newUsername);
        await currentUser.save();
        alert(`Your username has been updated to ${currentUser.get('username')}!`);
        setNewUsername('');
    }

    async function updateNumber() {
        currentUser.set('number', newNumber);
        await currentUser.save();
        alert(`Your phone number has been updated to ${currentUser.get('number')}!`);
        setNewNumber('');
    }

    async function updateEmail() {
        currentUser.set('email', newEmail);
        await currentUser.save();
        alert(`Your email has been updated to ${currentUser.get('email')}!`);
        setNewEmail('');
    }

    function handleNewName(e) {
        setNewUsername(e.target.value);
    }

    function handleNewNumber(e) {
        setNewNumber(e.target.value);
    }

    function handleNewEmail(e) {
        setNewEmail(e.target.value);
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
                            <td
                                width="600px">
                                <h1>Elder Friendly Chat</h1>
                            </td>
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
                    <h2> User information </h2>
                </div>
                <br></br>
                <div className="centered-content">
                    <table className="table-user-info">
                        <tr>
                            <td><h4>Your username is: </h4></td>
                            <td>
                                <h4><strong>
                                    {currentUser === null && (
                                        ``
                                    )}
                                    {currentUser !== null && (
                                        `${currentUser.get('username')}`
                                    )}
                                </strong></h4>
                            </td>
                        </tr>
                        <tr>
                            <td width="300px"><h4>Your phone number is: </h4></td>
                            <td>
                                <h4><strong>
                                    {currentUser === null && (
                                        ``
                                    )}
                                    {currentUser !== null && (
                                        `${currentUser.get('number')}`
                                    )}
                                </strong></h4>
                            </td>
                        </tr>
                        <tr>
                            <td width="300px"><h4>Your email is: </h4></td>
                            <td>
                                <h4><strong>
                                    {currentUser === null && (
                                        ``
                                    )}
                                    {currentUser !== null && (
                                        `${currentUser.get('email')}`
                                    )}
                                </strong></h4>
                            </td>
                        </tr>
                    </table>
                    <br></br>
                    <br></br>
                    <table className="table-user-info">
                        <tr>
                            <h4>Want to update your username?</h4>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className='input'
                                    type="text"
                                    placeholder="Input your new username"
                                    onChange={handleNewName}
                                    value={newUsername}>
                                </input>
                                <button
                                    className="button-user-info"
                                    onClick={updateUsername}>
                                    Update
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <h4>Want to update your phone number?</h4>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className='input'
                                    type="text"
                                    placeholder="Input your new phone number"
                                    onChange={handleNewNumber}
                                    value={newNumber}>
                                </input>
                                <button
                                    className="button-user-info"
                                    onClick={updateNumber}>
                                    Update
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <h4>Want to update your email?</h4>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className='input'
                                    type="text"
                                    placeholder="Input your new email"
                                    onChange={handleNewEmail}
                                    value={newEmail}>
                                </input>
                                <button
                                    className="button-user-info"
                                    onClick={updateEmail}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    </table>
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

export default UserInfo;