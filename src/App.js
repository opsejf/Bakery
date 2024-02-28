import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar.js';
// import Banner from './Components/Banner.js';
import Cupcakes from './Components/Intro.js';

import Layout from './Components/Layout.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Navbar />
        <Banner /> */}
          <Route path='/' element={<Layout />}>
            <Route path='home' />
            <Route path='cupcakes' element={<Cupcakes type="cupcakes"/>} />
            <Route path='cookies' element={<Cupcakes type="cookies"/>} />
            <Route path='bread' element={<Cupcakes type="bread"/>} />
            <Route path='pastries' element={<Cupcakes type="pastries" />} />
            <Route path='orders' element={<Cupcakes type="orders"/>} />
            <Route path='basket' element={<Cupcakes type="basket"/>}  />
            <Route path='sign-in' element={<Cupcakes type="sign-in"/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
