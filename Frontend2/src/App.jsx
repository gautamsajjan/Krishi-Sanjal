import React from 'react';
import Navbar2 from './Components/Navbar2/Navbar2';
import { Routes, Route } from 'react-router-dom';
import Homepage2 from './pages/Homepage2/Homepage2';
import Footer2 from './Components/Footer2/Footer2';
import Shop from './pages/Shop/Shop';
import Cart2 from './pages/Cart2/Cart2';

const App = () => {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Homepage2 />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart2/>}/>
      </Routes>
      <Footer2 />
    </div>
  );
};

export default App;
