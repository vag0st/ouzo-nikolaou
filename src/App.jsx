import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import History from './components/History/History';
import ContactUs from './components/ContactUs/ContactUs';
import ProductsPage from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
