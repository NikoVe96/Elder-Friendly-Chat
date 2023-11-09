import logo from './images/logo.jpg';
import './Styles.css';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <>
            <div class="container">
                <div class="centered-content">
                    <image class="logoImage" src="/src/images/logo.jpg" alt="Logo"></image>
                    <h1> Elder Friendly Chat</h1>

                    <div class="centered-buttons">
                        <img class="img" src="/src/images/conversations1.png" alt="conversations"></img>
                        <a href="ConversationsList.html"><button class="button"> View conversations</button></a>
                    </div>

                    <div class="centered-buttons">
                        <img class="img" src="/src/images/add_contact.png" alt="conversations"></img>
                        <button class="button">Add new contact</button>
                    </div>
                </div>

                <div>
                    <button class="settingsButton"> Settings</button>
                </div>

                <div>
                    <a href="MainMenu.html" class="home-button">Home</a>
                </div>
            </div>
        </>
    );
}

export default MainPage;
