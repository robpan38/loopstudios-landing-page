import './Creations.css';
import useMediaQuery from './useMediaQuery';

const Creations = () => {
    const isScreenSmall = useMediaQuery("(max-width: 750px)");
    
    return (
        <div className="creationsWrapper">
            <div className="creationsHeader">
                <p>Our creations</p>
                {isScreenSmall === false ? <button>See all</button> : null}
            </div>
            <div className="creationsContainer">
                <div className="creation earth">
                    <p>Deep earth</p>
                </div>
                <div className="creation arcade">
                    <p>Night arcade</p>
                </div>
                <div className="creation soccer">
                    <p>Soccer team VR</p>
                </div>
                <div className="creation grid">
                    <p>The grid</p>
                </div>
                <div className="creation above">
                    <p>From up above VR</p>
                </div>
                <div className="creation borealis">
                    <p>Pocket borealis</p>
                </div>
                <div className="creation curiosity">
                    <p>The curiosity</p>
                </div>
                <div className="creation fisheye">
                    <p>Make it fisheye</p>
                </div>
            </div>
            {isScreenSmall === true ? <button>See all</button> : null}
        </div>
    );
}

export default Creations;