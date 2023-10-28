import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Polygon from './components/polygon/polygon';
import Footer from './components/footer/foooter';
import Headers from './components/header';

function App() {
  // const [count, setCount] = useState(0)



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
      <h1 class="font "  >Unlock the <br/> Power of <span className='gradient-text'> Etheruem</span> </h1>
      {/* <h1 class="font"></h1> */}

      <p className='letterSpacing' >Grow your wealth with seamless transactions <br/> 
      and boundless opportunites</p>
      <button className='button' style={{color:"black"}}> Get Trading</button>
      
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
      <a href="" class="button" style={{color:"black"}}> About EtherFlow  </a>
    </div>

    <div class="connect-wallet" >
      <div class="connect-wallet-1">
        <p style={{fontSize:"48px", fontWeight:"bolder", color:"#AAA8AD", margin:"10px"}} >Connect Wallet <br/> to get started</p>
        <p className='letterSpacing'> At EtherFlow, we've chosen to implement MetaMask as <br/> our wallet solution. MetaMask is renowned for its <br/> security and user-friendly features, offering a reliable <br/> means to store, manage, and transact with Ethereum<br/> and NFT assets. </p>
      <a href="" class="button" style={{color:"black"}}>Continue with MetaMask</a>
      </div>
      <div>
        <img src="/wallet.svg" alt='image' />
      </div>


    </div>
    <Polygon/>
    <Footer/>
    </div>

  );

 
}

export default App
