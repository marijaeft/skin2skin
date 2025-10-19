import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <>
      <div className="drop-bg">
        <NavBar />
        <Hero />
      </div>
      <div className='bg-pink-100'>
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
