import './Header.css';
import logo from '../images/logo.svg';

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="headerMenuWrapper">
                <img src={logo} alt="logo"></img>
                <div className="headerMenu">
                    <p>About</p>
                    <p>Careers</p>
                    <p>Events</p>
                    <p>Products</p>
                    <p>Support</p>
                </div>
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