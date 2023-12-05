import React from 'react'
import './index.css'
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
          <Link to='/ModelFindr'><li className='menu-item'><span className='icon'><TbHandClick className='menu-icon' /></span>What is ModelFindr?</li></Link>

          <Link to='/RequestModel'> <li className='menu-item'><span className='icon'><MdOutlineContactSupport className='menu-icon' /></span>How to request a model</li></Link>

          <Link to='/Membership'><li className='menu-item'><span className='icon'><BsFillFileRuledFill  className='menu-icon' /></span>Membership</li></Link>

          <Link to='/Support'> <li className='menu-item'><span className='icon'><TfiWrite className='menu-icon' /></span>Support</li></Link>

          <Link to='/ExclusiveDeals'><li className='menu-item'><span className='icon'><SiBoost className='menu-icon' /></span>Exclusive Deals</li></Link>

          <Link to='/CryptoGuide'> <li className='menu-item'><span className='icon'><MdUnsubscribe className='menu-icon' /></span>Crypto Beginner Guide</li></Link>

          <Link to='/TermsConditions'>  <li className='menu-item'><span className='icon'><IoWalletSharp className='menu-icon' /></span>Terms and Conditions</li></Link>

            
          </ul>
        </div>
      </div>
    </div>


  </div>
  )
}

export default Home