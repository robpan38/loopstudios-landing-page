import './MobileMenu.css';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';

const MobileMenu = (props) => {
    return (
        <div className="mobileMenuWrapper">
            <div className="mobileMenuHeader">
                <img className="mobileMenuLogo" src={logo} alt="logo"></img>
                <img className="close" src={close} alt="close" onClick={props.handleHamburgerClick}></img>
            </div>
            <div className="mobileMenuText">
                <p>ABOUT</p>
                <p>CAREERS</p>
                <p>EVENTS</p>
                <p>PRODUCTS</p>
                <p>SUPPORT</p>
            </div>
        </div>    
    );
}

export default MobileMenu;