'use client'
import Image from 'next/image'
import { useState } from 'react';

import {ethers} from 'ethers'


export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((result) => {
          console.log(result );
          accountChanged(result[0]);
        })
        .catch((error) => {
          // Handle error, if necessary
        });
    } else {
      setErrorMessage('Install MetaMask');
    }
  };
  // console.log(accountChanged);
  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName)
  }

  const  getUserBalance  = () => {
      window.ethereum.request({method:'eth_getBalance', params:[String(accountAddress), "latest"]})
      .then(balance =>{
        const amount = ethers.utils.formatEther(balance)
        setUserBalance(amount)
      })
  }
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
