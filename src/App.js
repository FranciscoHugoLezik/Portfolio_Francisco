import React, { useEffect, useState} from 'react';
import Cover from './components/Cover/Cover';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import './App.css';

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
    </div>
  );
}

export default App;
