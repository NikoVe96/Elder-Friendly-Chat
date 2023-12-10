import './Styles.css';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <>
            <div className="container">
                <div className="centered-content">
                    <img className="logoImage" src="images/logo.jpg" alt="logo" />
                    <h1> Elder Friendly Chat</h1>
                    <div className='border pb-10'></div>
                    <div className="centered-buttons">
                        <img className="img" src='images/conversations1.png' alt="conversations"></img>
                        <Link to="/conversations"><button class="button"> View conversations</button></Link>
                    </div>

                    <div className="centered-buttons">
                        <img className="img" src='images/add_contact.png' alt="conversations"></img>
                        <Link to="/add-contact"> <button className="button">Add new contact</button></Link>
                    </div>
                </div>

                <div>
                    <button className="settings-button"> Settings</button>
                </div>
            </div>
        </>
    );
}

export default MainPage;
