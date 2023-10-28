'use client'

// import Ethereum from '/Ethereum.svg'

// import image1 from './wallet.svg'
import Link from 'next/link';
import { useState ,useEffect } from 'react';
import Headers from './components/header';
import Card from './components/card';
import Polygon from './components/polygon/polygon';
import Footer from './components/footer/foooter';

// import './global.css'
// import {ethers} from 'ethers'



export default  function Home() {

     


 

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
      <h1 class="font"  >Unlock the <br/> Power of Etheruem </h1>
      {/* <h1 class="font"></h1> */}

      <p className='letterSpacing' >Grow your wealth with seamless transactions <br/> 
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
      <img src='/Ethereum.svg'></img>
      <p  className='card-font'>Lending Ethereum <br/> with NFT-collateral </p>
      <p className='card-font'>Our platform allows <br/> users to use their NFTs <br/> as collateral to borrow <br/> Ethereum, expanding <br/> opportunities in the <br/> NFT lending space.</p>
    </div>
    <div className='card'>
      <img src='/image6.svg'></img>
      <p className='card-font'>Lending Ethereum <br/> with NFT-collateral </p>
      <p className='card-font'>Our platform allows <br/> users to use their NFTs <br/> as collateral to borrow <br/> Ethereum, expanding <br/> opportunities in the <br/> NFT lending space.</p>
    </div>
    </div>
    <div>
      <Link href="" class="button"> About EtherFlow  </Link>
    </div>

    <div class="connect-wallet" >
      <div class="connect-wallet-1">
        <p style={{fontSize:"48px", fontWeight:"bolder", color:"#AAA8AD", margin:"10px"}} >Connect Wallet <br/> to get started</p>
        <p className='letterSpacing'> At EtherFlow, we've chosen to implement MetaMask as <br/> our wallet solution. MetaMask is renowned for its <br/> security and user-friendly features, offering a reliable <br/> means to store, manage, and transact with Ethereum<br/> and NFT assets. </p>
      <Link href="" class="button">Continue with MetaMask</Link>
      </div>
      <div>
        <img src="/wallet.svg" alt='image' />
      </div>


    </div>
    <Polygon/>
    <Footer/>
    </div>

         



  )
}
