const { ethers } = require("ethers");
var Web3 = require('web3');
const fs = require("fs");
var abi;
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



// loadABI();



const func = async ()=>  {
    abi = await loadContractABI();
    var privateKey = "0xc973f78d9cf6356c0b96da06b5c004289794abf1c7bf767d98735998b86b81e8";
var provider = new ethers.JsonRpcProvider("http://10.74.2.186:7545");

var address = "0x6eCBeE08a35F8CDA82f2f30Cc6964f33365D39fa";

var loan_contract = new ethers.Contract(address , abi , provider);

const wallet = new ethers.Wallet(privateKey, provider);

var write_contract = new ethers.Contract(address , abi , wallet);
const decimals = 18;

const result = await write_contract.fundLoan("0x1f5041fC02dCEbeb67d467F24082025943e2Cdbb" , address,"1000000000000000000");

// const balance_after = await write_contract.getAccountBalance(address);
// const result = await write_contract.getAccountBalance("0x1f5041fC02dCEbeb67d467F24082025943e2Cdbb");
}  



func();
