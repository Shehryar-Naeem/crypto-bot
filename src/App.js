

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
    // <div className='app_container'>
    //   <div className='parent_menu_container'>
    //     <div className='parent_submenu_container'>
    //       <div className='child_menu_container'>
    //         <ul className='menu'>
    //           <li className='menu-item'><Link to='/'><span className='icon'><TbHandClick className='menu-icon' /></span>What is ModelFindr?</Link></li>

    //           <li className='menu-item'><span className='icon'><MdOutlineContactSupport className='menu-icon' /></span><Link to='/'>How to request a model</Link></li>

    //           <li className='menu-item'><span className='icon'><BsFillFileRuledFill  className='menu-icon' /></span><Link to='/'>Membership</Link></li>

    //           <li className='menu-item'><span className='icon'><TfiWrite className='menu-icon' /></span><Link to='/'>Support</Link></li>

    //           <li className='menu-item'><span className='icon'><SiBoost className='menu-icon' /></span><Link to='/'>Exclusive Deals</Link></li>

    //           <li className='menu-item'><span className='icon'><MdUnsubscribe className='menu-icon' /></span><Link to='/'>Crypto Beginner Guide</Link></li>

    //           <li className='menu-item'><span className='icon'><IoWalletSharp className='menu-icon' /></span><Link to='/'>Terms and Conditions</Link></li>

              
    //         </ul>
    //       </div>
    //     </div>
    //   </div>


    // </div>
    <>
      <section>

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
