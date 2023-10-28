'use client'


// import image1 from './wallet.svg'
import Link from 'next/link';
import { useState ,useEffect } from 'react';
import Headers from './components/header';
import Card from './components/card';
import Polygon from './components/polygon/polygon';

// import './global.css'
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


  const [themeMode, setThememode] = useState("dark")

  const lightTheme = () =>{
    setThememode("light")
  }

  const darkTheme = () =>{
    setThememode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  // provider.getBalance(defaultAccount).then((balance) => {
  //   // convert a currency unit from wei to ether
  //   const balanceInEth = ethers.utils.formatEther(balance)
  //   console.log(`balance: ${balanceInEth} ETH`)
  //  })

  return (
    // <div>
    //   <button onClick={connectWallet}>Connect Wallet</button>
    //   <h3>Address: {defaultAccount}</h3>
    //   <h3>Balance: {userBalance}</h3>
    // </div>
    <div class="main">
      <Headers/>
      <div class="main-2">
      <div class="main-2-1">
      <h1 class="font"  >Unlock the </h1>
      <h1 class="font">Power of Etheruem</h1>

      <p >Grow your wealth with seamless transactions <br/> 
      and boundless opportunites</p>
      </div>

      <div>

      </div>
    </div>

    <div>
      <div class="nft-based">
      The NFT-based loans <br/> are NOW.
      </div>

    </div>
    <div class="mid">
    <div>
      IMAGE
    </div>
    <div class="card">
      <Card heading1={"Lending Ethereum"}  heading2={" with NFT-collateral "} content={"Our platform allows users to use their NFTs as collateral to borrow Ethereum, expanding opportunities in the NFT lending space."} />
    </div>
    <div>
    <Card/>
    </div>
    </div>
    <div>
      <Link href="" class="button"> About EtherFlow  </Link>
    </div>

    <div class="connect-wallet" >
      <div class="connect-wallet-1">
        <p style={{fontSize:"48px", fontWeight:"bolder", color:"#AAA8AD", margin:"10px"}} >Connect Wallet <br/> to get started</p>
        <p> At EtherFlow, we've chosen to implement MetaMask as <br/> our wallet solution. MetaMask is renowned for its <br/> security and user-friendly features, offering a reliable <br/> means to store, manage, and transact with Ethereum<br/> and NFT assets. </p>
      <Link href="" class="button">Continue with MetaMask</Link>
      </div>
      <div>
        <img src="/wallet.svg" alt='image' />
      </div>


    </div>
    <Polygon/>

    </div>

         



  )
}
