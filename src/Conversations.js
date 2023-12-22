import './Styles.css';
import { Link } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
import React, { useState, useEffect } from 'react';
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

function Conversations() {
    const [currentUser, setCurrentUser] = useState(null);
    const [queryResults, setQueryResults] = useState();

    const doQueryByName = async function () {
        if (!currentUser) {
            return false;
        }

        const parseQuery = new Parse.Query('Contacts');

        parseQuery.contains('user', currentUser.get('username'));

        parseQuery.ascending("createdAt");

        try {
            let contact = await parseQuery.find();
            setQueryResults(contact);
            return true;
        } catch (error) {
            alert(`Error! ${error.message}`);
            return false;
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
                doQueryByName();
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

    function passContact(name) {
        localStorage.setItem('contactName', name);
    }

    function backButton() {
        window.location.href = "/home";
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
                                <td width="600px"> <h1>
                                    {currentUser === null && (
                                        ""
                                    )}
                                    {currentUser !== null && (
                                        `${currentUser.get('username')}`
                                    )}'s Conversations
                                </h1></td>
                                <td width="20px">
                                    <Link to="/conversations-ug">
                                        <button className="guide-button"><FaRegQuestionCircle /></button>
                                    </Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='border'></div>
                    <div className="scrollbar">
                        {queryResults && queryResults.length > 0
                            ? queryResults
                                .map((queryResult) => (
                                    <div
                                        key={queryResult.id}
                                        className="centered-content-conversations"
                                        onClick={() => passContact(queryResult.get('name'))}
                                    >
                                        <Link to="/chat">
                                            <figure>
                                                <img
                                                    src={
                                                        queryResult.get('picture') === 'woman'
                                                            ? 'images/woman-avatar.png'
                                                            : 'images/man-avatar.png'
                                                    }
                                                    alt={
                                                        queryResult.get('picture') === 'woman'
                                                            ? 'woman'
                                                            : 'man'
                                                    }
                                                    className="contact-img"
                                                />
                                                <figcaption><strong>{`${queryResult.get('name')}`}</strong></figcaption>
                                            </figure>
                                        </Link>
                                        <div className='border-small'></div>
                                    </div>
                                ))
                            : <p>You haven't added any contacts yet!</p>
                        }
                    </div>
                    <div className="border">
                    </div>
                    <div>
                        <Link to="/home">
                            <button className="home-button">Home</button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Conversations;
