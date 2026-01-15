// import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import Home from './Home';
import About from './About';
import Seasons from './Seasons';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/seasons" element={<Seasons />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
