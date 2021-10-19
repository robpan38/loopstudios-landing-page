import './App.css';
import Creations from './components/Creations';
import Header from './components/Header';
import Leader from './components/Leader';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import useMediaQuery from './components/useMediaQuery';
import { useState } from 'react';

function App() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const isScreenSmall = useMediaQuery("(max-width: 750px)");

  const handleHamburgerClick = () => {
    setMobileMenuVisibility(!mobileMenuVisibility);
  }

  return (
    <div className="App">
      {mobileMenuVisibility === true ? <MobileMenu handleHamburgerClick={handleHamburgerClick}></MobileMenu> : null}
      {mobileMenuVisibility === false ? <Header handleHamburgerClick={handleHamburgerClick}></Header> : null}
      {mobileMenuVisibility === false ? <Leader/> : null}
      {mobileMenuVisibility === false ? <Creations/> : null}
      {mobileMenuVisibility === false ? <Footer/> : null}
    </div>
  );
}

export default App;
