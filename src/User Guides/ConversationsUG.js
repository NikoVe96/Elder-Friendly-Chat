import Parse from 'parse/dist/parse.min.js';
import React, { useState, useEffect } from 'react';
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

function ConversationsUG() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
                alert("This is the conversations page! Here you will see all of your contacts, click on one of them to start chatting.");
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        }

        fetchData();
    },);

    const getCurrentUser = async function () {
        const user = await Parse.User.current();
        if (!user) {
            alert('No user is logged in!');
        }
        return user;
    };

    function backButton() {
        window.location.href = "/conversations";
    }

    return (
        <>

            <br></br>
            <div className="container">
                <div className="centered-content">
                    <div>
                        <table>
                            <tr>
                                <td
                                    width="20px"
                                    onClick={backButton}>
                                    <button className="back-button"> < TbArrowBackUp /></button>
                                </td>
                                <td width="600px">
                                    <h1>
                                        {currentUser === null && (
                                            ""
                                        )}
                                        {currentUser !== null && (
                                            `${currentUser.get('username')}`
                                        )}'s Conversations
                                    </h1>
                                </td>
                                <td width="20px">
                                    <button className="guide-button"><FaRegQuestionCircle /></button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='border'></div>
                    <div className="scrollbar-guide">
                        <div className="centered-content-conversations">
                            <div
                                className="tooltip"
                                data-tip="When you click on one of your contacts, you will be taken to the chat page for that specific contact">
                                <figure>
                                    <img
                                        src="/images/woman-avatar.png"
                                        className="contact-img"
                                        alt="contact"
                                    />
                                    <figcaption><strong>Your contact's name</strong></figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="border">
                    </div>
                    <div>
                        <button className="home-button">Home</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ConversationsUG;
