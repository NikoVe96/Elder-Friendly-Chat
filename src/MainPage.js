import logo from './images/logo.jpg';
import './Styles.css';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <>
            <div className="container">
                <div className="centered-content">
                    <img className="logoImage" src={require('./images/logo.jpg')} alt="logo" />
                    <h1> Elder Friendly Chat</h1>

                    <div className="centered-buttons">
                        <img className="img" src={require('./images/conversations1.png')} alt="conversations"></img>
                        <Link to="/conversations"><button class="button"> View conversations</button></Link>
                    </div>

                    <div className="centered-buttons">
                        <img className="img" src={require('./images/add_contact.png')} alt="conversations"></img>
                        <button className="button">Add new contact</button>
                    </div>
                </div>

                <div>
                    <button className="settingsButton"> Settings</button>
                </div>
            </div>
        </>
    );
}

export default MainPage;
