const { ethers } = require("ethers");
var Web3 = require('web3');
const fs = require("fs");
const keys = require("./constants.js");
const privateKey = keys.private_key;
var abi;
var contract_address = keys.contract_address;


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

const transferMoney = async (sender , reciever , value , private_key) =>  {
    // remember to change the private key according to the sender u use very impt!
    abi = await loadContractABI();
    var provider = new ethers.JsonRpcProvider("http://10.74.2.186:7545");
    const wallet = new ethers.Wallet(private_key, provider);
    var write_contract = new ethers.Contract(contract_address , abi , wallet);
    const valueToSend = ethers.parseEther(value.toString());
    const tx = await wallet.sendTransaction({
        to: contract_address,
        value: valueToSend,
        data: write_contract.interface.encodeFunctionData('sendPaisa', [sender , reciever]),
        });
    await tx.wait();   
}

// transferMoney('0xDc3C64AE200A68e0f38eb1EEc1665D7C0a29BD4d' , '0x897D5bBBEb7740a486ebE880e284FE1eA28D95cF' , '1');


module.exports = transferMoney;