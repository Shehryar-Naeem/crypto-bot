import React from 'react'
import './index.css'
import { CgMenuGridO } from 'react-icons/cg';
import { MdOutlineContactSupport } from "react-icons/md";
import { MdUnsubscribe } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { SiBoost } from "react-icons/si";
import { BsFillFileRuledFill } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { TbHandClick } from "react-icons/tb";
import { Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='app_container'>
    <div className='parent_menu_container'>
      <div className='parent_submenu_container'>
        <div className='child_menu_container'>
          <ul className='menu'>
            <li className='menu-item'><Link to='/'><span className='icon'><TbHandClick className='menu-icon' /></span>What is ModelFindr?</Link></li>

            <li className='menu-item'><span className='icon'><MdOutlineContactSupport className='menu-icon' /></span><Link to='/'>How to request a model</Link></li>

            <li className='menu-item'><span className='icon'><BsFillFileRuledFill  className='menu-icon' /></span><Link to='/'>Membership</Link></li>

            <li className='menu-item'><span className='icon'><TfiWrite className='menu-icon' /></span><Link to='/'>Support</Link></li>

            <li className='menu-item'><span className='icon'><SiBoost className='menu-icon' /></span><Link to='/'>Exclusive Deals</Link></li>

            <li className='menu-item'><span className='icon'><MdUnsubscribe className='menu-icon' /></span><Link to='/'>Crypto Beginner Guide</Link></li>

            <li className='menu-item'><span className='icon'><IoWalletSharp className='menu-icon' /></span><Link to='/'>Terms and Conditions</Link></li>

            
          </ul>
        </div>
      </div>
    </div>


  </div>
  )
}

export default Home