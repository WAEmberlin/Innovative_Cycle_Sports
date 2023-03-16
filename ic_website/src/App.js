import './index.css';
import Navigation from './Navbar';
import Home from './Home';
import Inventory from './Inventory';
import About from './About';
import NotFound from './NotFound';
import Social from './Social';
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="App">
        <Navigation />
        <Social />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/Inventory" element={<Inventory />}>
            </Route>
            <Route exact path="/About" element={<About />}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;