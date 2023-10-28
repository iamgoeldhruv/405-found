import React, { useState } from "react";
import { ethers } from "ethers";

export default function MetmaskConnect() {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      console.log("MetaMask detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        accountChanged(accounts[0]);
      } catch (error) {
        console.log("Error connecting to MetaMask");
      }
    } else {
      setErrorMessage('Install MetaMask');
    }
  }

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName);
  }

  const getUserBalance = (accountAddress) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
      .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch(error => {
        console.error("Error fetching balance:", error);
      });
  }

  console.log(userBalance);

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <div>{errorMessage}</div>
      <div>Default Account: {defaultAccount}</div>
      <div>User Balance: {userBalance}</div>
    </div>
  );
}
