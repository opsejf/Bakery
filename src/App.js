import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar.js';
// import Banner from './Components/Banner.js';
import Intro from './Components/Intro.js';

import Layout from './Components/Layout.js';
import PageBanner from './Components/PageBanner.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Navbar />
        <Banner /> */}
          <Route path='/' element={<Layout />}>
            <Route path='home' />
            <Route path='cupcakes' element={[<Intro type="cupcakes"/>, <PageBanner type="cupcakes" />]} />
            <Route path='cookies' element={[<Intro type="cookies"/>, <PageBanner type="cookies" />]} />
            <Route path='bread' element={<Intro type="bread"/>} />
            <Route path='pastries' element={<Intro type="pastries" />} />
            <Route path='orders' element={<Intro type="orders"/>} />
            <Route path='basket' element={<Intro type="basket"/>}  />
            <Route path='sign-in' element={<Intro type="sign-in"/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
