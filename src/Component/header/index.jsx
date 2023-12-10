import React, { useContext } from 'react'
import { cryptoContext } from '../../context/cryptoContext'

const Header = () => {
  const {loginUser,Addpoints,AddStake,Logout} = useContext(cryptoContext)
  const user={
    walletAddress:"0x21e74d47DA22135Fe60E2ee32f47c543b8dFf915"
  }
  const point={
    points:32
  }
  const stake={
    nft_id:15,
    nft_name:"Nova Auroras"
  }
  return (
    <div>
      <button onClick={()=>{
        loginUser(user)
      }}>Login</button>
      <button onClick={()=>{
        Addpoints(point)
      }}>Add points</button>
      <button onClick={()=>{
        AddStake(stake)
      }}>Add Stake</button>
      <button onClick={()=>{
        Logout( )
      }}>Logout</button>
    </div>
  )
}

export default Header
