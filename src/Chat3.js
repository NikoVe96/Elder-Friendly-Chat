import './Styles.css';
import { Link } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
import React, { useState, useEffect } from 'react';

function Chat3() {

    const [currentUser, setCurrentUser] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [queryResults, setQueryResults] = useState();
    const contactName = localStorage.getItem('contactName');

    const doQueryByName = async function () {
        if (!currentUser) {
            return false;
        }

        const parseQuerySender = new Parse.Query('Messages');
        parseQuerySender.equalTo('sender', currentUser.get('username'));
        parseQuerySender.equalTo('receiver', contactName);

        const parseQueryReceiver = new Parse.Query('Messages');
        parseQueryReceiver.equalTo('sender', contactName);
        parseQueryReceiver.equalTo('receiver', currentUser.get('username'));

        const mainQuery = Parse.Query.or(parseQuerySender, parseQueryReceiver);
        mainQuery.ascending("createdAt");

        try {
            let messages = await mainQuery.find();
            setQueryResults(messages);
            return true;
        } catch (error) {

            return false;
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
                await doQueryByName();
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

    async function createMessage() {
        try {
            const Message = new Parse.Object('Messages');
            Message.set('message', newMessage);
            Message.set('sender', currentUser.get('username'));
            Message.set('receiver', contactName);
            Message.set('timestamp', new Date());
            await Message.save();
            alert('Message sent!');

        } catch (error) {
            console.log('Error sending message: ', error);
        }

        setNewMessage("");
    }

    function handleMessage(e) {
        setNewMessage(e.target.value);
    }

    const formatDateToTime = (date) => {
        //Add date
        return `${date.getHours()}:${date.getMinutes()}`;
    };

    return (
        <>
            <br></br>
            <div className="container">
                <h1>Chat with {contactName}</h1>
                <div className='border'></div>
                <div className="scrollbar-chat">
                    {queryResults && queryResults.length > 0
                        ? queryResults
                            .sort((a, b) => a.createdAt > b.createdAt)
                            .map((queryResult) => (
                                <div
                                    key={queryResult.id}
                                    className={
                                        queryResult.get('sender') === currentUser.get('username')
                                            ? "message-sender sender-col"
                                            : "message-receiver receiver-col"
                                    }
                                >
                                    <div className="message-sender-name">{`${queryResult.get('sender')}`}</div>
                                    <div className="chat-border"></div>
                                    <div className="message-text-sender">{`${queryResult.get('message')}`}</div>
                                    <div className="message-timestamp-sender">{`${formatDateToTime(queryResult.get('createdAt'))}`}</div>
                                </div>
                            ))
                        : <p>No messages have been sent in this chat yet!</p>
                    }
                </div>
                <div className="border-small"></div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow h-32  rounded-box">

                        <label className="form-control w-full max-w-xs">
                            <textarea type="text" placeholder="Write a new message..." className="input-chat" onChange={handleMessage} value={newMessage} />
                        </label>
                        <div className="centered-content">
                            <button className="chat-send-button" onClick={createMessage}>Send message</button>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal text-xl">OR</div>
                    <div className="grid flex-grow h-32 rounded-box place-items-center">
                        <Link to="/message-options">
                            <button className="button">
                                Message options
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="join">
                    <Link to="/home">
                        <button className="home-button">
                            Home
                        </button>
                    </Link>
                    <Link to='/conversation'>

                    </Link>
                </div>
            </div >
        </>
    )
}

export default Chat3;