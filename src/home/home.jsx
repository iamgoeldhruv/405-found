import React, { useEffect, useState } from 'react'
import Polygon from '../components/polygon/polygon'

import './home.css'
import { NavLink } from 'react-router-dom'
function Home() {


    return (
        // <div>
        //   <button onClick={connectWallet}>Connect Wallet</button>
        //   <h3>Address: {defaultAccount}</h3>
        //   <h3>Balance: {userBalance}</h3>
        // </div>
        <div class="main">
          {/* <Headers/> */}
          <div class="main-2">
          <div class="main-2-1">
          <h1 class="font "  >Unlock the <br/> Power of <span className='gradient-text'> Ethereum</span> </h1>
          {/* <h1 class="font"></h1> */}
    
          <p className='letterSpacing' >Grow your wealth with seamless transactions <br/> 
          and boundless opportunites</p>
          <button className='button' style={{color:"black"}}  ><NavLink to={"/trade"} style={{ textDecoration: 'none', background:"transparent", color:"black" } } > Get Trading</NavLink> </button>
          
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
          <img style={{backgroundColor:"#2D2D2D"}} src='/Ethereum.svg'></img>
          <p style={{backgroundColor:"#2D2D2D"}} className='card-font'>Lending Ethereum <br/> with NFT-collateral </p>
          <p style={{backgroundColor:"#2D2D2D"}} className='card-font'>Our platform allows <br/> users to use their NFTs <br/> as collateral to borrow <br/> Ethereum, expanding <br/> opportunities in the <br/> NFT lending space.</p>
        </div>
        <div  className='card'>
          <img style={{backgroundColor:"#2D2D2D"}} src='/image6.svg'></img>
          <p style={{backgroundColor:"#2D2D2D"}} className='card-font'>Lending Ethereum <br/> with NFT-collateral </p>
          <p style={{backgroundColor:"#2D2D2D"}} className='card-font'>Our platform allows <br/> users to use their NFTs <br/> as collateral to borrow <br/> Ethereum, expanding <br/> opportunities in the <br/> NFT lending space.</p>
        </div>
        </div>
        <div>
          <button href="" class="button" style={{color:"black"}} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}> About EtherFlow  </button>
        </div>
    
        <div class="connect-wallet">
          <div class="connect-wallet-1">
            <p style={{fontSize:"48px", fontWeight:"bolder", color:"#AAA8AD", margin:"10px"}} >Connect Wallet <br/> to get started</p>
            <p className='letterSpacing'> At EtherFlow, we've chosen to implement MetaMask as <br/> our wallet solution. MetaMask is renowned for its <br/> security and user-friendly features, offering a reliable <br/> means to store, manage, and transact with Ethereum<br/> and NFT assets. </p>
         <button class="button" style={{color:"black"}} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Continue with MetaMask</button> 
          </div>
          <div>
            <img src="/wallet.svg" alt='image' />
          </div>
    
    
        </div>
        <Polygon/>
        {/* <Footer/> */}
        </div>
    )    
}

export default Home