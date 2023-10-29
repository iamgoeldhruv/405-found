import React, { useState } from 'react'
import { ethers } from "ethers";
import './getLoan.css'
import { a } from '../temp.js'
var signer;

var contract_address = "0x455D9E662F92CEFD83F67344A2df209CB72d03a9";
var borrower=localStorage.getItem("Address")
function GetLoan() {
    let [timeOfRepayment, settimeOfRepayment] = useState(0)
   
    const getLoan= async () =>  {
        
        // remember to change the private key according to the sender u use very impt!
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
        const tx = await signer.sendTransaction({
            to: contract_address,
            data: write_contract.interface.encodeFunctionData('getLoan', [ 0 , 4 ,timeOfRepayment*24*60*60, localStorage.getItem('Address')]),
          });
          await tx.wait();
        // var result = await read_contract.getLoanDetails(0);  
        // console.log(result); 
    }


  
  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(timeOfRepayment);
      getLoan()
  }
  return (
    <div className='user-main'>
        <div className='user-1 box-user'>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Enter Time of repayment in days</label><br/>
            <input type="text" name="" id="" onChange={(e)=> settimeOfRepayment(e.target.value)} />
          <button type='submit' >Submit</button>
          </form>


        </div>
    </div>
  )
}

export default GetLoan