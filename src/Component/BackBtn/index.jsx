import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import "./index.css"
import { Link } from 'react-router-dom';
const BackBtn = () => {
  return (
    <Link className='back_btn' to="/"><span ><IoIosArrowBack className='menu-icon'/></span>Back</Link>
  )
}

export default BackBtn