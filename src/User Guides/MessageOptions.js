import React, { useEffect } from 'react';
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

function MessageOptionsUG() {

    useEffect(() => {
        async function fetchCurrentUser() {
            alert('On this page you will find small prewritten messages that you can send to your contacts. Hover over the different elements on the page to see what they do')
        }

        fetchCurrentUser();
    }, []);

    function backButton() {
        window.location.href = "/message-options";
    }

    return (
        <>
            <div class="container">
                <table>
                    <tr>
                        <td
                            width="20px"
                            onClick={backButton}>
                            <button className="back-button"> < TbArrowBackUp /></button>
                        </td>
                        <td width="600px">
                            <h1>Message options</h1>
                        </td>
                        <td width="20px">
                            <button className="guide-button"><FaRegQuestionCircle /></button>
                        </td>
                    </tr>
                </table>
                <div className='border'></div>
                <div class="centered-content">
                    <div className="tooltip" data-tip="If you click on any of these buttons, it will be selected and can be sent. Deselect it by clicking on the button again, or clicking on a different button">
                        <div class="scrollbar">
                            <div class="centered-buttons">
                                <button
                                    class="button"
                                    type="button"
                                    id="ok"
                                    value="ok">
                                    OK
                                </button>
                                <button
                                    class="button"
                                    type="button"
                                    id="imgood"
                                    value="I'm good">
                                    I'm good
                                </button>
                            </div>
                            <div class="centered-buttons">
                                <button
                                    class="button"
                                    type="button"
                                    id="howareyou"
                                    value="Hi, how are you?">
                                    Hi, how are you?
                                </button>
                                <button
                                    class="button"
                                    type="button"
                                    id="needhelp"
                                    value="I need help">
                                    I need help
                                </button>
                            </div>
                            <div class="centered-buttons">
                                <button
                                    class="button"
                                    type="button"
                                    id="soundsgood"
                                    value="That sounds good">
                                    That sounds good
                                </button>
                                <button
                                    class="button"
                                    type="button"
                                    id="pleasecall"
                                    value="Please call me">
                                    Please call me
                                </button>
                            </div>
                            <div class="centered-buttons">
                                <button
                                    class="button"
                                    type="button"
                                    id="yesplease"
                                    value="Yes, please">
                                    Yes, please
                                </button>
                                <button
                                    class="button"
                                    type="button"
                                    id="visit"
                                    value="Can you come and visit?">
                                    Can you come and visit?
                                </button>
                            </div>
                            <div class="centered-buttons">
                                <button
                                    class="button"
                                    type="button"
                                    id="happy"
                                    value="I'm happy to hear from you">
                                    I'm happy to hear from you
                                </button>
                                <button
                                    class="button"
                                    type="button"
                                    id="cantwait"
                                    value="I can't wait to see you">
                                    I can't wait to see you
                                </button>
                            </div>
                            <div class="centered-buttons">
                                <button
                                    class="button"
                                    type="button"
                                    id="whatareyoudoing"
                                    value="What are you doing today?">
                                    What are you doing today?
                                </button>
                                <button
                                    class="button"
                                    type="button"
                                    id="canttalk"
                                    value="I can't talk right now">
                                    I can't talk right now
                                </button>
                            </div>
                            <div class="centered-buttons">
                                <button
                                    class="button"
                                    type="button"
                                    id="calllater"
                                    value="I'll call you later">
                                    I'll call you later
                                </button>
                                <button
                                    class="button"
                                    type="button"
                                    id="busy"
                                    value="I'm busy">
                                    I'm busy
                                </button>
                            </div>
                            <div class="centered-buttons">
                                <button
                                    class="button"
                                    type="button"
                                    id="yes"
                                    value="Yes">
                                    Yes
                                </button>
                                <button
                                    class="button"
                                    type="button"
                                    id="no"
                                    value="No">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border'></div>
                    <div>
                        <div
                            className="tooltip"
                            data-tip="When you've chosen a message option, you can send it to your contact by clicking on this button">
                            <button className="button">Send</button>
                        </div>
                    </div>
                    <div>
                        <button className="home-button">Home</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageOptionsUG;