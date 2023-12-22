import React, { useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { MdTextFields } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";

function SettingsUG() {

    useEffect(() => {
        async function welcomeMessage() {
            alert('In the settings page you have several options to customize the application to your liking, or simply log-out. Hover over each of the buttons to see what they do');
        }
        welcomeMessage();
    });

    function backButton() {
        window.location.href = "/settings";
    }

    return (
        <>
            <br></br>
            <div className="container">
                <div className="centered-content">
                    <table>
                        <tr>
                            <td
                                width="20px"
                                onClick={backButton}>
                                <button className="back-button"> < TbArrowBackUp /></button>
                            </td>
                            <td width="600px">
                                <h1>Elder Friendly Chat</h1>
                            </td>
                            <td width="20px">
                                <button className="guide-button"><FaRegQuestionCircle /></button>
                            </td>
                        </tr>
                    </table>
                    <div className="border"></div>
                </div>
                <h2> Settings </h2>
                <br></br>
                <div className="centered-buttons">
                    <GoPerson className="icons" />
                    <div
                        className="tooltip"
                        data-tip="This will take you to the profile information settings, where you can see and edit the user information you have on your account. ">
                        <button class="button"> Profile information </button>
                    </div>
                </div>
                <div className="centered-buttons">
                    <MdTextFields className="icons" />
                    <div
                        className="tooltip"
                        data-tip="This will take you to the text size settings, where you can adjust the size of the applications text to your liking. ">
                        <button class="button"> Text size </button>
                    </div>
                </div>
                <div className="centered-buttons">
                    <IoNotificationsOutline className="icons" />
                    <div
                        className="tooltip"
                        data-tip="This will take you to the notifications settings, where you can adjust what notifications you want to receive">
                        <button class="button"> Notifications </button>
                    </div>
                </div>
                <div className="centered-buttons">
                    <IoLogOutOutline className="icons" />
                    <div
                        className="tooltip"
                        data-tip="This button logs you out of the application, and you will need to enter your username and pass-word again, if you want to enter the Elder Friendly Chat.">
                        <button class="button"> Log out </button>
                    </div>
                </div>
                <div>
                    <button className="home-button">Home</button>
                </div>
            </div>
        </>
    );
}

export default SettingsUG;