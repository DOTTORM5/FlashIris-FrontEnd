import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ConfirmationPopup from './components/ConfirmationPopup';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Flash from './components/pages/Flash';
import Voom from './components/pages/Voom';

function App() {

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(true);     // Utilizzo la variabile showConfirmationPopup come variabile di stato per sapere se c'è il popup iniziale attivo, in tal caso devo bloccare varie cose
  const hideConfirmationPopup = () => setShowConfirmationPopup(false);          // Funzione di utiità per settare lo stato a false (quando viene chiuso il popup)


  showConfirmationPopup ? disableBodyScroll(document) : enableBodyScroll(document);   // Disabilito lo scroll se c'è il popup


  // Un giorno bisognerà capire come gestire meglio ste nested root... così è come se fossero ancora flat
  return (
    <>
      <Router>
        <ConfirmationPopup showConfirmationPopup={showConfirmationPopup} hideConfirmationPopup={hideConfirmationPopup}/>
        <Navbar showConfirmationPopup={showConfirmationPopup}/>
        <Routes>
          <Route path='/' exact element={<Home showConfirmationPopup={showConfirmationPopup}/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />}/>
          <Route path='/products/flash' element={<Flash/>} />
          <Route path='/products/voom' element={<Voom/>} />

          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
