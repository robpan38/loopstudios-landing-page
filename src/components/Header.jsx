import './Header.css';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import useMediaQuery from './useMediaQuery';

const Header = (props) => {
    const isScreenSmall = useMediaQuery("(max-width: 750px)");

    return (
        <div className="headerWrapper">
            <div className="headerMenuWrapper">
                <img className="headerLogo" src={logo} alt="logo"></img>
                {isScreenSmall === false ? 
                    <div className="headerMenu">
                        <p>About</p>
                        <p>Careers</p>
                        <p>Events</p>
                        <p>Products</p>
                        <p>Support</p>
                    </div>
                :
                    <img className="hamburger" src={hamburger} alt="hamburger" onClick={props.handleHamburgerClick}></img>
                }
            </div>
            <div className="headerText">
                <p>Immersive</p>
                <p>experiences</p>
                <p>that deliver</p>
            </div>
        </div>
    );
}

export default Header;