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
        fs.readFile("../build/contracts/Leding.json", (err, data) => {
            if (err) {
                reject(err);
            } else {
                const contract_data = JSON.parse(data);
                resolve(contract_data["abi"]);
            }
        });
    });
};