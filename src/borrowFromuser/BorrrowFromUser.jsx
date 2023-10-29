import React, { useState } from 'react'

import './borrowUser.css'
function BorrrowFromUser() {

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
    const valueToSend = ethers.utils.parseEther(setvalue);
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

  const handleSubmit = () =>{
      getDetails
  }
  return (
    <div className='user-main'>
        <div className='user-1 box-user'>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Enter Amount</label><br/>
            <input type="text" name="" id="" onChange={(e)=> setvalue(e.target.value)} />
          <button  >Submit</button>
          </form>


        </div>
    </div>
  )
}

export default BorrrowFromUser