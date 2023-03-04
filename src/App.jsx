import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import History from './components/History/History';
import ContactUs from './components/ContactUs/ContactUs';
import ProductsPage from './components/Products/Products';
import AgeDisclaimer from './components/AgeDisclaimer/AgeDisclaimer';
import CookieBanner from './components/CookieBanner/CookieBanner';
import Ouzo from './components/Products/Ouzo';
import Liker from './components/Products/Liker';
import Krasi from './components/Products/Krasi';
import Tsipouro from './components/Products/Tsipouro';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AgeDisclaimer />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsPage />}>
          <Route path="/products/ouzo" element={<Ouzo />} />
          <Route path="/products/liker" element={<Liker />} />
          <Route path="/products/krasi" element={<Krasi />} />
          <Route path="/products/tsipouro" element={<Tsipouro />} />
        </Route>
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
