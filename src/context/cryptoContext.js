import axios from "axios";
import React from "react";
import CryptoJS from "crypto-js";
const backendUrl = "http://localhost:7042";
const SECRET_KEY= "cf4776472e3e2158e6d529f81cbf158c116197a2"
export const cryptoContext = React.createContext();
export const CryptProvider = ({ children }) => {
  const loginUser = async (user) => {
    console.log("user", user);
    try {
      const { data } = await axios.post(`/api/user-wallet-address/login`, user);
      const userData = data.user
   
      sessionStorage.setItem('userData', JSON.stringify(userData));;
      console.log("data", data);
    } catch (err) {
      console.log("err", err.response.data.message);
    }
  };

  const Addpoints = async (points) => {
      const storedUserData = sessionStorage.getItem('userData');
      const userData= storedUserData ? JSON.parse(storedUserData) : null;
      const address = userData.walletAddress;                
      const point = String(points.points);                
    const encryptedAddress = CryptoJS.AES.encrypt(address, SECRET_KEY).toString();
    console.log("encryptedAddress", encryptedAddress);
    const encryptedPoints = CryptoJS.AES.encrypt(point, SECRET_KEY).toString();
    const joinEcnryptedData = encryptedAddress+ ","+ encryptedPoints;
    
   
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: joinEcnryptedData
        },
      };

      const { data } = await axios.post(`/api/leaderboard/add-points`, points,config);
      console.log("data", data);
    } catch (err) {
      console.log("err", err.response.data.message);
    }
  };

  const AddStake = async (stakes) => {
    try {
      const { data } = await axios.post(`/api/leaderboard/add-stake`, stakes);
      console.log("data", data);
    } catch (err) {
      console.log("err", err.response.data.message);
    }
  };

  const Logout = async () => {
    try {
      const { data } = await axios.get(`/api/user-wallet-address/logout`);
      console.log("data", data);
    } catch (err) {
      console.log("err", err.response.data.message);
    }
  };

  return (
    <cryptoContext.Provider value={{ loginUser, Addpoints, AddStake, Logout }}>
      {children}
    </cryptoContext.Provider>
  );
};
