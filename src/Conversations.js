import './Styles.css';
import { Link } from 'react-router-dom';

function Conversations() {
    return (
        <>
            <div className="container">
                <h1>Conversations</h1>
                <div className="centered-content-Conversations">
                    <Link to="/chat"><figure>
                        <img src="images/man-avatar.png" alt="avatar" width="60" height="60" className="img"></img>
                        <figcaption> Frank </figcaption>
                        <p>Hi Poul, are we still on for that fishing trip this weekend?</p>
                    </figure></Link>
                </div>

                <div className="centered-content-Conversations">
                    <figure>
                        <img src="images/man2-avatar.png" alt="avatar2" width="60" height="60" className="img"></img>
                        <figcaption> Eric </figcaption>
                        <p>Hi dad, could you and mum still babysit this weekend?</p>
                    </figure>
                </div>
                <div className="centered-content-Conversations">
                    <figure>
                        <img src="images/woman-avatar.png" alt="avatar3" width="60" height="60" className="img"></img>
                        <figcaption> Camilla </figcaption>
                        <p>Hi dad, we are gonna need some indicators regarding your wishlist</p>
                    </figure>
                </div>
                <div>
                    <button className="new-conversation-button">New conversation</button>
                </div>
                <div>
                    <Link to="/">
                        <button className="home-button">Home</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Conversations;
