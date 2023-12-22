import React, { useEffect } from 'react';
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

function AddContactUG() {

    useEffect(() => {
        async function welcomeMessage() {
            alert('On this page you can add a new contact to your contact list. You can add a name, a phone number and a picture to your contact. Hover over the different elements of the page to see what they do')
        }

        welcomeMessage();
    }, []);

    function backButton() {
        window.location.href = "/add-contact";
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
                            <button className="guide-button"><FaRegQuestionCircle /></button>
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
                        <div
                            className='tooltip'
                            data-tip="In this field you can input the contact's username. It's important that it corresponds to their exact username, so they can receive your messages">
                            <input
                                className='input'
                                type="text"
                                placeholder="Input contact name">
                            </input>
                        </div>
                    </div>
                    <div>
                        <h3> What's their phone number?</h3>
                        <br></br>
                        <div
                            className='tooltip'
                            data-tip="In this field you can input the contact's phone number.">
                            <input
                                className='input'
                                type="text"
                                placeholder="Input contact phone number">
                            </input>
                        </div>
                    </div>
                    <div
                        className='tooltip'
                        data-tip="Here you can choose a picture for your contact by clicking on the button beneath the picture you want to choose">
                        <h3> Add a picture</h3>
                        <br></br>
                        <table className="centered-img-buttons" width="700px">
                            <tr>
                                <td width="250px">
                                    <img
                                        src="images/woman-avatar.png"
                                        alt="avatar1"
                                        className="img-buttons" >
                                    </img>
                                </td>
                                <td width="250px">
                                    <img src="images/man-avatar.png"
                                        alt="avatar2"
                                        className="img-buttons" >
                                    </img>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className='button-picture' id="woman"> Woman</button>
                                </td>
                                <td>
                                    <button className='button-picture' id="man">Man</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='border-small'></div>
                    <div
                        className='tooltip'
                        data-tip="When you've filled out the contact information, you can save it to your list by clicking on this button">
                        <button className="button">Add contact</button>
                    </div>
                    <div>
                        <button className="home-button">Home</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContactUG;