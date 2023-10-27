'use client'
import Image from 'next/image'
import { useState } from 'react';

// import {ethers} from 'ethers'

const ethers = require('ethers')


export default  function Home() {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      console.log("detected");
        try {
          const accounts = await window.ethereum.request({
            method:"eth_requestAccounts"
          }) 
          console.log(accounts);
          accountChanged(accounts[0]);
          
        } catch (error) {
          console.log("error_connecting");
        }
        
    } else {
      setErrorMessage('Install MetaMask');
    }
  };
  // console.log(accountChanged);
  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName)
  }

  const  getUserBalance  = (accountAddress) => {
      window.ethereum.request({method:'eth_getBalance', params:[String(accountAddress), "latest"]})
      .then(balance =>{
        setUserBalance(ethers.formatEther(balance))
      })
  }
  console.log(userBalance);
  // provider.getBalance(defaultAccount).then((balance) => {
  //   // convert a currency unit from wei to ether
  //   const balanceInEth = ethers.utils.formatEther(balance)
  //   console.log(`balance: ${balanceInEth} ETH`)
  //  })

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <h3>Address: {defaultAccount}</h3>
      <h3>Balance: {userBalance}</h3>
    </div>
  )
}
