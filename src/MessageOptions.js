import './Styles.css';
import { Link } from 'react-router-dom';

function MessageOptions() {
    return (
        <>
            <div class="container">
                <h1>Message Options</h1>
                <div className='border pb-2'></div>
                <div class="centered-content">
                    <div class="centered-buttons">
                        <button class="button">OK</button>
                        <button class="button">I'm good</button>
                    </div>
                    <div class="centered-buttons">
                        <button class="button">Hi, how are you?</button>
                        <button class="button">I need help</button>
                    </div>
                    <div class="centered-buttons">
                        <button class="button">That sounds good</button>
                        <button class="button">Please call me</button>
                    </div>
                    <div class="centered-buttons">
                        <button class="button">Yes, please</button>
                        <button class="button">Can you come and visit?</button>
                    </div>
                    <div class="centered-buttons">
                        <button class="button">I'm happy to hear from you</button>
                        <button class="button">I can't wait to see you</button>
                    </div>
                    <div>
                        <Link to="/">
                            <button className="home-button">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageOptions;