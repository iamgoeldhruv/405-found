import React, { useState } from 'react'

import './trade.css'

import { a }from '../temp.js'
import { NavLink } from 'react-router-dom'
export default function Trade() {

  const [value, setvalue] = useState(0)
  const getDetails = async () => {
    if(window.ethereum){
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
    const valueToSend = ethers.utils.parseEther('0.001');
    try {
      const tx = await signer.sendTransaction({
        to: contract_address,
        value: valueToSend,
        data: write_contract.interface.encodeFunctionData('provideLoan', ['0xe231B6C3Ae4b7CEfA6dAE841fF2b052C38336238']),
      });
      await tx.wait();
      console.log("Transaction successful!");
    } catch (error) {
      console.error("Transaction error:", error);
    }
    console.log("SIGNER" + signer);
  
    // const transaction = await read_contract.provideLoan(localStorage.getItem("Address"));
    // const receipt = await transaction.wait();
    }
    else{
      console.log("NOT FOUND");
    }

    // console.log(result);
    // console.log("TESTINF");
}

  let address=localStorage.getItem("Address")
  if(address===null){
    return(
      <p>Please login first</p>
    )
  }
  return (
    <div className='trade-main' >
      <div className='box trade-1 '>
        <img src="" alt="image" />
        <button className='button' ></button>
      </div>
      <div className='box trade-1'>
        <img src="" alt="image" />
        <button className='button' > <NavLink to={"/borrowFromuser"} style={{textDecoration:"none", background:"transparent", color:"black"} }>Provide Loan</NavLink></button>
      </div>
      <div className='box trade-1'>
        <img src="" alt="image" />
        <button className='button' onClick={getDetails} > <NavLink to={"/getLoan"} style={{textDecoration:"none", background:"transparent", color:"black"}  }>Get Loan</NavLink></button>
      </div>
    </div>
  )
}

