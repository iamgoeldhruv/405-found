
import Link from 'next/link'
import './header.css'

export default function Headers(){
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
         <Link href="" class="button" > Connect Wallet</Link>
     
      </div>
    </div>

    

    </div>
    
    )
}