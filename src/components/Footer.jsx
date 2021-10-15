import './Footer.css';
import logo from '../images/logo.svg';
import fbIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import instagramIcon from '../images/icon-instagram.svg';

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="footerHeader">
                <img className="logo" src={logo} ></img>
                <div className="footerIcons">
                    <img src={fbIcon} alt="fbIcon"></img>
                    <img src={twitterIcon} alt="twitterIcon"></img>
                    <img src={pinterestIcon} alt="pinterestIcon"></img>
                    <img src={instagramIcon} alt="instagramIcon"></img>
                </div>
            </div>
            <div className="footerText">
                <div className="footerMenu">
                    <p>About</p>
                    <p>Careers</p>
                    <p>Events</p>
                    <p>Products</p>
                    <p>Support</p>
                </div>
                <p className="tag">© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;