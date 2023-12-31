
import './polygon.css'
export default function Polygon(){
    return(
        <div class="polygon">
      <div className='polygon-1' >
        <img src='/polygon.png' height={"398.54px"} width={'398.54px'} style={{backgroundColor:"#21112d"}} />
      </div>
      <div class="polygon-1">
        <p class="" style={{fontSize:"48px", fontWeight:"bolder", color:"#AAA8AD", margin:"10px", backgroundColor:"#21112d"}}>Powered By Polygon</p>
        <p className='letterSpacing' style={{backgroundColor:"#21112d"}} >Polygon's scalability and network support are the <br/> foundation of our platform, offering users a seamless <br/> experience in the world of blockchain and NFT lending.</p>
        <p className='letterSpacing' style={{backgroundColor:"#21112d"}}>Polygon-based transactions are not only fast but also<br/> incredibly secure, making our loan systems significantly<br/> more accessible and user-friendly.</p>
      </div>
    </div>
    )
}