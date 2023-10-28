
import Link from 'next/link'
import './header.css'

  import MetmaskConnect from './metamaskConnection/metamask'

export default function Headers(){
  // <MetmaskConnect/>
  const ConnectMetaMask=()=>{
   
    MetmaskConnect();

  }
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
        <button class="button"  onClick={ConnectMetaMask} > Connect Wallet</button>
     
      </div>
    </div>

    

    </div>
    
    )
}