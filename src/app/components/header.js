
"use client"
import Link from 'next/link'
import './header.css'

// import MetmaskConnect from './metamaskConnection/metamask'



import React, { useState } from "react";
// import { ethers } from "ethers";

const ethers = require("ethers")




export default function Headers(){
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("Connect Wallet");
  const [userBalance, setUserBalance] = useState("");


  

  const connectWallet = async () => {
    if (window.ethereum) {
      console.log("MetaMask detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        accountChanged(accounts[0]);
      } catch (error) {
        console.log("Error connecting to MetaMask");
      }
    } else {
      setErrorMessage('Install MetaMask');
    }
  }
  

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);

    getUserBalance(accountName);
  }

  const getUserBalance = (accountAddress) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
      .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch(error => {
        console.error("Error fetching balance:", error);
      });
  }

  console.log(userBalance);
  

  // <MetmaskConnect/>
  
    return(
      

    <div class="main" >
    <div class = "main-1">
      <div class="ether-flow">
      EtherFlow
      </div>
      <div class="main-1-1">
        <li>Trade</li>
        <li>Dashboard</li>
        <li>Portfolio</li>
      </div>
      <div>
        <button class="button"  onClick={connectWallet} > {defaultAccount}</button>
     
      </div>
    </div>

    

    </div>
    
    )
}