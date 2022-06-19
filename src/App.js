import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';
import Projects from './components/Projects';
import {useState, useEffect} from 'react'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }
    , 3000);
  }, [loading])
  return (
    <>
      {
        loading ? <LoadingSpinner /> :
        <>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      }

    </>
  );
}

export default App;
