import './Styles.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import { async } from 'parse/lib/browser/Storage';

function AddContact() {

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    async function addContact() {
        try {
            const Contact = new Parse.Object('Contacts');
            Contact.set('name', newName);
            Contact.set('phone', newNumber);
            await Contact.save();
            alert('Contact saved!');
        } catch (error) {
            console.log('Error saving new contact: ', error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        addContact();
    }

    function handleNewName(e) {
        setNewName(e.target.value);
    }

    function handleNewNumber(e) {
        setNewNumber(e.target.value);
    }

    return (
        <>
            <div className="container">
                <h1>Add a new contact</h1>
                <div className='border pb-10'></div>
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
                        <button className="button" onClick={handleSubmit}>Add contact</button>
                    </div>
                    <div>
                        <Link to="/">
                            <button className="home-button">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContact;