
import './App.css';
import Navebar from './component/Navebar';
import React, { useState } from 'react';
import Textbox from './component/Textbox';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import About from './component/About';



function App() {
  const [mode, setMode] = useState('light');
  const [lebalColor, setLebalColor] = useState('black');
  
  let darkmode =() =>{
    if(mode === 'light'){
      setMode('dark');
      setLebalColor('white')
    }
    else{
      setMode('light');
      setLebalColor('black')
    }
  }

  return (
  <>

<Navebar title="Krish" About="About us" mode={mode} darkmode={darkmode} lebalColor={lebalColor}/>

<div className="container">

<Textbox heading="Enter the Text analyze"/>
</div>



  {/* <Router>
    <Navebar title="Krish" About="About us" mode={mode} darkmode={darkmode} lebalColor={lebalColor}/>

    <div className="container">
    <Routes>
          <Route path="/about" element={<About />} /> 
            
          <Route path="/" element={<Textbox heading="Enter the Text analyze"/>} />
      </Routes>
    </div>
    </Router> */}
</>
  );
}

export default App;
