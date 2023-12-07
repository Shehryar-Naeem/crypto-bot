

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CryptoGuide from './pages/CryptoGuide';
import ExclusiveDeals from './pages/ExclusiveDeals';
import Membership from './pages/Membership';
import ModelFindr from './pages/ModelFindr';
import RequestModel from './pages/RequestModel';
import Support from './pages/Support';
import TermsConditions from './pages/TermsConditions';
import Header from './Component/header';
const telegram = window.Telegram.WebApp

function App() {
  useEffect(() => { 


    function setThemeClass() {
      

     document.body.className = telegram.colorScheme;
     
  }

  telegram.onEvent('themeChanged', setThemeClass);
  setThemeClass();
  })
  return (
    
    <>
      <section>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/CryptoGuide' element={<CryptoGuide/>}/>
          <Route path='/ExclusiveDeals' element={<ExclusiveDeals/>}/>
          <Route path='/Membership' element={<Membership/>}/>
          <Route path='/ModelFindr' element={<ModelFindr/>}/>
          <Route path='/RequestModel' element={<RequestModel/>}/>
          <Route path='/Support' element={<Support/>}/>
          <Route path='/TermsConditions' element={<TermsConditions/>}/>
        </Routes>
      </section>
    </>
  );
}

export default App;
