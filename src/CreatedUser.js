import React from "react";
import { Link } from "react-router-dom";

function CreatedUser() {

    return (
        <div className="container">
            <div className="centered-content">
                <img className="logoImage" src="images/logo.jpg" alt="logo" />
                <h1> Elder Friendly Chat</h1>
                <div className='border pb-10'></div>
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2> Congratulations!</h2>
                <br></br>
                <h4> You've now signed up and can start using the elder friendly chat</h4>
                <h4> When you're ready to explore the app, press the home button</h4>
            </div>
            <div>
                <Link to="/home"><button className="home-button"> Home</button></Link>
            </div>
        </div>
    )
}

export default CreatedUser;