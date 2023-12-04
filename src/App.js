
import './App.css';
import { CgMenuGridO } from 'react-icons/cg';
import { MdOutlineContactSupport } from "react-icons/md";
import { MdUnsubscribe } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { SiBoost } from "react-icons/si";
import { BsFillFileRuledFill } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { TbHandClick } from "react-icons/tb";
import { useEffect } from 'react';
const telegram = window.Telegram.WebApp
function App() {
  useEffect(() => {   
    telegram.ready();
  })
  return (
    <div className='app_container'>
      <div className='parent_menu_container'>
        <div className='parent_submenu_container'>


          {/* <button className='btn'>
            <span className='icon'><CgMenuGridO className='menu-icon' /></span>
            view menu 
          </button> */}
          <div className='child_menu_container'>
            <ul className='menu'>
              <li className='menu-item'><a href='#'><span className='icon'><TbHandClick className='menu-icon' /></span>How to use crypto</a></li>

              <li className='menu-item'><span className='icon'><MdOutlineContactSupport className='menu-icon' /></span><a href='#'>Support</a></li>

              <li className='menu-item'><span className='icon'><BsFillFileRuledFill  className='menu-icon' /></span><a href='#'>Terms and conditions</a></li>

              <li className='menu-item'><span className='icon'><TfiWrite className='menu-icon' /></span><a href='#'>Proposals</a></li>

              <li className='menu-item'><span className='icon'><SiBoost className='menu-icon' /></span><a href='#'>Boosts</a></li>

              <li className='menu-item'><span className='icon'><MdUnsubscribe className='menu-icon' /></span><a href='#'>Subscription</a></li>

              <li className='menu-item'><span className='icon'><IoWalletSharp className='menu-icon' /></span><a href='#'>Wallet</a></li>

              
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
