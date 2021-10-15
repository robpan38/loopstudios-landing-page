import './Leader.css';
import vrGuyDesktop from '../images/desktop/image-interactive.jpg';

const Leader = () => {
    return (
        <div className="leaderWrapper">
            <img src={vrGuyDesktop} alt="vrGuy"></img>
            <div class="leaderTextWrapper">
                <p className="leaderTitle">The leader in interactive VR</p>
                <p className="leaderDescription">
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
    projects for some of the best companies around the globe. Our award-winning 
    creations have transformed businesses through digital experiences that bind 
    to their brand.
                </p>
            </div>
        </div>
    );
}

export default Leader;