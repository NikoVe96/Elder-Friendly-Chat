import './Styles.css';
import { Link } from 'react-router-dom';

function Chat() {

    return (
        <>
            <div className="container">
                <h1>Chat with Frank</h1>
                <div className='border'></div>
                <div className="chat chat-start px-4">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="images/man-avatar.png"></img>
                        </div>
                    </div>
                    <div className="chat-header">
                        Frank
                        <time className="text-xs opacity-50">09:10</time>
                    </div>
                    <div className="chat-bubble bg-sky-500">Hi dad, how are you?</div>
                    <div className="chat-footer opacity-50">

                    </div>
                    <br></br>

                    <div className="chat-bubble bg-sky-500">Can I come and visit you tomorrow?</div>
                    <div className="chat-footer opacity-50">

                    </div>
                </div>
                <div className="chat chat-end px-4">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="images/man-avatar.png" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Poul
                        <time className="text-xs opacity-50">10:26</time>
                    </div>
                    <div className="chat-bubble bg-sky-800">I'm good, thanks. How are you? It would be nice to see you</div>
                    <div className="chat-footer opacity-50">
                        Seen at 11:02
                    </div>
                </div>
                <div className="border-small"></div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow h-32  rounded-box">
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Write a new message..." className="input-chat" />
                        </label>
                    </div>
                    <div className="divider lg:divider-horizontal text-xl">OR</div>
                    <div className="grid flex-grow h-32 rounded-box place-items-center">
                        <Link to="/message-options">
                            <button className="button">
                                Message options
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="join">
                    <Link to="/">
                        <button className="home-button">
                            <span className="btm-nav-label">Home</span>
                        </button>
                    </Link>
                    <Link to='/conversation'>

                    </Link>
                </div>
            </div>
        </>
    )
}

export default Chat;