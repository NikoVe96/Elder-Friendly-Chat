import { Link } from "react-router-dom";


function LogIn() {

    return (
        <>
            <div className="container">
                <div>
                    <h1 class="header">Elderly Chat Log-In</h1>
                </div>
                <div class="loginfield">
                    <img class="profilepicture" src="images/avatar-face.png" alt="Face Image"></img>
                    <label for="fname">Username:</label>
                    <input className="input" type="text" id="fname" name="fname"></input>
                    <br></br>
                    <label for="lname">Password:</label>
                    <input className="input" type="text" id="lname" name="lname"></input>
                    <br></br>
                    <button class="button"> Log in</button>
                </div>
            </div>
        </>
    )
}

export default LogIn;