import './Styles.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Parse from 'parse/dist/parse.min.js';

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
        if (button.style.backgroundColor === 'rgb(0, 180, 216)') {
            button.style.backgroundColor = "#0077B6";
            setSelectedButton(null);
        } else {
            if (selectedButton) {
                document.getElementById(selectedButton).style.backgroundColor = "#00B4D8";
            }
            button.style.backgroundColor = "#00B4D8";
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

    return (
        <>
            <div className="container">
                <h1>Add a new contact</h1>
                <div className='border'></div>
                <br></br>
                <br></br>
                <br></br>
                <div className="centered-content">
                    <div>
                        <h3> What's their name?</h3>
                        <br></br>
                        <input className='input' onChange={handleNewName} value={newName} type="text" placeholder="Input contact name"></input>
                    </div>
                    <div>
                        <h3> What's their phone number?</h3>
                        <br></br>
                        <input className='input' onChange={handleNewNumber} value={newNumber} type="text" placeholder="Input contact phone number"></input>
                    </div>
                    <div>
                        <h3> Add a picture</h3>
                        <br></br>
                        <table className="centered-img-buttons" width="650px">
                            <tr>
                                <td width="250px"><img src="images/woman-avatar.png" alt="avatar1" className="img-buttons" ></img></td>
                                <td width="250px"><img src="images/man-avatar.png" alt="avatar2" className="img-buttons" ></img></td>
                            </tr>
                            <tr>
                                <td> <button className='button' onClick={() => handlePicture('woman')} id="woman"> Woman</button> </td>
                                <td> <button className='button' onClick={() => handlePicture('man')} id="man">Man</button> </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <button className="button" onClick={handleSubmit}>Add contact</button>
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