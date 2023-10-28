const { ethers } = require("ethers");
var Web3 = require('web3');
const fs = require("fs");
const keys = require("./constants.js");
var abi;
var contract_address = keys.contract_address;
const privateKey = keys.private_key;
const sender_privateKey = keys.sender_privateKey;

const loadContractABI = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile("../build/contracts/Loan.json", (err, data) => {
            if (err) {
                reject(err);
            } else {
                const contract_data = JSON.parse(data);
                resolve(contract_data["abi"]);
            }
        });
    });
};

const getLoan= async (sender , reciever , value) =>  {
    // remember to change the private key according to the sender u use very impt!
    abi = await loadContractABI();
    var provider = new ethers.JsonRpcProvider("http://10.74.2.186:7545");
    const wallet = new ethers.Wallet(keys.loan_giver_privateKey, provider);
    var read_contract = new ethers.Contract(contract_address , abi , provider);
    var write_contract = new ethers.Contract(contract_address , abi , wallet);
    const valueToSend = ethers.parseEther('1');
    const tx = await wallet.sendTransaction({
        to: contract_address,
        // value : valueToSend,
        // data: write_contract.interface.encodeFunctionData('provideLoan' , ['0xef37AE63B3CFDa9E99ca7aA4D72255dec7c4624D']),
        data: write_contract.interface.encodeFunctionData('getLoan' , [0,6,27900, '0x011f1c1A270c9769373fc985ee2f2Ade9c8Fb384']),
        // data : write_contract.interface.encodeFunctionData('automaticMonthlyPayment' , [1])
        });
    await tx.wait();
    // var result = await read_contract.getLoanDetails(0);  
    // console.log(result); 
}

getLoan()