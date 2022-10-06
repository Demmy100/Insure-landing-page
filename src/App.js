
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  return (
    <div className='w-full'>
     <Navbar />
     <Hero />
     <About />
     <Work />
     <Footer />
    </div>
  );
}

export default App;
