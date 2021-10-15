import './App.css';
import Creations from './components/Creations';
import Header from './components/Header';
import Leader from './components/Leader';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Leader/>
      <Creations/>
      <Footer/>
    </div>
  );
}

export default App;
