import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="drop-bg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
