import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Parse from 'parse/dist/parse.min.js';
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

function AddContact() {

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [picture, setPicture] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);

    async function addContact() {
        try {
            const Contact = new Parse.Object('Contacts');
            Contact.set('name', newName);
            Contact.set('phone', newNumber);
            Contact.set('user', currentUser.get('username'));
            Contact.set('picture', picture);
            await Contact.save();
            alert('Contact saved!');
        } catch (error) {
            console.log('Error saving new contact: ', error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        addContact();
        setNewName("");
        setNewNumber("");
    }

    function handleNewName(e) {
        setNewName(e.target.value);
    }

    function handleNewNumber(e) {
        setNewNumber(e.target.value);
    }

    function handlePicture(buttonID) {
        const button = document.getElementById(buttonID);
        if (buttonID === selectedButton) {
            button.className = "button-picture";
            setSelectedButton(null);
            setPicture(null);
        } else {
            if (selectedButton) {
                document.getElementById(selectedButton).className = "button-picture";
            }
            button.className = "button-highlighted-contact";
            setSelectedButton(buttonID);
            setPicture(buttonID);
        }
    }

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

    function backButton() {
        window.location.href = "/home";
    }

    return (
        <>
            <div className="container">
                <table>
                    <tr>
                        <td
                            width="20px"
                            onClick={backButton}>
                            <button className="back-button"> < TbArrowBackUp /></button>
                        </td>
                        <td width="600px">
                            <h1>Add contact</h1>
                        </td>
                        <td width="20px">
                            <Link to="/add-contact-ug">
                                <button className="guide-button"><FaRegQuestionCircle /></button>
                            </Link>
                        </td>
                    </tr>
                </table>
                <div className='border'></div>
                <br></br>
                <br></br>
                <div className="centered-content">
                    <div>
                        <h3> What's their name?</h3>
                        <br></br>
                        <input
                            className='input'
                            onChange={handleNewName}
                            value={newName}
                            type="text"
                            placeholder="Input contact name">
                        </input>
                    </div>
                    <div>
                        <h3> What's their phone number?</h3>
                        <br></br>
                        <input
                            className='input'
                            onChange={handleNewNumber}
                            value={newNumber}
                            type="text"
                            placeholder="Input contact phone number">
                        </input>
                    </div>
                    <div>
                        <h3> Add a picture</h3>
                        <br></br>
                        <table
                            className="centered-img-buttons"
                            width="700px">
                            <tr>
                                <td width="250px">
                                    <img
                                        src="images/woman-avatar.png"
                                        alt="avatar1"
                                        className="img-buttons" >
                                    </img>
                                </td>
                                <td width="250px">
                                    <img
                                        src="images/man-avatar.png"
                                        alt="avatar2"
                                        className="img-buttons" >
                                    </img>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        className='button-picture'
                                        onClick={() => handlePicture('woman')}
                                        id="woman">
                                        Woman
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className='button-picture'
                                        onClick={() => handlePicture('man')}
                                        id="man">
                                        Man
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='border-small'></div>
                    <div>
                        <button
                            className="button"
                            onClick={handleSubmit}>
                            Add contact
                        </button>
                    </div>
                    <div>
                        <Link to="/home">
                            <button className="home-button">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContact;