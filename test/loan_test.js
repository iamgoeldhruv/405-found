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
    var write_contract = new ethers.Contract(contract_address , abi , wallet);
    const valueToSend = ethers.parseEther('5');
    const tx = await wallet.sendTransaction({
        to: contract_address,
        value : valueToSend,
        // data: write_contract.interface.encodeFunctionData('getLoan' , [10 , 6 , 27900 , '0xDc3C64AE200A68e0f38eb1EEc1665D7C0a29BD4d' , '0x897D5bBBEb7740a486ebE880e284FE1eA28D95cF']),
        data: write_contract.interface.encodeFunctionData('provideLoan' , [5 , "0xCF96db4A9b6d31F9d100cB61fbB42225d32c0ea0"]),
        });
    await tx.wait();   
}

getLoan()