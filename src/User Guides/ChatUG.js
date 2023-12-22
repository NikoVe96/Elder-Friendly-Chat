import Parse from 'parse/dist/parse.min.js';
import React, { useState, useEffect } from 'react';
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

function ChatUG() {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
                alert("This is the chat page. Here you can view conversations with your contacts and send new messages. Hover over the different elements on the page to see what they do")
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
        window.location.href = "/chat";
    }

    return (
        <>
            <br></br>
            <div className="container">
                <table>
                    <tr>
                        <td
                            width="20px"
                            onClick={backButton}>
                            <button className="back-button"> < TbArrowBackUp /></button>
                        </td>
                        <td width="600px">
                            <h1>Chat with your contact</h1>
                        </td>
                        <td width="20px">
                            <button className="guide-button"><FaRegQuestionCircle /></button>
                        </td>
                    </tr>
                </table>
                <div className='border'></div>
                <div className="scrollbar-chat">
                    <div className="message-sender sender-col">
                        <div className="message-sender-name">
                            {currentUser === null && (
                                ""
                            )}
                            {currentUser !== null && (
                                `${currentUser.get('username')}`
                            )}</div>
                        <div className="chat-border"></div>
                        <div
                            className="tooltip"
                            data-tip="This is where your own messages will be displayed">
                            <div className="message-text-sender">Hello! How are you?</div>
                        </div>
                        <div
                            className="tooltip"
                            data-tip="This is where the timestamp of your messages will be displayed">
                            <div className="message-timestamp-sender">11:20</div>
                        </div>
                    </div>
                    <div className="message-receiver receiver-col">
                        <div
                            className="tooltip"
                            data-tip="Here you can see who sent you the message">
                            <div className="message-sender-name">Your contact's name</div>
                        </div>
                        <div className="chat-border"></div>
                        <div
                            className="tooltip"
                            data-tip="The message you've received will be displayed here">
                            <div className="message-text-sender">I'm good, how are you? Nice to hear from you</div>
                        </div>
                        <div
                            className="tooltip"
                            data-tip="Here you can see the timestamp of the message you've received">
                            <div className="message-timestamp-sender">11:42</div>
                        </div>
                    </div>
                </div>
                <div className="border-small"></div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow h-32  rounded-box">

                        <label className="form-control w-full max-w-xs">
                            <div
                                className="tooltip"
                                data-tip="In this box you can write your own message to send">
                                <textarea
                                    type="text"
                                    placeholder="Write a new message..."
                                    className="input-chat" />
                            </div>
                        </label>
                        <div className="centered-content">
                            <div
                                className="tooltip"
                                data-tip="When you've constructed a message, you can hit this button to send it to your contact">
                                <button className="chat-send-button">Send message</button>
                            </div>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal text-xl">OR</div>
                    <div className="grid flex-grow h-32 rounded-box place-items-center">
                        <div
                            className="tooltip"
                            data-tip="With this button you can view the predefined message options">
                            <button className="button">
                                Message options
                            </button>
                        </div>
                    </div>
                </div>
                <button className="home-button">
                    Home
                </button>
            </div >
        </>
    )
}

export default ChatUG;