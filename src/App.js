import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Footer from './components/Footer';
import React, { useState } from 'react'

function App() {
  const [Mode, SetMode] = useState("light");
  const toggleMode = () => {
    if(Mode === "light"){
      SetMode("dark");
      document.body.style.background="linear-gradient(to right, #780206, #061161)"
    }else{
      SetMode("light");
      document.body.style.background="white"
    }
  }
  return (
    <>
      <Navbar title="Text Decorator" mode={Mode} toggle={toggleMode}/>
      <div className='container'>
        <TextArea heading="Enter your text here" toggle={toggleMode} mode={Mode}/>        
      </div>
      <Footer madeby="Samriddha Sil" mode={Mode}/>
    </>
  );
}

export default App;
