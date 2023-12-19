import './Styles.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { set } from 'parse/lib/browser/CoreManager';
import Parse from 'parse/dist/parse.min.js';

function MessageOptions() {

    const [selectedButton, setSelectedButton] = useState(null);
    const [messageOption, setMessageOption] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const contactName = localStorage.getItem('contactName');

    function changeColor(buttonID) {
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
            setMessageOption(button.value);
        }
    }

    async function createMessage() {
        try {
            const Message = new Parse.Object('Messages');
            Message.set('message', messageOption);
            Message.set('sender', currentUser.get('username'));
            Message.set('receiver', contactName);
            Message.set('timestamp', new Date());
            await Message.save();
            alert('Message sent!');

        } catch (error) {
            console.log('Error sending message: ', error);
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
            <div class="container">
                <h1>Message Options</h1>
                <div className='border'></div>
                <div class="centered-content">
                    <div class="scrollbar">
                        <div class="centered-buttons">
                            <button class="button" onClick={() => changeColor('ok')} type="button" id="ok" value="ok">OK</button>
                            <button class="button" onClick={() => changeColor('imgood')} type="button" id="imgood" value="I'm good">I'm good</button>
                        </div>
                        <div class="centered-buttons">
                            <button class="button" onClick={() => changeColor('howareyou')} type="button" id="howareyou" value="Hi, how are you?">Hi, how are you?</button>
                            <button class="button" onClick={() => changeColor('needhelp')} type="button" id="needhelp" value="I need help">I need help</button>
                        </div>
                        <div class="centered-buttons">
                            <button class="button" onClick={() => changeColor('soundsgood')} type="button" id="soundsgood" value="That sounds good">That sounds good</button>
                            <button class="button" onClick={() => changeColor('pleasecall')} type="button" id="pleasecall" value="Please call me">Please call me</button>
                        </div>
                        <div class="centered-buttons">
                            <button class="button" onClick={() => changeColor('yesplease')} type="button" id="yesplease" value="Yes, please">Yes, please</button>
                            <button class="button" onClick={() => changeColor('visit')} type="button" id="visit" value="Can you come and visit?">Can you come and visit?</button>
                        </div>
                        <div class="centered-buttons">
                            <button class="button" onClick={() => changeColor('happy')} type="button" id="happy" value="I'm happy to hear from you">I'm happy to hear from you</button>
                            <button class="button" onClick={() => changeColor('cantwait')} type="button" id="cantwait" value="I can't wait to see you">I can't wait to see you</button>
                        </div>
                        <div class="centered-buttons">
                            <button class="button" onClick={() => changeColor('whatareyoudoing')} type="button" id="whatareyoudoing" value="What are you doing today?">What are you doing today?</button>
                            <button class="button" onClick={() => changeColor('canttalk')} type="button" id="canttalk" value="I can't talk right now">I can't talk right now</button>
                        </div>
                        <div class="centered-buttons">
                            <button class="button" onClick={() => changeColor('calllater')} type="button" id="calllater" value="I'll call you later">I'll call you later</button>
                            <button class="button" onClick={() => changeColor('busy')} type="button" id="busy" value="I'm busy">I'm busy</button>
                        </div>
                        <div class="centered-buttons">
                            <button class="button" onClick={() => changeColor('yes')} type="button" id="yes" value="Yes">Yes</button>
                            <button class="button" onClick={() => changeColor('no')} type="button" id="no" value="No">No</button>
                        </div>
                    </div>
                    <div className='border'></div>
                    <div>
                        <button className="button"
                            onClick={createMessage}
                        >Send</button>
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

export default MessageOptions;