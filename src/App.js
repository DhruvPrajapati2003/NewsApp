import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=>{

  const [progress, setProgress] = useState(0)
  
  
  
    return (
      <>
      {/* <Routes>
    <Route path="/home" element={<Home/>} />
</Routes> */}
      <Router>
        
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress

        }
        
      />
      <Routes><Route
          exact path="/"
           element={<News setProgress={setProgress}key="home" pageSize={5} country={"in"} category="science"/>}/>
           </Routes>
          <Routes></Routes>
      <Routes><Route
          exact path="/business"
           element={<News setProgress={setProgress}key="business" pageSize={5} country={"in"} category="business"/>}/>
           </Routes>
          <Routes><Route
          exact path="/entertainment"
           element={<News setProgress={setProgress}key="entertainment" pageSize={5} country={"in"} category="entertainment"/>}/>
           </Routes>
          <Routes><Route
          exact path="/generalhealth"
           element={<News setProgress={setProgress}key="generalhealth" pageSize={5} country={"in"} category="generalhealth"/>}/>
           </Routes>
           <Routes><Route
          exact path="/science"
           element={<News setProgress={setProgress}key="science" pageSize={5} country={"in"} category="science"/>}/>
           </Routes>
          <Routes><Route
          exact path="/sports"
           element={<News setProgress={setProgress}key="sports" pageSize={5} country={"in"} category="sports"/>}/>
           </Routes>
          <Routes>   <Route       exact path="/technology"
           element={<News setProgress={setProgress}key="technology" pageSize={5} country={"in"} category="technology"/>}/>
           </Routes>
      </Router>
      </>
    );
  }
  export default App