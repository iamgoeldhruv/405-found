
"use client"
import { Link, NavLink } from 'react-router-dom';
// import Link from 'next/link'
import './header.css'


import { a }from '../temp.js'

console.log(a);

// import MetmaskConnect from './metamaskConnection/metamask'


var contract_address = "0x455D9E662F92CEFD83F67344A2df209CB72d03a9"
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// const ethers = require("ethers")

// import ethers from 'ethers'


var wallet;
var signer;

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
       // wallet = new ethers.wallet(accounts[0] , provider);
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

  const getUserBalance = (accountAddress) =>{
    window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
      .then(balance => {
        console.log(ethers.utils.formatEther(balance));
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch(error => {
        console.error("Error fetching balance:", error);
      });
  }

  useEffect(()=>{

    localStorage.setItem("Address", JSON.stringify(defaultAccount))
  },[defaultAccount])

  console.log(userBalance);



  const getDetails = async () => {
    if(window.ethereum){
      let b =  await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider_wallet = new ethers.providers.Web3Provider(window.ethereum);
      
    signer = provider_wallet.getSigner();
    var abi = a["abi"];
    var provider = new ethers.providers.JsonRpcProvider("https://tiniest-yolo-orb.matic-testnet.quiknode.pro/0466df4332e0e044d7de042b71a32ae1dbb55fc5/");
    // const wallet = new ethers.Wallet(keys.loan_giver_privateKey, provider);
    var read_contract = new ethers.Contract(contract_address , abi , provider);
    var write_contract = new ethers.Contract(contract_address , abi , signer);
    const valueToSend = ethers.utils.parseEther('0.001');
    try {
      const tx = await signer.sendTransaction({
        to: contract_address,
        value: valueToSend,
        data: write_contract.interface.encodeFunctionData('provideLoan', ['0xe231B6C3Ae4b7CEfA6dAE841fF2b052C38336238']),
      });
      await tx.wait();
      console.log("Transaction successful!");
    } catch (error) {
      console.error("Transaction error:", error);
    }
    console.log("SIGNER" + signer);
  
    // const transaction = await read_contract.provideLoan(localStorage.getItem("Address"));
    // const receipt = await transaction.wait();
    }
    else{
      console.log("NOT FOUND");
    }

    // console.log(result);
    // console.log("TESTINF");
}
  
const handlepress = async () => {
  getDetails();
}

  // <MetmaskConnect/>
  
    return(
      

    <div class="main" >
    <div class = "main-1">
      <div class="ether-flow">
      <img src="/EtherFlow.svg" alt="" />
      </div>
      <div class="main-1-1">
        <li> <NavLink to="/trade" style={{ textDecoration: 'none'}}>Trade</NavLink></li>
        <li>Dashboard</li>
        <li>Portfolio</li>
      </div>
      <div>
        <button class="button" style={{color:"black"}}  onClick={connectWallet} > {defaultAccount}</button>
        {/* <button class="button" style={{color:"black"}}  onClick={handlepress} > press me </button> */}
      </div>
    </div>

    

    </div>
    
    )
}