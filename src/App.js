import React, { useEffect, useState} from 'react';
import './App.css';
import Cover from './components/Cover/Cover';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Slider from './components/Slider/Slider';
import Text from './components/Text/Text';
import Footer from './components/Footer/Footer';

function App() {
  const [currentScroll, setCurrentScroll] = useState(0)

  // posicion del eje Y, hacia abajo o arriba
  const handleScroll = () => {
    const position = window.pageYOffset
    setCurrentScroll(position)
  }

  useEffect(() => {
   window.addEventListener("scroll", handleScroll)
  }, [currentScroll])

  return (
    <div className="App">
      <NavBar scrolling={currentScroll} />
      <Cover />
      <About />
      <Slider scrolling={currentScroll}/>
      <Text scrolling={currentScroll}/>
      <Footer/>
    </div>
  );
}

export default App;
