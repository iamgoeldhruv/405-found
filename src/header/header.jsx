
"use client"
import { Link, NavLink } from 'react-router-dom';
// import Link from 'next/link'
import './header.css'


var a = {
    "contractName": "Loan",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "name": "Log",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "loan_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount_borrowed",
                "type": "uint256"
              },
              {
                "internalType": "int256",
                "name": "interest_rate",
                "type": "int256"
              },
              {
                "internalType": "uint256",
                "name": "time_of_repayment",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "borrower_id",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "sender_id",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount_repayed",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isRepaid",
                "type": "bool"
              }
            ],
            "indexed": false,
            "internalType": "struct Loan.Loan_info",
            "name": "loan",
            "type": "tuple"
          }
        ],
        "name": "LogMapping",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "loan_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "loan_amount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "loan_provider",
                "type": "address"
              }
            ],
            "indexed": false,
            "internalType": "struct Loan.Loan_given",
            "name": "loan",
            "type": "tuple"
          }
        ],
        "name": "LogMappingProvided",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "LogSender",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "LogValue",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "LogValueAfter",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "LogValueBefore",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "loanCollaterals",
        "outputs": [
          {
            "internalType": "address",
            "name": "nftContract",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "loansByBorrower",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "loan_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount_borrowed",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "interest_rate",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "time_of_repayment",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "borrower_id",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "sender_id",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount_repayed",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isRepaid",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "loansByReciever",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "loan_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount_borrowed",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "interest_rate",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "time_of_repayment",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "borrower_id",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "sender_id",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount_repayed",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isRepaid",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "loansProvidedByTheirValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "loans_mapping",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "loan_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount_borrowed",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "interest_rate",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "time_of_repayment",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "borrower_id",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "sender_id",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount_repayed",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isRepaid",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "provided_loans",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "loan_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "loan_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "loan_provider",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "sendPaisa",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "loan_provider",
            "type": "address"
          }
        ],
        "name": "provideLoan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loan_id",
            "type": "uint256"
          }
        ],
        "name": "checkProvidedLoans",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "loan_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "loan_amount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "loan_provider",
                "type": "address"
              }
            ],
            "internalType": "struct Loan.Loan_given",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "provided_loanID",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "_interest_rate",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "_time_of_repayment",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_borrower_id",
            "type": "address"
          }
        ],
        "name": "getLoan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loan_id",
            "type": "uint256"
          }
        ],
        "name": "cancelLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          }
        ],
        "name": "automaticMonthlyPayment",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "nftContract",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "depositCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "target_address",
            "type": "address"
          }
        ],
        "name": "getAccountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "loan_id",
            "type": "uint256"
          }
        ],
        "name": "getLoanDetails",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "loan_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount_borrowed",
                "type": "uint256"
              },
              {
                "internalType": "int256",
                "name": "interest_rate",
                "type": "int256"
              },
              {
                "internalType": "uint256",
                "name": "time_of_repayment",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "borrower_id",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "sender_id",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount_repayed",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isRepaid",
                "type": "bool"
              }
            ],
            "internalType": "struct Loan.Loan_info",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.1+commit.e6f7d5a4\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"name\":\"Log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount_borrowed\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"interest_rate\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"time_of_repayment\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"borrower_id\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"sender_id\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount_repayed\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isRepaid\",\"type\":\"bool\"}],\"indexed\":false,\"internalType\":\"struct Loan.Loan_info\",\"name\":\"loan\",\"type\":\"tuple\"}],\"name\":\"LogMapping\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"loan_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"loan_provider\",\"type\":\"address\"}],\"indexed\":false,\"internalType\":\"struct Loan.Loan_given\",\"name\":\"loan\",\"type\":\"tuple\"}],\"name\":\"LogMappingProvided\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"LogSender\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"LogValue\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"LogValueAfter\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"LogValueBefore\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"loanId\",\"type\":\"uint256\"}],\"name\":\"automaticMonthlyPayment\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"}],\"name\":\"cancelLoan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"}],\"name\":\"checkProvidedLoans\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"loan_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"loan_provider\",\"type\":\"address\"}],\"internalType\":\"struct Loan.Loan_given\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"loanId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"nftContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"depositCollateral\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target_address\",\"type\":\"address\"}],\"name\":\"getAccountBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"provided_loanID\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_interest_rate\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_time_of_repayment\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"_borrower_id\",\"type\":\"address\"}],\"name\":\"getLoan\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"}],\"name\":\"getLoanDetails\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount_borrowed\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"interest_rate\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"time_of_repayment\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"borrower_id\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"sender_id\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount_repayed\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isRepaid\",\"type\":\"bool\"}],\"internalType\":\"struct Loan.Loan_info\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"loanCollaterals\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"nftContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"loansByBorrower\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount_borrowed\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"interest_rate\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"time_of_repayment\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"borrower_id\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"sender_id\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount_repayed\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isRepaid\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"loansByReciever\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount_borrowed\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"interest_rate\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"time_of_repayment\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"borrower_id\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"sender_id\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount_repayed\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isRepaid\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"loansProvidedByTheirValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"loans_mapping\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount_borrowed\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"interest_rate\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"time_of_repayment\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"borrower_id\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"sender_id\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount_repayed\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isRepaid\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"loan_provider\",\"type\":\"address\"}],\"name\":\"provideLoan\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"provided_loans\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"loan_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"loan_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"loan_provider\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"sendPaisa\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/loan.sol\":\"Loan\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/loan.sol\":{\"keccak256\":\"0x59ffc0f40fffacc4b02bdd2700b46aa61074276e31f27f065d263e0c8837677c\",\"urls\":[\"bzz-raw://318e84fbb5c5e23722d21b9af069f2913044d04310ffdca3b00ac6bf08482256\",\"dweb:/ipfs/QmQjyq29vvPjneFHkV3EtG719Hn2BfL7oUzk8YwjAqZEAY\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50611f75806100206000396000f3fe6080604052600436106100e85760003560e01c80638118785c1161008a578063e0e539a911610059578063e0e539a914610326578063e98210b114610342578063ebea51b414610386578063fa47034d146103af576100e8565b80638118785c1461026557806393423e9c146102a4578063bdbfa3de146102e1578063e0bd38ac1461030a576100e8565b80634b7f1e5a116100c65780634b7f1e5a1461016957806350ed73b7146101ad57806366877b8d146101eb5780637c4ea6c314610228576100e8565b806301477e78146100ed5780633dec37fc146101315780633e4e6f091461014d575b600080fd5b3480156100f957600080fd5b50610114600480360361010f91908101906115e7565b6103ec565b604051610128989796959493929190611dba565b60405180910390f35b61014b60048036036101469190810190611623565b61049b565b005b61016760048036036101629190810190611582565b6108e5565b005b34801561017557600080fd5b50610190600480360361018b91908101906115e7565b6109ac565b6040516101a4989796959493929190611dba565b60405180910390f35b3480156101b957600080fd5b506101d460048036036101cf9190810190611623565b610a5b565b6040516101e2929190611bc8565b60405180910390f35b3480156101f757600080fd5b50610212600480360361020d9190810190611623565b610a9f565b60405161021f9190611d4c565b60405180910390f35b34801561023457600080fd5b5061024f600480360361024a9190810190611623565b610bc6565b60405161025c9190611d68565b60405180910390f35b34801561027157600080fd5b5061028c60048036036102879190810190611623565b610bde565b60405161029b93929190611d83565b60405180910390f35b3480156102b057600080fd5b506102cb60048036036102c69190810190611582565b610c28565b6040516102d89190611d68565b60405180910390f35b3480156102ed57600080fd5b5061030860048036036103039190810190611623565b610c49565b005b610324600480360361031f919081019061169b565b610cec565b005b610340600480360361033b91908101906115ab565b610f87565b005b34801561034e57600080fd5b5061036960048036036103649190810190611623565b6110af565b60405161037d989796959493929190611dba565b60405180910390f35b34801561039257600080fd5b506103ad60048036036103a8919081019061164c565b611144565b005b3480156103bb57600080fd5b506103d660048036036103d19190810190611623565b611388565b6040516103e39190611d31565b60405180910390f35b6006602052816000526040600020818154811061040557fe5b9060005260206000209060080201600091509150508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154908060070160009054906101000a900460ff16905088565b600060026000838152602001908152602001600020905060006104bd8361141f565b90507ffcf771399d75a67a6d0e730ae98d34c40b6bfe6ebf8053b98ddf4da8c2706250816040516104ee9190611d68565b60405180910390a18160070160009054906101000a900460ff1615610548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053f90611c71565b60405180910390fd5b808260040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163110156105c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bd90611d11565b60405180910390fd5b7fff9551e65e8c4b23f8b51bea123b089e63dbc2cb2086812e9c2b0a66e32fe87e8260050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16316040516106309190611d68565b60405180910390a160008260050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505090507f7210c853725826709864619cfc3e4ea02861e4a8c2f14c3fa8e65d18cf748bda8360050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16316040516106ff9190611d68565b60405180910390a180610747576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073e90611cb1565b60405180910390fd5b818360060160008282540192505081905550620151808360030160008282540192505081905550826001015483600601541061079b5760018360070160006101000a81548160ff0219169083151502179055505b8260026000868152602001908152602001600020600082015481600001556001820154816001015560028201548160020155600382015481600301556004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600682015481600601556007820160009054906101000a900460ff168160070160006101000a81548160ff02191690831515021790555090505050505050565b6108ed611484565b604051806060016040528060015481526020013481526020018373ffffffffffffffffffffffffffffffffffffffff16815250905080600360006001548152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506001600081548092919060010191905055505050565b600560205281600052604060002081815481106109c557fe5b9060005260206000209060080201600091509150508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154908060070160009054906101000a900460ff16905088565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b610aa76114bb565b6002600083815260200190815260200160002060405180610100016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050919050565b60076020528060005260406000206000915090505481565b60036020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600260008281526020019081526020016000206000808201600090556001820160009055600282016000905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556005820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560068201600090556007820160006101000a81549060ff0219169055505050565b60006003600086815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006003600087815260200190815260200160002060010154905080471015610d85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7c90611c51565b60405180910390fd5b610d8d6114bb565b60405180610100016040528060005481526020018381526020018781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090508060026000805481526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c0820151816006015560e08201518160070160006101000a81548160ff021916908315150217905550905050600080815480929190600101919050555060008473ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f19350505050905080610f7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7490611c11565b60405180910390fd5b5050505050505050565b348273ffffffffffffffffffffffffffffffffffffffff16311015610fe1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd890611bf1565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505090508061105a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105190611cd1565b60405180910390fd5b7ff950957d2407bed19dc99b718b46b4ce6090c05589006dfb86fd22c34865b23e828373ffffffffffffffffffffffffffffffffffffffff16316040516110a2929190611b9f565b60405180910390a1505050565b60026020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154908060070160009054906101000a900460ff16905088565b6002600084815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111df90611c91565b60405180910390fd5b6002600084815260200190815260200160002060070160009054906101000a900460ff161561124c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124390611cf1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166004600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146112f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e890611c31565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001828152506004600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050505050565b611390611484565b6003600083815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60008060026000848152602001908152602001600020905060008160060154606483600201546064018460010154028161145557fe5b04039050600062015180836003015442038161146d57fe5b04905080828161147957fe5b049350505050919050565b60405180606001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60405180610100016040528060008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b60008135905061153d81611ee3565b92915050565b60008135905061155281611efa565b92915050565b60008135905061156781611f11565b92915050565b60008135905061157c81611f28565b92915050565b60006020828403121561159457600080fd5b60006115a28482850161152e565b91505092915050565b600080604083850312156115be57600080fd5b60006115cc85828601611543565b92505060206115dd85828601611543565b9150509250929050565b600080604083850312156115fa57600080fd5b60006116088582860161152e565b92505060206116198582860161156d565b9150509250929050565b60006020828403121561163557600080fd5b60006116438482850161156d565b91505092915050565b60008060006060848603121561166157600080fd5b600061166f8682870161156d565b93505060206116808682870161152e565b92505060406116918682870161156d565b9150509250925092565b600080600080608085870312156116b157600080fd5b60006116bf8782880161156d565b94505060206116d087828801611558565b93505060406116e18782880161156d565b92505060606116f287828801611543565b91505092959194509250565b61170781611ead565b82525050565b61171681611e5b565b82525050565b61172581611e5b565b82525050565b61173481611e49565b82525050565b61174381611e49565b82525050565b61175281611e6d565b82525050565b61176181611e6d565b82525050565b61177081611e79565b82525050565b61177f81611e79565b82525050565b6000611792601283611e38565b91507f496e73756666696369656e742046756e647300000000000000000000000000006000830152602082019050919050565b60006117d2602483611e38565b91507f4661696c656420746f2073656e6420457468657220746f2074686520626f727260008301527f6f776572000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611838602d83611e38565b91507f436f6c6c61746572616c20697320616c7265616479206465706f73697465642060008301527f666f722074686973206c6f616e000000000000000000000000000000000000006020830152604082019050919050565b600061189e602083611e38565b91507f436f6e74726163742062616c616e636520697320696e73756666696369656e746000830152602082019050919050565b60006118de601683611e38565b91507f4c6f616e20697320616c726561647920726570616964000000000000000000006000830152602082019050919050565b600061191e602883611e38565b91507f4f6e6c792074686520626f72726f7765722063616e206465706f73697420636f60008301527f6c6c61746572616c0000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611984601683611e38565b91507f4661696c656420746f2073656e64207061796d656e74000000000000000000006000830152602082019050919050565b60006119c4601383611e38565b91507f5472616e73616374696f6e204661696c656421000000000000000000000000006000830152602082019050919050565b6000611a04603083611e38565b91507f436f6c6c61746572616c2063616e6e6f74206265206465706f7369746564206660008301527f6f72206120726570616964206c6f616e000000000000000000000000000000006020830152604082019050919050565b6000611a6a601d83611e38565b91507f496e73756666696369656e7420636f6e74726163742062616c616e63650000006000830152602082019050919050565b606082016000820151611ab36000850182611b81565b506020820151611ac66020850182611b81565b506040820151611ad9604085018261172b565b50505050565b61010082016000820151611af66000850182611b81565b506020820151611b096020850182611b81565b506040820151611b1c6040850182611767565b506060820151611b2f6060850182611b81565b506080820151611b42608085018261170d565b5060a0820151611b5560a085018261170d565b5060c0820151611b6860c0850182611b81565b5060e0820151611b7b60e0850182611749565b50505050565b611b8a81611ea3565b82525050565b611b9981611ea3565b82525050565b6000604082019050611bb460008301856116fe565b611bc16020830184611b90565b9392505050565b6000604082019050611bdd600083018561173a565b611bea6020830184611b90565b9392505050565b60006020820190508181036000830152611c0a81611785565b9050919050565b60006020820190508181036000830152611c2a816117c5565b9050919050565b60006020820190508181036000830152611c4a8161182b565b9050919050565b60006020820190508181036000830152611c6a81611891565b9050919050565b60006020820190508181036000830152611c8a816118d1565b9050919050565b60006020820190508181036000830152611caa81611911565b9050919050565b60006020820190508181036000830152611cca81611977565b9050919050565b60006020820190508181036000830152611cea816119b7565b9050919050565b60006020820190508181036000830152611d0a816119f7565b9050919050565b60006020820190508181036000830152611d2a81611a5d565b9050919050565b6000606082019050611d466000830184611a9d565b92915050565b600061010082019050611d626000830184611adf565b92915050565b6000602082019050611d7d6000830184611b90565b92915050565b6000606082019050611d986000830186611b90565b611da56020830185611b90565b611db2604083018461173a565b949350505050565b600061010082019050611dd0600083018b611b90565b611ddd602083018a611b90565b611dea6040830189611776565b611df76060830188611b90565b611e04608083018761171c565b611e1160a083018661171c565b611e1e60c0830185611b90565b611e2b60e0830184611758565b9998505050505050505050565b600082825260208201905092915050565b6000611e5482611e83565b9050919050565b6000611e6682611e83565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611eb882611ebf565b9050919050565b6000611eca82611ed1565b9050919050565b6000611edc82611e83565b9050919050565b611eec81611e49565b8114611ef757600080fd5b50565b611f0381611e5b565b8114611f0e57600080fd5b50565b611f1a81611e79565b8114611f2557600080fd5b50565b611f3181611ea3565b8114611f3c57600080fd5b5056fea264697066735822122008c4a33395578f529f5615bc82211760e140805c9c2ef95d1b5b99fd47efbf0e64736f6c63430006010033",
    "deployedBytecode": "0x6080604052600436106100e85760003560e01c80638118785c1161008a578063e0e539a911610059578063e0e539a914610326578063e98210b114610342578063ebea51b414610386578063fa47034d146103af576100e8565b80638118785c1461026557806393423e9c146102a4578063bdbfa3de146102e1578063e0bd38ac1461030a576100e8565b80634b7f1e5a116100c65780634b7f1e5a1461016957806350ed73b7146101ad57806366877b8d146101eb5780637c4ea6c314610228576100e8565b806301477e78146100ed5780633dec37fc146101315780633e4e6f091461014d575b600080fd5b3480156100f957600080fd5b50610114600480360361010f91908101906115e7565b6103ec565b604051610128989796959493929190611dba565b60405180910390f35b61014b60048036036101469190810190611623565b61049b565b005b61016760048036036101629190810190611582565b6108e5565b005b34801561017557600080fd5b50610190600480360361018b91908101906115e7565b6109ac565b6040516101a4989796959493929190611dba565b60405180910390f35b3480156101b957600080fd5b506101d460048036036101cf9190810190611623565b610a5b565b6040516101e2929190611bc8565b60405180910390f35b3480156101f757600080fd5b50610212600480360361020d9190810190611623565b610a9f565b60405161021f9190611d4c565b60405180910390f35b34801561023457600080fd5b5061024f600480360361024a9190810190611623565b610bc6565b60405161025c9190611d68565b60405180910390f35b34801561027157600080fd5b5061028c60048036036102879190810190611623565b610bde565b60405161029b93929190611d83565b60405180910390f35b3480156102b057600080fd5b506102cb60048036036102c69190810190611582565b610c28565b6040516102d89190611d68565b60405180910390f35b3480156102ed57600080fd5b5061030860048036036103039190810190611623565b610c49565b005b610324600480360361031f919081019061169b565b610cec565b005b610340600480360361033b91908101906115ab565b610f87565b005b34801561034e57600080fd5b5061036960048036036103649190810190611623565b6110af565b60405161037d989796959493929190611dba565b60405180910390f35b34801561039257600080fd5b506103ad60048036036103a8919081019061164c565b611144565b005b3480156103bb57600080fd5b506103d660048036036103d19190810190611623565b611388565b6040516103e39190611d31565b60405180910390f35b6006602052816000526040600020818154811061040557fe5b9060005260206000209060080201600091509150508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154908060070160009054906101000a900460ff16905088565b600060026000838152602001908152602001600020905060006104bd8361141f565b90507ffcf771399d75a67a6d0e730ae98d34c40b6bfe6ebf8053b98ddf4da8c2706250816040516104ee9190611d68565b60405180910390a18160070160009054906101000a900460ff1615610548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053f90611c71565b60405180910390fd5b808260040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163110156105c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bd90611d11565b60405180910390fd5b7fff9551e65e8c4b23f8b51bea123b089e63dbc2cb2086812e9c2b0a66e32fe87e8260050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16316040516106309190611d68565b60405180910390a160008260050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505090507f7210c853725826709864619cfc3e4ea02861e4a8c2f14c3fa8e65d18cf748bda8360050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16316040516106ff9190611d68565b60405180910390a180610747576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073e90611cb1565b60405180910390fd5b818360060160008282540192505081905550620151808360030160008282540192505081905550826001015483600601541061079b5760018360070160006101000a81548160ff0219169083151502179055505b8260026000868152602001908152602001600020600082015481600001556001820154816001015560028201548160020155600382015481600301556004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600682015481600601556007820160009054906101000a900460ff168160070160006101000a81548160ff02191690831515021790555090505050505050565b6108ed611484565b604051806060016040528060015481526020013481526020018373ffffffffffffffffffffffffffffffffffffffff16815250905080600360006001548152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506001600081548092919060010191905055505050565b600560205281600052604060002081815481106109c557fe5b9060005260206000209060080201600091509150508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154908060070160009054906101000a900460ff16905088565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b610aa76114bb565b6002600083815260200190815260200160002060405180610100016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050919050565b60076020528060005260406000206000915090505481565b60036020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600260008281526020019081526020016000206000808201600090556001820160009055600282016000905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556005820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560068201600090556007820160006101000a81549060ff0219169055505050565b60006003600086815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006003600087815260200190815260200160002060010154905080471015610d85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7c90611c51565b60405180910390fd5b610d8d6114bb565b60405180610100016040528060005481526020018381526020018781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090508060026000805481526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c0820151816006015560e08201518160070160006101000a81548160ff021916908315150217905550905050600080815480929190600101919050555060008473ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f19350505050905080610f7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7490611c11565b60405180910390fd5b5050505050505050565b348273ffffffffffffffffffffffffffffffffffffffff16311015610fe1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd890611bf1565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505090508061105a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105190611cd1565b60405180910390fd5b7ff950957d2407bed19dc99b718b46b4ce6090c05589006dfb86fd22c34865b23e828373ffffffffffffffffffffffffffffffffffffffff16316040516110a2929190611b9f565b60405180910390a1505050565b60026020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154908060070160009054906101000a900460ff16905088565b6002600084815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111df90611c91565b60405180910390fd5b6002600084815260200190815260200160002060070160009054906101000a900460ff161561124c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124390611cf1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166004600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146112f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e890611c31565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001828152506004600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050505050565b611390611484565b6003600083815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60008060026000848152602001908152602001600020905060008160060154606483600201546064018460010154028161145557fe5b04039050600062015180836003015442038161146d57fe5b04905080828161147957fe5b049350505050919050565b60405180606001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60405180610100016040528060008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b60008135905061153d81611ee3565b92915050565b60008135905061155281611efa565b92915050565b60008135905061156781611f11565b92915050565b60008135905061157c81611f28565b92915050565b60006020828403121561159457600080fd5b60006115a28482850161152e565b91505092915050565b600080604083850312156115be57600080fd5b60006115cc85828601611543565b92505060206115dd85828601611543565b9150509250929050565b600080604083850312156115fa57600080fd5b60006116088582860161152e565b92505060206116198582860161156d565b9150509250929050565b60006020828403121561163557600080fd5b60006116438482850161156d565b91505092915050565b60008060006060848603121561166157600080fd5b600061166f8682870161156d565b93505060206116808682870161152e565b92505060406116918682870161156d565b9150509250925092565b600080600080608085870312156116b157600080fd5b60006116bf8782880161156d565b94505060206116d087828801611558565b93505060406116e18782880161156d565b92505060606116f287828801611543565b91505092959194509250565b61170781611ead565b82525050565b61171681611e5b565b82525050565b61172581611e5b565b82525050565b61173481611e49565b82525050565b61174381611e49565b82525050565b61175281611e6d565b82525050565b61176181611e6d565b82525050565b61177081611e79565b82525050565b61177f81611e79565b82525050565b6000611792601283611e38565b91507f496e73756666696369656e742046756e647300000000000000000000000000006000830152602082019050919050565b60006117d2602483611e38565b91507f4661696c656420746f2073656e6420457468657220746f2074686520626f727260008301527f6f776572000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611838602d83611e38565b91507f436f6c6c61746572616c20697320616c7265616479206465706f73697465642060008301527f666f722074686973206c6f616e000000000000000000000000000000000000006020830152604082019050919050565b600061189e602083611e38565b91507f436f6e74726163742062616c616e636520697320696e73756666696369656e746000830152602082019050919050565b60006118de601683611e38565b91507f4c6f616e20697320616c726561647920726570616964000000000000000000006000830152602082019050919050565b600061191e602883611e38565b91507f4f6e6c792074686520626f72726f7765722063616e206465706f73697420636f60008301527f6c6c61746572616c0000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611984601683611e38565b91507f4661696c656420746f2073656e64207061796d656e74000000000000000000006000830152602082019050919050565b60006119c4601383611e38565b91507f5472616e73616374696f6e204661696c656421000000000000000000000000006000830152602082019050919050565b6000611a04603083611e38565b91507f436f6c6c61746572616c2063616e6e6f74206265206465706f7369746564206660008301527f6f72206120726570616964206c6f616e000000000000000000000000000000006020830152604082019050919050565b6000611a6a601d83611e38565b91507f496e73756666696369656e7420636f6e74726163742062616c616e63650000006000830152602082019050919050565b606082016000820151611ab36000850182611b81565b506020820151611ac66020850182611b81565b506040820151611ad9604085018261172b565b50505050565b61010082016000820151611af66000850182611b81565b506020820151611b096020850182611b81565b506040820151611b1c6040850182611767565b506060820151611b2f6060850182611b81565b506080820151611b42608085018261170d565b5060a0820151611b5560a085018261170d565b5060c0820151611b6860c0850182611b81565b5060e0820151611b7b60e0850182611749565b50505050565b611b8a81611ea3565b82525050565b611b9981611ea3565b82525050565b6000604082019050611bb460008301856116fe565b611bc16020830184611b90565b9392505050565b6000604082019050611bdd600083018561173a565b611bea6020830184611b90565b9392505050565b60006020820190508181036000830152611c0a81611785565b9050919050565b60006020820190508181036000830152611c2a816117c5565b9050919050565b60006020820190508181036000830152611c4a8161182b565b9050919050565b60006020820190508181036000830152611c6a81611891565b9050919050565b60006020820190508181036000830152611c8a816118d1565b9050919050565b60006020820190508181036000830152611caa81611911565b9050919050565b60006020820190508181036000830152611cca81611977565b9050919050565b60006020820190508181036000830152611cea816119b7565b9050919050565b60006020820190508181036000830152611d0a816119f7565b9050919050565b60006020820190508181036000830152611d2a81611a5d565b9050919050565b6000606082019050611d466000830184611a9d565b92915050565b600061010082019050611d626000830184611adf565b92915050565b6000602082019050611d7d6000830184611b90565b92915050565b6000606082019050611d986000830186611b90565b611da56020830185611b90565b611db2604083018461173a565b949350505050565b600061010082019050611dd0600083018b611b90565b611ddd602083018a611b90565b611dea6040830189611776565b611df76060830188611b90565b611e04608083018761171c565b611e1160a083018661171c565b611e1e60c0830185611b90565b611e2b60e0830184611758565b9998505050505050505050565b600082825260208201905092915050565b6000611e5482611e83565b9050919050565b6000611e6682611e83565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611eb882611ebf565b9050919050565b6000611eca82611ed1565b9050919050565b6000611edc82611e83565b9050919050565b611eec81611e49565b8114611ef757600080fd5b50565b611f0381611e5b565b8114611f0e57600080fd5b50565b611f1a81611e79565b8114611f2557600080fd5b50565b611f3181611ea3565b8114611f3c57600080fd5b5056fea264697066735822122008c4a33395578f529f5615bc82211760e140805c9c2ef95d1b5b99fd47efbf0e64736f6c63430006010033",
    "sourceMap": "148:5489:0:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;148:5489:0;;;;;;;",
    "deployedSourceMap": "148:5489:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1004:56;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1004:56:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3266:1069;;;;;;;;;;;;;;;;:::i;:::-;;1483:260;;;;;;;;;;;;;;;;:::i;:::-;;942:56;;8:9:-1;5:2;;;30:1;27;20:12;5:2;942:56:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;883:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;883:53:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;5216:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5216:126:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1066:60;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1066:60:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;824:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;824:53:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;5044:166;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5044:166:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3170:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3170:90:0;;;;;;;;;;;;;;;;:::i;:::-;;1886:856;;;;;;;;;;;;;;;;:::i;:::-;;1132:287;;;;;;;;;;;;;;;;:::i;:::-;;767:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;767:51:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4341:696;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4341:696:0;;;;;;;;;;;;;;;;:::i;:::-;;1749:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1749:132:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1004:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3266:1069::-;3339:22;3364:13;:21;3378:6;3364:21;;;;;;;;;;;3339:46;;3395:25;3423:31;3447:6;3423:23;:31::i;:::-;3395:59;;3469:27;3478:17;3469:27;;;;;;;;;;;;;;;3515:4;:13;;;;;;;;;;;;3514:14;3506:49;;;;;;;;;;;;;;;;;;;;;;3712:17;3684:4;:16;;;;;;;;;;;;:24;;;:45;;3676:87;;;;;;;;;;;;;;;;;;;;;;3840:38;3855:4;:14;;;;;;;;;;;;:22;;;3840:38;;;;;;;;;;;;;;;3888:9;3908:4;:14;;;;;;;;;;;;3900:28;;:47;3929:17;3900:47;;;;;;;;;;;;;;;;;;;;;;;3888:59;;3962:37;3976:4;:14;;;;;;;;;;;;:22;;;3962:37;;;;;;;;;;;;;;;4017:4;4009:39;;;;;;;;;;;;;;;;;;;;;;4116:17;4093:4;:19;;;:40;;;;;;;;;;;1469:6;4143:4;:22;;;:42;;;;;;;;;;;4223:4;:20;;;4200:4;:19;;;:43;4196:94;;4275:4;4259;:13;;;:20;;;;;;;;;;;;;;;;;;4196:94;4324:4;4300:13;:21;4314:6;4300:21;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3266:1069;;;;:::o;1483:260::-;1551:28;;:::i;:::-;1582:60;;;;;;;;1593:20;;1582:60;;;;1616:9;1582:60;;;;1628:13;1582:60;;;;;1551:91;;1691:10;1652:14;:36;1667:20;;1652:36;;;;;;;;;;;:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1711:20;;:22;;;;;;;;;;;;;1483:260;;:::o;942:56::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;883:53::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5216:126::-;5278:16;;:::i;:::-;5313:13;:22;5327:7;5313:22;;;;;;;;;;;5306:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5216:126;;;:::o;1066:60::-;;;;;;;;;;;;;;;;;:::o;824:53::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5044:166::-;5117:7;5181:14;:22;;;5174:29;;5044:166;;;:::o;3170:90::-;3231:13;:22;3245:7;3231:22;;;;;;;;;;;;3224:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3170:90;:::o;1886:856::-;2045:18;2066:14;:31;2081:15;2066:31;;;;;;;;;;;:45;;;;;;;;;;;;2045:66;;2117:24;2144:14;:31;2159:15;2144:31;;;;;;;;;;;:43;;;2117:70;;2226:16;2201:21;:41;;2193:86;;;;;;;;;;;;;;;;;;;;;;2334:21;;:::i;:::-;2358:121;;;;;;;;2368:11;;2358:121;;;;2381:16;2358:121;;;;2399:14;2358:121;;;;2415:18;2358:121;;;;2435:12;2358:121;;;;;;2457:10;2358:121;;;;;;2470:1;2358:121;;;;2473:5;2358:121;;;;;2334:145;;2514:4;2485:13;:26;2499:11;;2485:26;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2524:11;;:13;;;;;;;;;;;;;2583:9;2595:12;:17;;:35;2613:16;2595:35;;;;;;;;;;;;;;;;;;;;;;;2583:47;;2694:4;2686:53;;;;;;;;;;;;;;;;;;;;;;1886:856;;;;;;;;:::o;1132:287::-;1240:9;1224:4;:12;;;:25;;1216:56;;;;;;;;;;;;;;;;;;;;;;1310:9;1322:3;:8;;:19;1331:9;1322:19;;;;;;;;;;;;;;;;;;;;;;;1310:31;;1355:4;1347:37;;;;;;;;;;;;;;;;;;;;;;1395:21;1399:3;1404;:11;;;1395:21;;;;;;;;;;;;;;;;1132:287;;;:::o;767:51::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4341:696::-;4461:13;:21;4475:6;4461:21;;;;;;;;;;;:33;;;;;;;;;;;;4447:47;;:10;:47;;;4439:100;;;;;;;;;;;;;;;;;;;;;;4558:13;:21;4572:6;4558:21;;;;;;;;;;;:30;;;;;;;;;;;;4557:31;4549:92;;;;;;;;;;;;;;;;;;;;;;4706:1;4659:49;;:15;:23;4675:6;4659:23;;;;;;;;;;;:35;;;;;;;;;;;;:49;;;4651:107;;;;;;;;;;;;;;;;;;;;;;4931:32;;;;;;;;4942:11;4931:32;;;;;;4955:7;4931:32;;;4905:15;:23;4921:6;4905:23;;;;;;;;;;;:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4341:696;;;:::o;1749:132::-;1815:17;;:::i;:::-;1851:14;:23;1866:7;1851:23;;;;;;;;;;;1844:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1749:132;;;:::o;2749:415::-;2821:7;2840:22;2865:13;:21;2879:6;2865:21;;;;;;;;;;;2840:46;;2896:23;2990:4;:19;;;2984:3;2961:4;:18;;;2947:3;:33;2923:4;:20;;;:58;:64;;;;;;:86;2896:114;;3020:23;1469:6;3065:4;:22;;;3047:15;:40;3046:61;;;;;;3020:87;;3142:15;3124;:33;;;;;;3117:40;;;;;2749:415;;;:::o;148:5489::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:130:-1:-;;85:6;72:20;63:29;;97:33;124:5;97:33;;;57:78;;;;;142:146;;230:6;217:20;208:29;;242:41;277:5;242:41;;;202:86;;;;;295:128;;374:6;361:20;352:29;;386:32;412:5;386:32;;;346:77;;;;;430:130;;510:6;497:20;488:29;;522:33;549:5;522:33;;;482:78;;;;;567:241;;671:2;659:9;650:7;646:23;642:32;639:2;;;687:1;684;677:12;639:2;722:1;739:53;784:7;775:6;764:9;760:22;739:53;;;729:63;;701:97;633:175;;;;;815:398;;;952:2;940:9;931:7;927:23;923:32;920:2;;;968:1;965;958:12;920:2;1003:1;1020:61;1073:7;1064:6;1053:9;1049:22;1020:61;;;1010:71;;982:105;1118:2;1136:61;1189:7;1180:6;1169:9;1165:22;1136:61;;;1126:71;;1097:106;914:299;;;;;;1220:366;;;1341:2;1329:9;1320:7;1316:23;1312:32;1309:2;;;1357:1;1354;1347:12;1309:2;1392:1;1409:53;1454:7;1445:6;1434:9;1430:22;1409:53;;;1399:63;;1371:97;1499:2;1517:53;1562:7;1553:6;1542:9;1538:22;1517:53;;;1507:63;;1478:98;1303:283;;;;;;1593:241;;1697:2;1685:9;1676:7;1672:23;1668:32;1665:2;;;1713:1;1710;1703:12;1665:2;1748:1;1765:53;1810:7;1801:6;1790:9;1786:22;1765:53;;;1755:63;;1727:97;1659:175;;;;;1841:491;;;;1979:2;1967:9;1958:7;1954:23;1950:32;1947:2;;;1995:1;1992;1985:12;1947:2;2030:1;2047:53;2092:7;2083:6;2072:9;2068:22;2047:53;;;2037:63;;2009:97;2137:2;2155:53;2200:7;2191:6;2180:9;2176:22;2155:53;;;2145:63;;2116:98;2245:2;2263:53;2308:7;2299:6;2288:9;2284:22;2263:53;;;2253:63;;2224:98;1941:391;;;;;;2339:631;;;;;2501:3;2489:9;2480:7;2476:23;2472:33;2469:2;;;2518:1;2515;2508:12;2469:2;2553:1;2570:53;2615:7;2606:6;2595:9;2591:22;2570:53;;;2560:63;;2532:97;2660:2;2678:52;2722:7;2713:6;2702:9;2698:22;2678:52;;;2668:62;;2639:97;2767:2;2785:53;2830:7;2821:6;2810:9;2806:22;2785:53;;;2775:63;;2746:98;2875:2;2893:61;2946:7;2937:6;2926:9;2922:22;2893:61;;;2883:71;;2854:106;2463:507;;;;;;;;2977:142;3068:45;3107:5;3068:45;;;3063:3;3056:58;3050:69;;;3126:127;3215:32;3241:5;3215:32;;;3210:3;3203:45;3197:56;;;3260:137;3359:32;3385:5;3359:32;;;3354:3;3347:45;3341:56;;;3404:103;3477:24;3495:5;3477:24;;;3472:3;3465:37;3459:48;;;3514:113;3597:24;3615:5;3597:24;;;3592:3;3585:37;3579:48;;;3634:94;3701:21;3716:5;3701:21;;;3696:3;3689:34;3683:45;;;3735:104;3812:21;3827:5;3812:21;;;3807:3;3800:34;3794:45;;;3846:100;3917:23;3934:5;3917:23;;;3912:3;3905:36;3899:47;;;3953:110;4034:23;4051:5;4034:23;;;4029:3;4022:36;4016:47;;;4071:318;;4231:67;4295:2;4290:3;4231:67;;;4224:74;;4331:20;4327:1;4322:3;4318:11;4311:41;4380:2;4375:3;4371:12;4364:19;;4217:172;;;;4398:373;;4558:67;4622:2;4617:3;4558:67;;;4551:74;;4658:34;4654:1;4649:3;4645:11;4638:55;4727:6;4722:2;4717:3;4713:12;4706:28;4762:2;4757:3;4753:12;4746:19;;4544:227;;;;4780:382;;4940:67;5004:2;4999:3;4940:67;;;4933:74;;5040:34;5036:1;5031:3;5027:11;5020:55;5109:15;5104:2;5099:3;5095:12;5088:37;5153:2;5148:3;5144:12;5137:19;;4926:236;;;;5171:332;;5331:67;5395:2;5390:3;5331:67;;;5324:74;;5431:34;5427:1;5422:3;5418:11;5411:55;5494:2;5489:3;5485:12;5478:19;;5317:186;;;;5512:322;;5672:67;5736:2;5731:3;5672:67;;;5665:74;;5772:24;5768:1;5763:3;5759:11;5752:45;5825:2;5820:3;5816:12;5809:19;;5658:176;;;;5843:377;;6003:67;6067:2;6062:3;6003:67;;;5996:74;;6103:34;6099:1;6094:3;6090:11;6083:55;6172:10;6167:2;6162:3;6158:12;6151:32;6211:2;6206:3;6202:12;6195:19;;5989:231;;;;6229:322;;6389:67;6453:2;6448:3;6389:67;;;6382:74;;6489:24;6485:1;6480:3;6476:11;6469:45;6542:2;6537:3;6533:12;6526:19;;6375:176;;;;6560:319;;6720:67;6784:2;6779:3;6720:67;;;6713:74;;6820:21;6816:1;6811:3;6807:11;6800:42;6870:2;6865:3;6861:12;6854:19;;6706:173;;;;6888:385;;7048:67;7112:2;7107:3;7048:67;;;7041:74;;7148:34;7144:1;7139:3;7135:11;7128:55;7217:18;7212:2;7207:3;7203:12;7196:40;7264:2;7259:3;7255:12;7248:19;;7034:239;;;;7282:329;;7442:67;7506:2;7501:3;7442:67;;;7435:74;;7542:31;7538:1;7533:3;7529:11;7522:52;7602:2;7597:3;7593:12;7586:19;;7428:183;;;;7674:651;7819:4;7814:3;7810:14;7905:4;7898:5;7894:16;7888:23;7917:63;7974:4;7969:3;7965:14;7951:12;7917:63;;;7839:147;8066:4;8059:5;8055:16;8049:23;8078:63;8135:4;8130:3;8126:14;8112:12;8078:63;;;7996:151;8229:4;8222:5;8218:16;8212:23;8241:63;8298:4;8293:3;8289:14;8275:12;8241:63;;;8157:153;7792:533;;;;8385:1488;8528:6;8523:3;8519:16;8616:4;8609:5;8605:16;8599:23;8628:63;8685:4;8680:3;8676:14;8662:12;8628:63;;;8550:147;8781:4;8774:5;8770:16;8764:23;8793:63;8850:4;8845:3;8841:14;8827:12;8793:63;;;8707:155;8944:4;8937:5;8933:16;8927:23;8956:61;9011:4;9006:3;9002:14;8988:12;8956:61;;;8872:151;9109:4;9102:5;9098:16;9092:23;9121:63;9178:4;9173:3;9169:14;9155:12;9121:63;;;9033:157;9270:4;9263:5;9259:16;9253:23;9282:79;9355:4;9350:3;9346:14;9332:12;9282:79;;;9200:167;9445:4;9438:5;9434:16;9428:23;9457:79;9530:4;9525:3;9521:14;9507:12;9457:79;;;9377:165;9625:4;9618:5;9614:16;9608:23;9637:63;9694:4;9689:3;9685:14;9671:12;9637:63;;;9552:154;9783:4;9776:5;9772:16;9766:23;9795:57;9846:4;9841:3;9837:14;9823:12;9795:57;;;9716:142;8501:1372;;;;9880:103;9953:24;9971:5;9953:24;;;9948:3;9941:37;9935:48;;;9990:113;10073:24;10091:5;10073:24;;;10068:3;10061:37;10055:48;;;10110:340;;10264:2;10253:9;10249:18;10241:26;;10278:79;10354:1;10343:9;10339:17;10330:6;10278:79;;;10368:72;10436:2;10425:9;10421:18;10412:6;10368:72;;;10235:215;;;;;;10457:324;;10603:2;10592:9;10588:18;10580:26;;10617:71;10685:1;10674:9;10670:17;10661:6;10617:71;;;10699:72;10767:2;10756:9;10752:18;10743:6;10699:72;;;10574:207;;;;;;10788:407;;10979:2;10968:9;10964:18;10956:26;;11029:9;11023:4;11019:20;11015:1;11004:9;11000:17;10993:47;11054:131;11180:4;11054:131;;;11046:139;;10950:245;;;;11202:407;;11393:2;11382:9;11378:18;11370:26;;11443:9;11437:4;11433:20;11429:1;11418:9;11414:17;11407:47;11468:131;11594:4;11468:131;;;11460:139;;11364:245;;;;11616:407;;11807:2;11796:9;11792:18;11784:26;;11857:9;11851:4;11847:20;11843:1;11832:9;11828:17;11821:47;11882:131;12008:4;11882:131;;;11874:139;;11778:245;;;;12030:407;;12221:2;12210:9;12206:18;12198:26;;12271:9;12265:4;12261:20;12257:1;12246:9;12242:17;12235:47;12296:131;12422:4;12296:131;;;12288:139;;12192:245;;;;12444:407;;12635:2;12624:9;12620:18;12612:26;;12685:9;12679:4;12675:20;12671:1;12660:9;12656:17;12649:47;12710:131;12836:4;12710:131;;;12702:139;;12606:245;;;;12858:407;;13049:2;13038:9;13034:18;13026:26;;13099:9;13093:4;13089:20;13085:1;13074:9;13070:17;13063:47;13124:131;13250:4;13124:131;;;13116:139;;13020:245;;;;13272:407;;13463:2;13452:9;13448:18;13440:26;;13513:9;13507:4;13503:20;13499:1;13488:9;13484:17;13477:47;13538:131;13664:4;13538:131;;;13530:139;;13434:245;;;;13686:407;;13877:2;13866:9;13862:18;13854:26;;13927:9;13921:4;13917:20;13913:1;13902:9;13898:17;13891:47;13952:131;14078:4;13952:131;;;13944:139;;13848:245;;;;14100:407;;14291:2;14280:9;14276:18;14268:26;;14341:9;14335:4;14331:20;14327:1;14316:9;14312:17;14305:47;14366:131;14492:4;14366:131;;;14358:139;;14262:245;;;;14514:407;;14705:2;14694:9;14690:18;14682:26;;14755:9;14749:4;14745:20;14741:1;14730:9;14726:17;14719:47;14780:131;14906:4;14780:131;;;14772:139;;14676:245;;;;14928:317;;15098:2;15087:9;15083:18;15075:26;;15112:123;15232:1;15221:9;15217:17;15208:6;15112:123;;;15069:176;;;;;15252:314;;15420:3;15409:9;15405:19;15397:27;;15435:121;15553:1;15542:9;15538:17;15529:6;15435:121;;;15391:175;;;;;15573:213;;15691:2;15680:9;15676:18;15668:26;;15705:71;15773:1;15762:9;15758:17;15749:6;15705:71;;;15662:124;;;;;15793:435;;15967:2;15956:9;15952:18;15944:26;;15981:71;16049:1;16038:9;16034:17;16025:6;15981:71;;;16063:72;16131:2;16120:9;16116:18;16107:6;16063:72;;;16146;16214:2;16203:9;16199:18;16190:6;16146:72;;;15938:290;;;;;;;16235:1043;;16573:3;16562:9;16558:19;16550:27;;16588:71;16656:1;16645:9;16641:17;16632:6;16588:71;;;16670:72;16738:2;16727:9;16723:18;16714:6;16670:72;;;16753:70;16819:2;16808:9;16804:18;16795:6;16753:70;;;16834:72;16902:2;16891:9;16887:18;16878:6;16834:72;;;16917:89;17001:3;16990:9;16986:19;16977:6;16917:89;;;17017;17101:3;17090:9;17086:19;17077:6;17017:89;;;17117:73;17185:3;17174:9;17170:19;17161:6;17117:73;;;17201:67;17263:3;17252:9;17248:19;17239:6;17201:67;;;16544:734;;;;;;;;;;;;17286:163;;17401:6;17396:3;17389:19;17438:4;17433:3;17429:14;17414:29;;17382:67;;;;;17457:91;;17519:24;17537:5;17519:24;;;17508:35;;17502:46;;;;17555:99;;17625:24;17643:5;17625:24;;;17614:35;;17608:46;;;;17661:85;;17734:5;17727:13;17720:21;17709:32;;17703:43;;;;17753:71;;17814:5;17803:16;;17797:27;;;;17831:121;;17904:42;17897:5;17893:54;17882:65;;17876:76;;;;17959:72;;18021:5;18010:16;;18004:27;;;;18038:129;;18125:37;18156:5;18125:37;;;18112:50;;18106:61;;;;18174:121;;18253:37;18284:5;18253:37;;;18240:50;;18234:61;;;;18302:108;;18381:24;18399:5;18381:24;;;18368:37;;18362:48;;;;18417:117;18486:24;18504:5;18486:24;;;18479:5;18476:35;18466:2;;18525:1;18522;18515:12;18466:2;18460:74;;18541:133;18618:32;18644:5;18618:32;;;18611:5;18608:43;18598:2;;18665:1;18662;18655:12;18598:2;18592:82;;18681:115;18749:23;18766:5;18749:23;;;18742:5;18739:34;18729:2;;18787:1;18784;18777:12;18729:2;18723:73;;18803:117;18872:24;18890:5;18872:24;;;18865:5;18862:35;18852:2;;18911:1;18908;18901:12;18852:2;18846:74;",
    "source": "// SPDX-License-Identifier: MIT\npragma experimental ABIEncoderV2;\npragma solidity >=0.4.22 <0.9.0;\n\n//remember I rweaked 30days to 1day somehwere\n\n\ncontract Loan {\n    uint256 private total_loans;\n    uint256 private total_provided_loans;\n    \n\n    struct Loan_info{\n        uint256 loan_id;\n        uint256 amount_borrowed;\n        int interest_rate;\n        uint256 time_of_repayment;\n        address payable borrower_id;\n        address payable sender_id;\n        uint256 amount_repayed;\n        bool isRepaid;\n        // Collateral collateral;\n    }\n\n    struct Loan_given{\n        uint256 loan_id;\n        uint256 loan_amount;\n        address loan_provider;\n    }\n\n\n\n\n\n    struct Collateral {\n        address nftContract;\n        uint256 tokenId;\n    }\n    \n    mapping (uint256 => Loan_info) public loans_mapping;\n    mapping (uint256 => Loan_given) public provided_loans;\n    mapping(uint256 => Collateral) public loanCollaterals;\n    mapping (address => Loan_info []) public loansByBorrower;\n    mapping (address => Loan_info []) public loansByReciever;\n    mapping(uint256 => uint256) public loansProvidedByTheirValue;\n    function sendPaisa(address payable from , address payable _to) public payable {\n    require(from.balance >= msg.value, \"Insufficient Funds\"); // Check the contract's balance\n    bool sent = _to.send(msg.value);\n    require(sent , \"Transaction Failed!\");\n    emit Log(_to, _to.balance);\n}\n\n    uint256 constant private MONTH_IN_SECONDS = 1 days; \n\n    function provideLoan(address loan_provider) public payable{\n        Loan_given memory loan_given = Loan_given(total_provided_loans , msg.value , loan_provider);\n        provided_loans[total_provided_loans] = loan_given;\n        total_provided_loans++;   \n    }\n\n    function checkProvidedLoans(uint256 loan_id) public view returns (Loan_given memory) {\n        return provided_loans[loan_id];\n    }\n\n   function getLoan(\n    uint256 provided_loanID,\n    int _interest_rate,\n    uint256 _time_of_repayment,\n    address payable _borrower_id\n) public payable {\n    address _sender_id = provided_loans[provided_loanID].loan_provider;\n    uint256 _amount_borrowed = provided_loans[provided_loanID].loan_amount;\n    require(address(this).balance >= _amount_borrowed, \"Contract balance is insufficient\");\n\n    // Create the Loan_info struct and store it\n    Loan_info memory loan = Loan_info(total_loans, _amount_borrowed, _interest_rate, _time_of_repayment, _borrower_id, payable(_sender_id), 0, false);\n    loans_mapping[total_loans] = loan;\n    total_loans++;\n\n    // Send the amount to the borrower\n    bool sent = _borrower_id.send(_amount_borrowed);\n    // Check if the send operation was successful\n    require(sent, \"Failed to send Ether to the borrower\");\n}\n\n\n    function calculateMonthlyPayment(uint256 loanId) internal view returns (uint256) {\n        Loan_info storage loan = loans_mapping[loanId];\n        uint256 totalLoanAmount = (loan.amount_borrowed * (100 + uint256(loan.interest_rate)) / 100 - loan.amount_repayed);\n        uint256 remainingMonths = (block.timestamp - loan.time_of_repayment) / MONTH_IN_SECONDS;\n        return totalLoanAmount / remainingMonths;\n    }\n\n    function cancelLoan(uint256 loan_id) public {\n        delete loans_mapping[loan_id];\n    }\n\n    function automaticMonthlyPayment(uint256 loanId) public payable{\n        Loan_info storage loan = loans_mapping[loanId];\n        uint256 amount_to_be_paid = calculateMonthlyPayment(loanId);\n        emit LogValue(amount_to_be_paid);\n        require(!loan.isRepaid, \"Loan is already repaid\");\n        // require(block.timestamp <= loan.time_of_repayment, \"Payment can only be made before the due date\");\n        require(loan.borrower_id.balance >= amount_to_be_paid, \"Insufficient contract balance\");\n        // require(msg.value == amount_to_be_paid , \"Error\");\n        emit LogValueBefore(loan.sender_id.balance);\n        bool sent = payable(loan.sender_id).send(amount_to_be_paid);\n        emit LogValueAfter(loan.sender_id.balance);\n        require(sent, \"Failed to send payment\");\n\n        // If payment goes thru->\n        loan.amount_repayed += amount_to_be_paid;\n        loan.time_of_repayment += MONTH_IN_SECONDS;\n\n        if (loan.amount_repayed >= loan.amount_borrowed) {\n            loan.isRepaid = true;\n        }\n\n        loans_mapping[loanId] = loan;\n    }\n\n    function depositCollateral(uint256 loanId, address nftContract, uint256 tokenId) public {\n        require(msg.sender == loans_mapping[loanId].borrower_id, \"Only the borrower can deposit collateral\");\n        require(!loans_mapping[loanId].isRepaid, \"Collateral cannot be deposited for a repaid loan\");\n        require(loanCollaterals[loanId].nftContract == address(0), \"Collateral is already deposited for this loan\");\n        // Transfer the NFT to this contract\n        // IERC721Enumerable(nftContract).transferFrom(msg.sender, address(this), tokenId);\n        loanCollaterals[loanId] = Collateral(nftContract, tokenId);\n        // emit CollateralDeposited(loanId, nftContract, tokenId);\n    }\n\n\n    function getAccountBalance(address target_address) public view  returns (uint256) {\n        // emit LogSender(sender_id);\n        return target_address.balance;\n    }\n\n    function getLoanDetails(uint256 loan_id) public view returns (Loan_info memory) {\n        return loans_mapping[loan_id];\n    }\n\n\n    event Log(address sender , uint256 balance);\n\n    event LogSender(address sender);\n\n    event LogValueBefore(uint256 value);\n    event LogValueAfter(uint256 value);\n    event LogValue(uint256 value);\n\n    event LogMapping(Loan_info loan);\n\n    event LogMappingProvided(Loan_given loan);\n}\n\n",
    "sourcePath": "/Users/Pranav_1/Desktop/dev/SyntaxError'23/contracts/loan.sol",
    "ast": {
      "absolutePath": "project:/contracts/loan.sol",
      "exportedSymbols": {
        "Loan": [
          473
        ]
      },
      "id": 474,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:33:0"
        },
        {
          "id": 2,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".22",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "66:32:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 473,
          "linearizedBaseContracts": [
            473
          ],
          "name": "Loan",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 4,
              "name": "total_loans",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "168:27:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "168:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 6,
              "name": "total_provided_loans",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "201:36:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 5,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "201:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "canonicalName": "Loan.Loan_info",
              "id": 23,
              "members": [
                {
                  "constant": false,
                  "id": 8,
                  "name": "loan_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 23,
                  "src": "275:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "275:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10,
                  "name": "amount_borrowed",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 23,
                  "src": "300:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "300:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12,
                  "name": "interest_rate",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 23,
                  "src": "333:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "333:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "name": "time_of_repayment",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 23,
                  "src": "360:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16,
                  "name": "borrower_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 23,
                  "src": "395:27:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 15,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "395:15:0",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18,
                  "name": "sender_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 23,
                  "src": "432:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:15:0",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20,
                  "name": "amount_repayed",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 23,
                  "src": "467:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22,
                  "name": "isRepaid",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 23,
                  "src": "499:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Loan_info",
              "nodeType": "StructDefinition",
              "scope": 473,
              "src": "249:304:0",
              "visibility": "public"
            },
            {
              "canonicalName": "Loan.Loan_given",
              "id": 30,
              "members": [
                {
                  "constant": false,
                  "id": 25,
                  "name": "loan_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 30,
                  "src": "586:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "586:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "name": "loan_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 30,
                  "src": "611:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "611:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29,
                  "name": "loan_provider",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 30,
                  "src": "640:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "640:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Loan_given",
              "nodeType": "StructDefinition",
              "scope": 473,
              "src": "559:109:0",
              "visibility": "public"
            },
            {
              "canonicalName": "Loan.Collateral",
              "id": 35,
              "members": [
                {
                  "constant": false,
                  "id": 32,
                  "name": "nftContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 35,
                  "src": "706:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "706:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 35,
                  "src": "735:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Collateral",
              "nodeType": "StructDefinition",
              "scope": 473,
              "src": "678:79:0",
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "e98210b1",
              "id": 39,
              "name": "loans_mapping",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "767:51:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                "typeString": "mapping(uint256 => struct Loan.Loan_info)"
              },
              "typeName": {
                "id": 38,
                "keyType": {
                  "id": 36,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "776:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "767:30:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                  "typeString": "mapping(uint256 => struct Loan.Loan_info)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 37,
                  "name": "Loan_info",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 23,
                  "src": "787:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                    "typeString": "struct Loan.Loan_info"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "8118785c",
              "id": 43,
              "name": "provided_loans",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "824:53:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_given_$30_storage_$",
                "typeString": "mapping(uint256 => struct Loan.Loan_given)"
              },
              "typeName": {
                "id": 42,
                "keyType": {
                  "id": 40,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "833:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "824:31:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_given_$30_storage_$",
                  "typeString": "mapping(uint256 => struct Loan.Loan_given)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 41,
                  "name": "Loan_given",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 30,
                  "src": "844:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Loan_given_$30_storage_ptr",
                    "typeString": "struct Loan.Loan_given"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "50ed73b7",
              "id": 47,
              "name": "loanCollaterals",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "883:53:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Collateral_$35_storage_$",
                "typeString": "mapping(uint256 => struct Loan.Collateral)"
              },
              "typeName": {
                "id": 46,
                "keyType": {
                  "id": 44,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "891:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "883:30:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Collateral_$35_storage_$",
                  "typeString": "mapping(uint256 => struct Loan.Collateral)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 45,
                  "name": "Collateral",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 35,
                  "src": "902:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Collateral_$35_storage_ptr",
                    "typeString": "struct Loan.Collateral"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "4b7f1e5a",
              "id": 52,
              "name": "loansByBorrower",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "942:56:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Loan_info_$23_storage_$dyn_storage_$",
                "typeString": "mapping(address => struct Loan.Loan_info[])"
              },
              "typeName": {
                "id": 51,
                "keyType": {
                  "id": 48,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "951:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "942:33:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Loan_info_$23_storage_$dyn_storage_$",
                  "typeString": "mapping(address => struct Loan.Loan_info[])"
                },
                "valueType": {
                  "baseType": {
                    "contractScope": null,
                    "id": 49,
                    "name": "Loan_info",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 23,
                    "src": "962:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                      "typeString": "struct Loan.Loan_info"
                    }
                  },
                  "id": 50,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "962:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Loan_info_$23_storage_$dyn_storage_ptr",
                    "typeString": "struct Loan.Loan_info[]"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "01477e78",
              "id": 57,
              "name": "loansByReciever",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "1004:56:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Loan_info_$23_storage_$dyn_storage_$",
                "typeString": "mapping(address => struct Loan.Loan_info[])"
              },
              "typeName": {
                "id": 56,
                "keyType": {
                  "id": 53,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1013:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1004:33:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Loan_info_$23_storage_$dyn_storage_$",
                  "typeString": "mapping(address => struct Loan.Loan_info[])"
                },
                "valueType": {
                  "baseType": {
                    "contractScope": null,
                    "id": 54,
                    "name": "Loan_info",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 23,
                    "src": "1024:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                      "typeString": "struct Loan.Loan_info"
                    }
                  },
                  "id": 55,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "1024:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Loan_info_$23_storage_$dyn_storage_ptr",
                    "typeString": "struct Loan.Loan_info[]"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "7c4ea6c3",
              "id": 61,
              "name": "loansProvidedByTheirValue",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "1066:60:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "typeName": {
                "id": 60,
                "keyType": {
                  "id": 58,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1074:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1066:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 59,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1085:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 96,
                "nodeType": "Block",
                "src": "1210:209:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 73,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 69,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63,
                              "src": "1224:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "id": 70,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1224:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 71,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 689,
                              "src": "1240:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 72,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1240:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1224:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "496e73756666696369656e742046756e6473",
                          "id": 74,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1251:20:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_3f96070838a802b00711e63911cb51cdbd018900fa6d34d5ff764f6299488092",
                            "typeString": "literal_string \"Insufficient Funds\""
                          },
                          "value": "Insufficient Funds"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_3f96070838a802b00711e63911cb51cdbd018900fa6d34d5ff764f6299488092",
                            "typeString": "literal_string \"Insufficient Funds\""
                          }
                        ],
                        "id": 68,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "1216:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1216:56:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 76,
                    "nodeType": "ExpressionStatement",
                    "src": "1216:56:0"
                  },
                  {
                    "assignments": [
                      78
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 78,
                        "name": "sent",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 96,
                        "src": "1310:9:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 77,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "1310:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 84,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 81,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 689,
                            "src": "1331:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1331:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 79,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "1322:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "send",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1322:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (uint256) returns (bool)"
                        }
                      },
                      "id": 83,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1322:19:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1310:31:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 86,
                          "name": "sent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78,
                          "src": "1355:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5472616e73616374696f6e204661696c656421",
                          "id": 87,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1362:21:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_b090ac9b4324226978d6a01b7f3d156f7383ac0de7f6c2461d98ee4aa3a631d5",
                            "typeString": "literal_string \"Transaction Failed!\""
                          },
                          "value": "Transaction Failed!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_b090ac9b4324226978d6a01b7f3d156f7383ac0de7f6c2461d98ee4aa3a631d5",
                            "typeString": "literal_string \"Transaction Failed!\""
                          }
                        ],
                        "id": 85,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "1347:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1347:37:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 89,
                    "nodeType": "ExpressionStatement",
                    "src": "1347:37:0"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "1399:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 92,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 65,
                            "src": "1404:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 93,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1404:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 90,
                        "name": "Log",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 448,
                        "src": "1395:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 94,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1395:21:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 95,
                    "nodeType": "EmitStatement",
                    "src": "1390:26:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "e0e539a9",
              "id": 97,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "sendPaisa",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 66,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 63,
                    "name": "from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 97,
                    "src": "1151:20:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 62,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1151:15:0",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 65,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 97,
                    "src": "1174:19:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 64,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1174:15:0",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1150:44:0"
              },
              "returnParameters": {
                "id": 67,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1210:0:0"
              },
              "scope": 473,
              "src": "1132:287:0",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "constant": true,
              "id": 100,
              "name": "MONTH_IN_SECONDS",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 473,
              "src": "1425:50:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 98,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1425:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "31",
                "id": 99,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1469:6:0",
                "subdenomination": "days",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_86400_by_1",
                  "typeString": "int_const 86400"
                },
                "value": "1"
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 123,
                "nodeType": "Block",
                "src": "1541:202:0",
                "statements": [
                  {
                    "assignments": [
                      106
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 106,
                        "name": "loan_given",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 123,
                        "src": "1551:28:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_given_$30_memory_ptr",
                          "typeString": "struct Loan.Loan_given"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 105,
                          "name": "Loan_given",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 30,
                          "src": "1551:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Loan_given_$30_storage_ptr",
                            "typeString": "struct Loan.Loan_given"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 113,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 108,
                          "name": "total_provided_loans",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6,
                          "src": "1593:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 109,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 689,
                            "src": "1616:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1616:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 111,
                          "name": "loan_provider",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 102,
                          "src": "1628:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 107,
                        "name": "Loan_given",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30,
                        "src": "1582:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Loan_given_$30_storage_ptr_$",
                          "typeString": "type(struct Loan.Loan_given storage pointer)"
                        }
                      },
                      "id": 112,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1582:60:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_given_$30_memory",
                        "typeString": "struct Loan.Loan_given memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1551:91:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 118,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 114,
                          "name": "provided_loans",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 43,
                          "src": "1652:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_given_$30_storage_$",
                            "typeString": "mapping(uint256 => struct Loan.Loan_given storage ref)"
                          }
                        },
                        "id": 116,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "total_provided_loans",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6,
                          "src": "1667:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1652:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_given_$30_storage",
                          "typeString": "struct Loan.Loan_given storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 117,
                        "name": "loan_given",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1691:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_given_$30_memory_ptr",
                          "typeString": "struct Loan.Loan_given memory"
                        }
                      },
                      "src": "1652:49:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_given_$30_storage",
                        "typeString": "struct Loan.Loan_given storage ref"
                      }
                    },
                    "id": 119,
                    "nodeType": "ExpressionStatement",
                    "src": "1652:49:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1711:22:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 120,
                        "name": "total_provided_loans",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "1711:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 122,
                    "nodeType": "ExpressionStatement",
                    "src": "1711:22:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "3e4e6f09",
              "id": 124,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "provideLoan",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 103,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 102,
                    "name": "loan_provider",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 124,
                    "src": "1504:21:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 101,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1504:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1503:23:0"
              },
              "returnParameters": {
                "id": 104,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1541:0:0"
              },
              "scope": 473,
              "src": "1483:260:0",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 135,
                "nodeType": "Block",
                "src": "1834:47:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 131,
                        "name": "provided_loans",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "1851:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_given_$30_storage_$",
                          "typeString": "mapping(uint256 => struct Loan.Loan_given storage ref)"
                        }
                      },
                      "id": 133,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 132,
                        "name": "loan_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 126,
                        "src": "1866:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1851:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_given_$30_storage",
                        "typeString": "struct Loan.Loan_given storage ref"
                      }
                    },
                    "functionReturnParameters": 130,
                    "id": 134,
                    "nodeType": "Return",
                    "src": "1844:30:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "fa47034d",
              "id": 136,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "checkProvidedLoans",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 127,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 126,
                    "name": "loan_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 136,
                    "src": "1777:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 125,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1777:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1776:17:0"
              },
              "returnParameters": {
                "id": 130,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 129,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 136,
                    "src": "1815:17:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Loan_given_$30_memory_ptr",
                      "typeString": "struct Loan.Loan_given"
                    },
                    "typeName": {
                      "contractScope": null,
                      "id": 128,
                      "name": "Loan_given",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 30,
                      "src": "1815:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_given_$30_storage_ptr",
                        "typeString": "struct Loan.Loan_given"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1814:19:0"
              },
              "scope": 473,
              "src": "1749:132:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 209,
                "nodeType": "Block",
                "src": "2039:703:0",
                "statements": [
                  {
                    "assignments": [
                      148
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 148,
                        "name": "_sender_id",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 209,
                        "src": "2045:18:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 147,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2045:7:0",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 153,
                    "initialValue": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 149,
                          "name": "provided_loans",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 43,
                          "src": "2066:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_given_$30_storage_$",
                            "typeString": "mapping(uint256 => struct Loan.Loan_given storage ref)"
                          }
                        },
                        "id": 151,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 150,
                          "name": "provided_loanID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 138,
                          "src": "2081:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2066:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_given_$30_storage",
                          "typeString": "struct Loan.Loan_given storage ref"
                        }
                      },
                      "id": 152,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "loan_provider",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 29,
                      "src": "2066:45:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2045:66:0"
                  },
                  {
                    "assignments": [
                      155
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 155,
                        "name": "_amount_borrowed",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 209,
                        "src": "2117:24:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 154,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2117:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 160,
                    "initialValue": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 156,
                          "name": "provided_loans",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 43,
                          "src": "2144:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_given_$30_storage_$",
                            "typeString": "mapping(uint256 => struct Loan.Loan_given storage ref)"
                          }
                        },
                        "id": 158,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 157,
                          "name": "provided_loanID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 138,
                          "src": "2159:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2144:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_given_$30_storage",
                          "typeString": "struct Loan.Loan_given storage ref"
                        }
                      },
                      "id": 159,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "loan_amount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27,
                      "src": "2144:43:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2117:70:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 164,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 703,
                                  "src": "2209:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Loan_$473",
                                    "typeString": "contract Loan"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Loan_$473",
                                    "typeString": "contract Loan"
                                  }
                                ],
                                "id": 163,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2201:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 162,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2201:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": null,
                                    "typeString": null
                                  }
                                }
                              },
                              "id": 165,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2201:13:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 166,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2201:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 167,
                            "name": "_amount_borrowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 155,
                            "src": "2226:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2201:41:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "436f6e74726163742062616c616e636520697320696e73756666696369656e74",
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2244:34:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_63580c8f2f353fc5b6490d467132dc04a523d5a3d9a1206eea4b2a39c4d766db",
                            "typeString": "literal_string \"Contract balance is insufficient\""
                          },
                          "value": "Contract balance is insufficient"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_63580c8f2f353fc5b6490d467132dc04a523d5a3d9a1206eea4b2a39c4d766db",
                            "typeString": "literal_string \"Contract balance is insufficient\""
                          }
                        ],
                        "id": 161,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "2193:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2193:86:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 171,
                    "nodeType": "ExpressionStatement",
                    "src": "2193:86:0"
                  },
                  {
                    "assignments": [
                      173
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 173,
                        "name": "loan",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 209,
                        "src": "2334:21:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_info_$23_memory_ptr",
                          "typeString": "struct Loan.Loan_info"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 172,
                          "name": "Loan_info",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 23,
                          "src": "2334:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                            "typeString": "struct Loan.Loan_info"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 187,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 175,
                          "name": "total_loans",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4,
                          "src": "2368:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 176,
                          "name": "_amount_borrowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 155,
                          "src": "2381:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 177,
                          "name": "_interest_rate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 140,
                          "src": "2399:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 178,
                          "name": "_time_of_repayment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 142,
                          "src": "2415:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 179,
                          "name": "_borrower_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "2435:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 182,
                              "name": "_sender_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 148,
                              "src": "2457:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 181,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2449:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 180,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2449:8:0",
                              "stateMutability": "payable",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 183,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2449:19:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2470:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 185,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2473:5:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 174,
                        "name": "Loan_info",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "2358:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Loan_info_$23_storage_ptr_$",
                          "typeString": "type(struct Loan.Loan_info storage pointer)"
                        }
                      },
                      "id": 186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2358:121:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_info_$23_memory",
                        "typeString": "struct Loan.Loan_info memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2334:145:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 188,
                          "name": "loans_mapping",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "2485:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                            "typeString": "mapping(uint256 => struct Loan.Loan_info storage ref)"
                          }
                        },
                        "id": 190,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 189,
                          "name": "total_loans",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4,
                          "src": "2499:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2485:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                          "typeString": "struct Loan.Loan_info storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 191,
                        "name": "loan",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 173,
                        "src": "2514:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_info_$23_memory_ptr",
                          "typeString": "struct Loan.Loan_info memory"
                        }
                      },
                      "src": "2485:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                        "typeString": "struct Loan.Loan_info storage ref"
                      }
                    },
                    "id": 193,
                    "nodeType": "ExpressionStatement",
                    "src": "2485:33:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2524:13:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 194,
                        "name": "total_loans",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "2524:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 196,
                    "nodeType": "ExpressionStatement",
                    "src": "2524:13:0"
                  },
                  {
                    "assignments": [
                      198
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 198,
                        "name": "sent",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 209,
                        "src": "2583:9:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 197,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2583:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 203,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 201,
                          "name": "_amount_borrowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 155,
                          "src": "2613:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 199,
                          "name": "_borrower_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "2595:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "send",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2595:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (uint256) returns (bool)"
                        }
                      },
                      "id": 202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2595:35:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2583:47:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 205,
                          "name": "sent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 198,
                          "src": "2694:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4661696c656420746f2073656e6420457468657220746f2074686520626f72726f776572",
                          "id": 206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2700:38:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4e0e83c9fbc9d3951bde72fa4e20c8edda20ecd10e3bfbbda1ec49cb0f636ce4",
                            "typeString": "literal_string \"Failed to send Ether to the borrower\""
                          },
                          "value": "Failed to send Ether to the borrower"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_4e0e83c9fbc9d3951bde72fa4e20c8edda20ecd10e3bfbbda1ec49cb0f636ce4",
                            "typeString": "literal_string \"Failed to send Ether to the borrower\""
                          }
                        ],
                        "id": 204,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "2686:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2686:53:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 208,
                    "nodeType": "ExpressionStatement",
                    "src": "2686:53:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "e0bd38ac",
              "id": 210,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getLoan",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 145,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 138,
                    "name": "provided_loanID",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 210,
                    "src": "1908:23:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 137,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1908:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 140,
                    "name": "_interest_rate",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 210,
                    "src": "1937:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "typeName": {
                      "id": 139,
                      "name": "int",
                      "nodeType": "ElementaryTypeName",
                      "src": "1937:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 142,
                    "name": "_time_of_repayment",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 210,
                    "src": "1961:26:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 141,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1961:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 144,
                    "name": "_borrower_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 210,
                    "src": "1993:28:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 143,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1993:15:0",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1902:121:0"
              },
              "returnParameters": {
                "id": 146,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2039:0:0"
              },
              "scope": 473,
              "src": "1886:856:0",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 258,
                "nodeType": "Block",
                "src": "2830:334:0",
                "statements": [
                  {
                    "assignments": [
                      218
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 218,
                        "name": "loan",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 258,
                        "src": "2840:22:0",
                        "stateVariable": false,
                        "storageLocation": "storage",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                          "typeString": "struct Loan.Loan_info"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 217,
                          "name": "Loan_info",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 23,
                          "src": "2840:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                            "typeString": "struct Loan.Loan_info"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 222,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 219,
                        "name": "loans_mapping",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "2865:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                          "typeString": "mapping(uint256 => struct Loan.Loan_info storage ref)"
                        }
                      },
                      "id": 221,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 220,
                        "name": "loanId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 212,
                        "src": "2879:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2865:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                        "typeString": "struct Loan.Loan_info storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2840:46:0"
                  },
                  {
                    "assignments": [
                      224
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 224,
                        "name": "totalLoanAmount",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 258,
                        "src": "2896:23:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 223,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2896:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 242,
                    "initialValue": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 235,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 225,
                                  "name": "loan",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 218,
                                  "src": "2923:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                    "typeString": "struct Loan.Loan_info storage pointer"
                                  }
                                },
                                "id": 226,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "amount_borrowed",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 10,
                                "src": "2923:20:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 233,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "313030",
                                      "id": 227,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2947:3:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_100_by_1",
                                        "typeString": "int_const 100"
                                      },
                                      "value": "100"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "+",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 230,
                                            "name": "loan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 218,
                                            "src": "2961:4:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                              "typeString": "struct Loan.Loan_info storage pointer"
                                            }
                                          },
                                          "id": 231,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "interest_rate",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 12,
                                          "src": "2961:18:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        ],
                                        "id": 229,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "2953:7:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint256_$",
                                          "typeString": "type(uint256)"
                                        },
                                        "typeName": {
                                          "id": 228,
                                          "name": "uint256",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "2953:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": null,
                                            "typeString": null
                                          }
                                        }
                                      },
                                      "id": 232,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2953:27:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "2947:33:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 234,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2946:35:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2923:58:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "313030",
                              "id": 236,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2984:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                              },
                              "value": "100"
                            },
                            "src": "2923:64:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 238,
                              "name": "loan",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 218,
                              "src": "2990:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                "typeString": "struct Loan.Loan_info storage pointer"
                              }
                            },
                            "id": 239,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "amount_repayed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20,
                            "src": "2990:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2923:86:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 241,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2922:88:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2896:114:0"
                  },
                  {
                    "assignments": [
                      244
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 244,
                        "name": "remainingMonths",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 258,
                        "src": "3020:23:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 243,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3020:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 253,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 249,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 245,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 679,
                                "src": "3047:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 246,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3047:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 247,
                                "name": "loan",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 218,
                                "src": "3065:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                  "typeString": "struct Loan.Loan_info storage pointer"
                                }
                              },
                              "id": 248,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "time_of_repayment",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14,
                              "src": "3065:22:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3047:40:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 250,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3046:42:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 251,
                        "name": "MONTH_IN_SECONDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100,
                        "src": "3091:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3046:61:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3020:87:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 254,
                        "name": "totalLoanAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 224,
                        "src": "3124:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 255,
                        "name": "remainingMonths",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 244,
                        "src": "3142:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3124:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 216,
                    "id": 257,
                    "nodeType": "Return",
                    "src": "3117:40:0"
                  }
                ]
              },
              "documentation": null,
              "id": 259,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "calculateMonthlyPayment",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 213,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 212,
                    "name": "loanId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 259,
                    "src": "2782:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 211,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2782:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2781:16:0"
              },
              "returnParameters": {
                "id": 216,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 215,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 259,
                    "src": "2821:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 214,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2821:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2820:9:0"
              },
              "scope": 473,
              "src": "2749:415:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 269,
                "nodeType": "Block",
                "src": "3214:46:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 267,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "delete",
                      "prefix": true,
                      "src": "3224:29:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 264,
                          "name": "loans_mapping",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "3231:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                            "typeString": "mapping(uint256 => struct Loan.Loan_info storage ref)"
                          }
                        },
                        "id": 266,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "loan_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 261,
                          "src": "3245:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3231:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                          "typeString": "struct Loan.Loan_info storage ref"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 268,
                    "nodeType": "ExpressionStatement",
                    "src": "3224:29:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "bdbfa3de",
              "id": 270,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "cancelLoan",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 262,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 261,
                    "name": "loan_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 270,
                    "src": "3190:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 260,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3190:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3189:17:0"
              },
              "returnParameters": {
                "id": 263,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3214:0:0"
              },
              "scope": 473,
              "src": "3170:90:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 366,
                "nodeType": "Block",
                "src": "3329:1006:0",
                "statements": [
                  {
                    "assignments": [
                      276
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 276,
                        "name": "loan",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 366,
                        "src": "3339:22:0",
                        "stateVariable": false,
                        "storageLocation": "storage",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                          "typeString": "struct Loan.Loan_info"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 275,
                          "name": "Loan_info",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 23,
                          "src": "3339:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                            "typeString": "struct Loan.Loan_info"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 280,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 277,
                        "name": "loans_mapping",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "3364:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                          "typeString": "mapping(uint256 => struct Loan.Loan_info storage ref)"
                        }
                      },
                      "id": 279,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 278,
                        "name": "loanId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 272,
                        "src": "3378:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3364:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                        "typeString": "struct Loan.Loan_info storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3339:46:0"
                  },
                  {
                    "assignments": [
                      282
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 282,
                        "name": "amount_to_be_paid",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 366,
                        "src": "3395:25:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 281,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3395:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 286,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 284,
                          "name": "loanId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 272,
                          "src": "3447:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 283,
                        "name": "calculateMonthlyPayment",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 259,
                        "src": "3423:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 285,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3423:31:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3395:59:0"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 288,
                          "name": "amount_to_be_paid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 282,
                          "src": "3478:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 287,
                        "name": "LogValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 464,
                        "src": "3469:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3469:27:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 290,
                    "nodeType": "EmitStatement",
                    "src": "3464:32:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 294,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "3514:14:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 292,
                              "name": "loan",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 276,
                              "src": "3515:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                "typeString": "struct Loan.Loan_info storage pointer"
                              }
                            },
                            "id": 293,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isRepaid",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 22,
                            "src": "3515:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4c6f616e20697320616c726561647920726570616964",
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3530:24:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_7870e5b2c5679158eccf8b28da6a6e9f46141ea0ee6443a3f06157b1b11111f4",
                            "typeString": "literal_string \"Loan is already repaid\""
                          },
                          "value": "Loan is already repaid"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_7870e5b2c5679158eccf8b28da6a6e9f46141ea0ee6443a3f06157b1b11111f4",
                            "typeString": "literal_string \"Loan is already repaid\""
                          }
                        ],
                        "id": 291,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "3506:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3506:49:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 297,
                    "nodeType": "ExpressionStatement",
                    "src": "3506:49:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 299,
                                "name": "loan",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 276,
                                "src": "3684:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                  "typeString": "struct Loan.Loan_info storage pointer"
                                }
                              },
                              "id": 300,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "borrower_id",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 16,
                              "src": "3684:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "id": 301,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3684:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 302,
                            "name": "amount_to_be_paid",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 282,
                            "src": "3712:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3684:45:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "496e73756666696369656e7420636f6e74726163742062616c616e6365",
                          "id": 304,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3731:31:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ec83fd00432662dbf5dd2aac1f81c346fbe87acecf7cd3f016ab25f549f71749",
                            "typeString": "literal_string \"Insufficient contract balance\""
                          },
                          "value": "Insufficient contract balance"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ec83fd00432662dbf5dd2aac1f81c346fbe87acecf7cd3f016ab25f549f71749",
                            "typeString": "literal_string \"Insufficient contract balance\""
                          }
                        ],
                        "id": 298,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "3676:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 305,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3676:87:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 306,
                    "nodeType": "ExpressionStatement",
                    "src": "3676:87:0"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 308,
                              "name": "loan",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 276,
                              "src": "3855:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                "typeString": "struct Loan.Loan_info storage pointer"
                              }
                            },
                            "id": 309,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender_id",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 18,
                            "src": "3855:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3855:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 307,
                        "name": "LogValueBefore",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 456,
                        "src": "3840:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 311,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3840:38:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 312,
                    "nodeType": "EmitStatement",
                    "src": "3835:43:0"
                  },
                  {
                    "assignments": [
                      314
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 314,
                        "name": "sent",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 366,
                        "src": "3888:9:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 313,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "3888:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 323,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 321,
                          "name": "amount_to_be_paid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 282,
                          "src": "3929:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 317,
                                "name": "loan",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 276,
                                "src": "3908:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                  "typeString": "struct Loan.Loan_info storage pointer"
                                }
                              },
                              "id": 318,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender_id",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 18,
                              "src": "3908:14:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 316,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3900:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 315,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3900:8:0",
                              "stateMutability": "payable",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3900:23:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 320,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "send",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3900:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (uint256) returns (bool)"
                        }
                      },
                      "id": 322,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3900:47:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3888:59:0"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 325,
                              "name": "loan",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 276,
                              "src": "3976:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                "typeString": "struct Loan.Loan_info storage pointer"
                              }
                            },
                            "id": 326,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender_id",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 18,
                            "src": "3976:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 327,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3976:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 324,
                        "name": "LogValueAfter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 460,
                        "src": "3962:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 328,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3962:37:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 329,
                    "nodeType": "EmitStatement",
                    "src": "3957:42:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 331,
                          "name": "sent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 314,
                          "src": "4017:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4661696c656420746f2073656e64207061796d656e74",
                          "id": 332,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4023:24:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_92ad45549db9f58d19e024365f85a0c8ac795b4a8ba66a369c16933f75075f07",
                            "typeString": "literal_string \"Failed to send payment\""
                          },
                          "value": "Failed to send payment"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_92ad45549db9f58d19e024365f85a0c8ac795b4a8ba66a369c16933f75075f07",
                            "typeString": "literal_string \"Failed to send payment\""
                          }
                        ],
                        "id": 330,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "4009:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 333,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4009:39:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 334,
                    "nodeType": "ExpressionStatement",
                    "src": "4009:39:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 335,
                          "name": "loan",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 276,
                          "src": "4093:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                            "typeString": "struct Loan.Loan_info storage pointer"
                          }
                        },
                        "id": 337,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "amount_repayed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20,
                        "src": "4093:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 338,
                        "name": "amount_to_be_paid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 282,
                        "src": "4116:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4093:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 340,
                    "nodeType": "ExpressionStatement",
                    "src": "4093:40:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 345,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 341,
                          "name": "loan",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 276,
                          "src": "4143:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                            "typeString": "struct Loan.Loan_info storage pointer"
                          }
                        },
                        "id": 343,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "time_of_repayment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14,
                        "src": "4143:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 344,
                        "name": "MONTH_IN_SECONDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100,
                        "src": "4169:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4143:42:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 346,
                    "nodeType": "ExpressionStatement",
                    "src": "4143:42:0"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 351,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 347,
                          "name": "loan",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 276,
                          "src": "4200:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                            "typeString": "struct Loan.Loan_info storage pointer"
                          }
                        },
                        "id": 348,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "amount_repayed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20,
                        "src": "4200:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 349,
                          "name": "loan",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 276,
                          "src": "4223:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                            "typeString": "struct Loan.Loan_info storage pointer"
                          }
                        },
                        "id": 350,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "amount_borrowed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "4223:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4200:43:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 359,
                    "nodeType": "IfStatement",
                    "src": "4196:94:0",
                    "trueBody": {
                      "id": 358,
                      "nodeType": "Block",
                      "src": "4245:45:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 356,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 352,
                                "name": "loan",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 276,
                                "src": "4259:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                                  "typeString": "struct Loan.Loan_info storage pointer"
                                }
                              },
                              "id": 354,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "memberName": "isRepaid",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 22,
                              "src": "4259:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "hexValue": "74727565",
                              "id": 355,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4275:4:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "src": "4259:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 357,
                          "nodeType": "ExpressionStatement",
                          "src": "4259:20:0"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 360,
                          "name": "loans_mapping",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "4300:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                            "typeString": "mapping(uint256 => struct Loan.Loan_info storage ref)"
                          }
                        },
                        "id": 362,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 361,
                          "name": "loanId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 272,
                          "src": "4314:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4300:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                          "typeString": "struct Loan.Loan_info storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 363,
                        "name": "loan",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 276,
                        "src": "4324:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                          "typeString": "struct Loan.Loan_info storage pointer"
                        }
                      },
                      "src": "4300:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                        "typeString": "struct Loan.Loan_info storage ref"
                      }
                    },
                    "id": 365,
                    "nodeType": "ExpressionStatement",
                    "src": "4300:28:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "3dec37fc",
              "id": 367,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "automaticMonthlyPayment",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 273,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 272,
                    "name": "loanId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 367,
                    "src": "3299:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 271,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3299:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3298:16:0"
              },
              "returnParameters": {
                "id": 274,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3329:0:0"
              },
              "scope": 473,
              "src": "3266:1069:0",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 418,
                "nodeType": "Block",
                "src": "4429:608:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          "id": 383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 377,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 689,
                              "src": "4447:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 378,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4447:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 379,
                                "name": "loans_mapping",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 39,
                                "src": "4461:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                                  "typeString": "mapping(uint256 => struct Loan.Loan_info storage ref)"
                                }
                              },
                              "id": 381,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 380,
                                "name": "loanId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 369,
                                "src": "4475:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4461:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                                "typeString": "struct Loan.Loan_info storage ref"
                              }
                            },
                            "id": 382,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "borrower_id",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 16,
                            "src": "4461:33:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "4447:47:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4f6e6c792074686520626f72726f7765722063616e206465706f73697420636f6c6c61746572616c",
                          "id": 384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4496:42:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_870fd4d59d3f3a049f760b401ed79173d5d6ef5f72a802b0e7dc792422acf340",
                            "typeString": "literal_string \"Only the borrower can deposit collateral\""
                          },
                          "value": "Only the borrower can deposit collateral"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_870fd4d59d3f3a049f760b401ed79173d5d6ef5f72a802b0e7dc792422acf340",
                            "typeString": "literal_string \"Only the borrower can deposit collateral\""
                          }
                        ],
                        "id": 376,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "4439:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4439:100:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 386,
                    "nodeType": "ExpressionStatement",
                    "src": "4439:100:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "4557:31:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 388,
                                "name": "loans_mapping",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 39,
                                "src": "4558:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                                  "typeString": "mapping(uint256 => struct Loan.Loan_info storage ref)"
                                }
                              },
                              "id": 390,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 389,
                                "name": "loanId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 369,
                                "src": "4572:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4558:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                                "typeString": "struct Loan.Loan_info storage ref"
                              }
                            },
                            "id": 391,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isRepaid",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 22,
                            "src": "4558:30:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "436f6c6c61746572616c2063616e6e6f74206265206465706f736974656420666f72206120726570616964206c6f616e",
                          "id": 393,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4590:50:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_cce25055cc518ce3c6a39158f4b67afd88e25523d38915e0b3241b4d1e02d575",
                            "typeString": "literal_string \"Collateral cannot be deposited for a repaid loan\""
                          },
                          "value": "Collateral cannot be deposited for a repaid loan"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_cce25055cc518ce3c6a39158f4b67afd88e25523d38915e0b3241b4d1e02d575",
                            "typeString": "literal_string \"Collateral cannot be deposited for a repaid loan\""
                          }
                        ],
                        "id": 387,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "4549:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 394,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4549:92:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 395,
                    "nodeType": "ExpressionStatement",
                    "src": "4549:92:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 397,
                                "name": "loanCollaterals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47,
                                "src": "4659:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Collateral_$35_storage_$",
                                  "typeString": "mapping(uint256 => struct Loan.Collateral storage ref)"
                                }
                              },
                              "id": 399,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 398,
                                "name": "loanId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 369,
                                "src": "4675:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4659:23:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Collateral_$35_storage",
                                "typeString": "struct Loan.Collateral storage ref"
                              }
                            },
                            "id": 400,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "nftContract",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 32,
                            "src": "4659:35:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 403,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4706:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 402,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4698:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 401,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4698:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 404,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4698:10:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "4659:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "436f6c6c61746572616c20697320616c7265616479206465706f736974656420666f722074686973206c6f616e",
                          "id": 406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4710:47:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_505b99e21ee1a0801c1bc5b9bc549a333d452e69707d64c74f99617b9935526c",
                            "typeString": "literal_string \"Collateral is already deposited for this loan\""
                          },
                          "value": "Collateral is already deposited for this loan"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_505b99e21ee1a0801c1bc5b9bc549a333d452e69707d64c74f99617b9935526c",
                            "typeString": "literal_string \"Collateral is already deposited for this loan\""
                          }
                        ],
                        "id": 396,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          692,
                          693
                        ],
                        "referencedDeclaration": 693,
                        "src": "4651:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4651:107:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 408,
                    "nodeType": "ExpressionStatement",
                    "src": "4651:107:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 416,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 409,
                          "name": "loanCollaterals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47,
                          "src": "4905:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Collateral_$35_storage_$",
                            "typeString": "mapping(uint256 => struct Loan.Collateral storage ref)"
                          }
                        },
                        "id": 411,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 410,
                          "name": "loanId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 369,
                          "src": "4921:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4905:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Collateral_$35_storage",
                          "typeString": "struct Loan.Collateral storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 413,
                            "name": "nftContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 371,
                            "src": "4942:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 414,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 373,
                            "src": "4955:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 412,
                          "name": "Collateral",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35,
                          "src": "4931:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Collateral_$35_storage_ptr_$",
                            "typeString": "type(struct Loan.Collateral storage pointer)"
                          }
                        },
                        "id": 415,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4931:32:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Collateral_$35_memory",
                          "typeString": "struct Loan.Collateral memory"
                        }
                      },
                      "src": "4905:58:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Collateral_$35_storage",
                        "typeString": "struct Loan.Collateral storage ref"
                      }
                    },
                    "id": 417,
                    "nodeType": "ExpressionStatement",
                    "src": "4905:58:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "ebea51b4",
              "id": 419,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "depositCollateral",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 374,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 369,
                    "name": "loanId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 419,
                    "src": "4368:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 368,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4368:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 371,
                    "name": "nftContract",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 419,
                    "src": "4384:19:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 370,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4384:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 373,
                    "name": "tokenId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 419,
                    "src": "4405:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 372,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4405:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4367:54:0"
              },
              "returnParameters": {
                "id": 375,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4429:0:0"
              },
              "scope": 473,
              "src": "4341:696:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 429,
                "nodeType": "Block",
                "src": "5126:84:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 426,
                        "name": "target_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 421,
                        "src": "5181:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 427,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5181:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 425,
                    "id": 428,
                    "nodeType": "Return",
                    "src": "5174:29:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "93423e9c",
              "id": 430,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getAccountBalance",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 422,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 421,
                    "name": "target_address",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 430,
                    "src": "5071:22:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 420,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5071:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5070:24:0"
              },
              "returnParameters": {
                "id": 425,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 424,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 430,
                    "src": "5117:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 423,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5117:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5116:9:0"
              },
              "scope": 473,
              "src": "5044:166:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 441,
                "nodeType": "Block",
                "src": "5296:46:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 437,
                        "name": "loans_mapping",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "5313:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Loan_info_$23_storage_$",
                          "typeString": "mapping(uint256 => struct Loan.Loan_info storage ref)"
                        }
                      },
                      "id": 439,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 438,
                        "name": "loan_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 432,
                        "src": "5327:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5313:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_info_$23_storage",
                        "typeString": "struct Loan.Loan_info storage ref"
                      }
                    },
                    "functionReturnParameters": 436,
                    "id": 440,
                    "nodeType": "Return",
                    "src": "5306:29:0"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "66877b8d",
              "id": 442,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getLoanDetails",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 433,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 432,
                    "name": "loan_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 442,
                    "src": "5240:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 431,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5240:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5239:17:0"
              },
              "returnParameters": {
                "id": 436,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 435,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 442,
                    "src": "5278:16:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Loan_info_$23_memory_ptr",
                      "typeString": "struct Loan.Loan_info"
                    },
                    "typeName": {
                      "contractScope": null,
                      "id": 434,
                      "name": "Loan_info",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 23,
                      "src": "5278:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                        "typeString": "struct Loan.Loan_info"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5277:18:0"
              },
              "scope": 473,
              "src": "5216:126:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 448,
              "name": "Log",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 447,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 444,
                    "indexed": false,
                    "name": "sender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 448,
                    "src": "5359:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 443,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5359:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 446,
                    "indexed": false,
                    "name": "balance",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 448,
                    "src": "5376:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 445,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5376:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5358:34:0"
              },
              "src": "5349:44:0"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 452,
              "name": "LogSender",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 451,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 450,
                    "indexed": false,
                    "name": "sender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 452,
                    "src": "5415:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 449,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5415:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5414:16:0"
              },
              "src": "5399:32:0"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 456,
              "name": "LogValueBefore",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 455,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 454,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 456,
                    "src": "5458:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 453,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5458:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5457:15:0"
              },
              "src": "5437:36:0"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 460,
              "name": "LogValueAfter",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 459,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 458,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 460,
                    "src": "5498:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 457,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5498:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5497:15:0"
              },
              "src": "5478:35:0"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 464,
              "name": "LogValue",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 463,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 462,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 464,
                    "src": "5533:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 461,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5533:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5532:15:0"
              },
              "src": "5518:30:0"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 468,
              "name": "LogMapping",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 467,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 466,
                    "indexed": false,
                    "name": "loan",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 468,
                    "src": "5571:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Loan_info_$23_memory_ptr",
                      "typeString": "struct Loan.Loan_info"
                    },
                    "typeName": {
                      "contractScope": null,
                      "id": 465,
                      "name": "Loan_info",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 23,
                      "src": "5571:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_info_$23_storage_ptr",
                        "typeString": "struct Loan.Loan_info"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5570:16:0"
              },
              "src": "5554:33:0"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 472,
              "name": "LogMappingProvided",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 471,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 470,
                    "indexed": false,
                    "name": "loan",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 472,
                    "src": "5618:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Loan_given_$30_memory_ptr",
                      "typeString": "struct Loan.Loan_given"
                    },
                    "typeName": {
                      "contractScope": null,
                      "id": 469,
                      "name": "Loan_given",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 30,
                      "src": "5618:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Loan_given_$30_storage_ptr",
                        "typeString": "struct Loan.Loan_given"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5617:17:0"
              },
              "src": "5593:42:0"
            }
          ],
          "scope": 474,
          "src": "148:5489:0"
        }
      ],
      "src": "32:5607:0"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/loan.sol",
        "exportedSymbols": {
          "Loan": [
            473
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "experimental",
              "ABIEncoderV2"
            ]
          },
          "id": 1,
          "name": "PragmaDirective",
          "src": "32:33:0"
        },
        {
          "attributes": {
            "literals": [
              "solidity",
              ">=",
              "0.4",
              ".22",
              "<",
              "0.9",
              ".0"
            ]
          },
          "id": 2,
          "name": "PragmaDirective",
          "src": "66:32:0"
        },
        {
          "attributes": {
            "abstract": false,
            "baseContracts": [
              null
            ],
            "contractDependencies": [
              null
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              473
            ],
            "name": "Loan",
            "scope": 474
          },
          "children": [
            {
              "attributes": {
                "constant": false,
                "name": "total_loans",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "private"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint256",
                    "type": "uint256"
                  },
                  "id": 3,
                  "name": "ElementaryTypeName",
                  "src": "168:7:0"
                }
              ],
              "id": 4,
              "name": "VariableDeclaration",
              "src": "168:27:0"
            },
            {
              "attributes": {
                "constant": false,
                "name": "total_provided_loans",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "private"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint256",
                    "type": "uint256"
                  },
                  "id": 5,
                  "name": "ElementaryTypeName",
                  "src": "201:7:0"
                }
              ],
              "id": 6,
              "name": "VariableDeclaration",
              "src": "201:36:0"
            },
            {
              "attributes": {
                "canonicalName": "Loan.Loan_info",
                "name": "Loan_info",
                "scope": 473,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "constant": false,
                    "name": "loan_id",
                    "overrides": null,
                    "scope": 23,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 7,
                      "name": "ElementaryTypeName",
                      "src": "275:7:0"
                    }
                  ],
                  "id": 8,
                  "name": "VariableDeclaration",
                  "src": "275:15:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "amount_borrowed",
                    "overrides": null,
                    "scope": 23,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 9,
                      "name": "ElementaryTypeName",
                      "src": "300:7:0"
                    }
                  ],
                  "id": 10,
                  "name": "VariableDeclaration",
                  "src": "300:23:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "interest_rate",
                    "overrides": null,
                    "scope": 23,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "int256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "int",
                        "type": "int256"
                      },
                      "id": 11,
                      "name": "ElementaryTypeName",
                      "src": "333:3:0"
                    }
                  ],
                  "id": 12,
                  "name": "VariableDeclaration",
                  "src": "333:17:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "time_of_repayment",
                    "overrides": null,
                    "scope": 23,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 13,
                      "name": "ElementaryTypeName",
                      "src": "360:7:0"
                    }
                  ],
                  "id": 14,
                  "name": "VariableDeclaration",
                  "src": "360:25:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "borrower_id",
                    "overrides": null,
                    "scope": 23,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "address payable",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "stateMutability": "payable",
                        "type": "address payable"
                      },
                      "id": 15,
                      "name": "ElementaryTypeName",
                      "src": "395:15:0"
                    }
                  ],
                  "id": 16,
                  "name": "VariableDeclaration",
                  "src": "395:27:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "sender_id",
                    "overrides": null,
                    "scope": 23,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "address payable",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "stateMutability": "payable",
                        "type": "address payable"
                      },
                      "id": 17,
                      "name": "ElementaryTypeName",
                      "src": "432:15:0"
                    }
                  ],
                  "id": 18,
                  "name": "VariableDeclaration",
                  "src": "432:25:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "amount_repayed",
                    "overrides": null,
                    "scope": 23,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 19,
                      "name": "ElementaryTypeName",
                      "src": "467:7:0"
                    }
                  ],
                  "id": 20,
                  "name": "VariableDeclaration",
                  "src": "467:22:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "isRepaid",
                    "overrides": null,
                    "scope": 23,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "bool",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "bool",
                        "type": "bool"
                      },
                      "id": 21,
                      "name": "ElementaryTypeName",
                      "src": "499:4:0"
                    }
                  ],
                  "id": 22,
                  "name": "VariableDeclaration",
                  "src": "499:13:0"
                }
              ],
              "id": 23,
              "name": "StructDefinition",
              "src": "249:304:0"
            },
            {
              "attributes": {
                "canonicalName": "Loan.Loan_given",
                "name": "Loan_given",
                "scope": 473,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "constant": false,
                    "name": "loan_id",
                    "overrides": null,
                    "scope": 30,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 24,
                      "name": "ElementaryTypeName",
                      "src": "586:7:0"
                    }
                  ],
                  "id": 25,
                  "name": "VariableDeclaration",
                  "src": "586:15:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "loan_amount",
                    "overrides": null,
                    "scope": 30,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 26,
                      "name": "ElementaryTypeName",
                      "src": "611:7:0"
                    }
                  ],
                  "id": 27,
                  "name": "VariableDeclaration",
                  "src": "611:19:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "loan_provider",
                    "overrides": null,
                    "scope": 30,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "address",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "stateMutability": "nonpayable",
                        "type": "address"
                      },
                      "id": 28,
                      "name": "ElementaryTypeName",
                      "src": "640:7:0"
                    }
                  ],
                  "id": 29,
                  "name": "VariableDeclaration",
                  "src": "640:21:0"
                }
              ],
              "id": 30,
              "name": "StructDefinition",
              "src": "559:109:0"
            },
            {
              "attributes": {
                "canonicalName": "Loan.Collateral",
                "name": "Collateral",
                "scope": 473,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "constant": false,
                    "name": "nftContract",
                    "overrides": null,
                    "scope": 35,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "address",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "stateMutability": "nonpayable",
                        "type": "address"
                      },
                      "id": 31,
                      "name": "ElementaryTypeName",
                      "src": "706:7:0"
                    }
                  ],
                  "id": 32,
                  "name": "VariableDeclaration",
                  "src": "706:19:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "tokenId",
                    "overrides": null,
                    "scope": 35,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 33,
                      "name": "ElementaryTypeName",
                      "src": "735:7:0"
                    }
                  ],
                  "id": 34,
                  "name": "VariableDeclaration",
                  "src": "735:15:0"
                }
              ],
              "id": 35,
              "name": "StructDefinition",
              "src": "678:79:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "e98210b1",
                "name": "loans_mapping",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(uint256 => struct Loan.Loan_info)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(uint256 => struct Loan.Loan_info)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 36,
                      "name": "ElementaryTypeName",
                      "src": "776:7:0"
                    },
                    {
                      "attributes": {
                        "contractScope": null,
                        "name": "Loan_info",
                        "referencedDeclaration": 23,
                        "type": "struct Loan.Loan_info"
                      },
                      "id": 37,
                      "name": "UserDefinedTypeName",
                      "src": "787:9:0"
                    }
                  ],
                  "id": 38,
                  "name": "Mapping",
                  "src": "767:30:0"
                }
              ],
              "id": 39,
              "name": "VariableDeclaration",
              "src": "767:51:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "8118785c",
                "name": "provided_loans",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(uint256 => struct Loan.Loan_given)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(uint256 => struct Loan.Loan_given)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 40,
                      "name": "ElementaryTypeName",
                      "src": "833:7:0"
                    },
                    {
                      "attributes": {
                        "contractScope": null,
                        "name": "Loan_given",
                        "referencedDeclaration": 30,
                        "type": "struct Loan.Loan_given"
                      },
                      "id": 41,
                      "name": "UserDefinedTypeName",
                      "src": "844:10:0"
                    }
                  ],
                  "id": 42,
                  "name": "Mapping",
                  "src": "824:31:0"
                }
              ],
              "id": 43,
              "name": "VariableDeclaration",
              "src": "824:53:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "50ed73b7",
                "name": "loanCollaterals",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(uint256 => struct Loan.Collateral)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(uint256 => struct Loan.Collateral)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 44,
                      "name": "ElementaryTypeName",
                      "src": "891:7:0"
                    },
                    {
                      "attributes": {
                        "contractScope": null,
                        "name": "Collateral",
                        "referencedDeclaration": 35,
                        "type": "struct Loan.Collateral"
                      },
                      "id": 45,
                      "name": "UserDefinedTypeName",
                      "src": "902:10:0"
                    }
                  ],
                  "id": 46,
                  "name": "Mapping",
                  "src": "883:30:0"
                }
              ],
              "id": 47,
              "name": "VariableDeclaration",
              "src": "883:53:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "4b7f1e5a",
                "name": "loansByBorrower",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => struct Loan.Loan_info[])",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => struct Loan.Loan_info[])"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 48,
                      "name": "ElementaryTypeName",
                      "src": "951:7:0"
                    },
                    {
                      "attributes": {
                        "length": null,
                        "type": "struct Loan.Loan_info[]"
                      },
                      "children": [
                        {
                          "attributes": {
                            "contractScope": null,
                            "name": "Loan_info",
                            "referencedDeclaration": 23,
                            "type": "struct Loan.Loan_info"
                          },
                          "id": 49,
                          "name": "UserDefinedTypeName",
                          "src": "962:9:0"
                        }
                      ],
                      "id": 50,
                      "name": "ArrayTypeName",
                      "src": "962:12:0"
                    }
                  ],
                  "id": 51,
                  "name": "Mapping",
                  "src": "942:33:0"
                }
              ],
              "id": 52,
              "name": "VariableDeclaration",
              "src": "942:56:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "01477e78",
                "name": "loansByReciever",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => struct Loan.Loan_info[])",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => struct Loan.Loan_info[])"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 53,
                      "name": "ElementaryTypeName",
                      "src": "1013:7:0"
                    },
                    {
                      "attributes": {
                        "length": null,
                        "type": "struct Loan.Loan_info[]"
                      },
                      "children": [
                        {
                          "attributes": {
                            "contractScope": null,
                            "name": "Loan_info",
                            "referencedDeclaration": 23,
                            "type": "struct Loan.Loan_info"
                          },
                          "id": 54,
                          "name": "UserDefinedTypeName",
                          "src": "1024:9:0"
                        }
                      ],
                      "id": 55,
                      "name": "ArrayTypeName",
                      "src": "1024:12:0"
                    }
                  ],
                  "id": 56,
                  "name": "Mapping",
                  "src": "1004:33:0"
                }
              ],
              "id": 57,
              "name": "VariableDeclaration",
              "src": "1004:56:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "7c4ea6c3",
                "name": "loansProvidedByTheirValue",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(uint256 => uint256)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(uint256 => uint256)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 58,
                      "name": "ElementaryTypeName",
                      "src": "1074:7:0"
                    },
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 59,
                      "name": "ElementaryTypeName",
                      "src": "1085:7:0"
                    }
                  ],
                  "id": 60,
                  "name": "Mapping",
                  "src": "1066:27:0"
                }
              ],
              "id": 61,
              "name": "VariableDeclaration",
              "src": "1066:60:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "e0e539a9",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "sendPaisa",
                "overrides": null,
                "scope": 473,
                "stateMutability": "payable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "from",
                        "overrides": null,
                        "scope": 97,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address payable",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "payable",
                            "type": "address payable"
                          },
                          "id": 62,
                          "name": "ElementaryTypeName",
                          "src": "1151:15:0"
                        }
                      ],
                      "id": 63,
                      "name": "VariableDeclaration",
                      "src": "1151:20:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_to",
                        "overrides": null,
                        "scope": 97,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address payable",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "payable",
                            "type": "address payable"
                          },
                          "id": 64,
                          "name": "ElementaryTypeName",
                          "src": "1174:15:0"
                        }
                      ],
                      "id": 65,
                      "name": "VariableDeclaration",
                      "src": "1174:19:0"
                    }
                  ],
                  "id": 66,
                  "name": "ParameterList",
                  "src": "1150:44:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 67,
                  "name": "ParameterList",
                  "src": "1210:0:0"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_3f96070838a802b00711e63911cb51cdbd018900fa6d34d5ff764f6299488092",
                                    "typeString": "literal_string \"Insufficient Funds\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 68,
                              "name": "Identifier",
                              "src": "1216:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "balance",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 63,
                                        "type": "address payable",
                                        "value": "from"
                                      },
                                      "id": 69,
                                      "name": "Identifier",
                                      "src": "1224:4:0"
                                    }
                                  ],
                                  "id": 70,
                                  "name": "MemberAccess",
                                  "src": "1224:12:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "value",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 689,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 71,
                                      "name": "Identifier",
                                      "src": "1240:3:0"
                                    }
                                  ],
                                  "id": 72,
                                  "name": "MemberAccess",
                                  "src": "1240:9:0"
                                }
                              ],
                              "id": 73,
                              "name": "BinaryOperation",
                              "src": "1224:25:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "496e73756666696369656e742046756e6473",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Insufficient Funds\"",
                                "value": "Insufficient Funds"
                              },
                              "id": 74,
                              "name": "Literal",
                              "src": "1251:20:0"
                            }
                          ],
                          "id": 75,
                          "name": "FunctionCall",
                          "src": "1216:56:0"
                        }
                      ],
                      "id": 76,
                      "name": "ExpressionStatement",
                      "src": "1216:56:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          78
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "sent",
                            "overrides": null,
                            "scope": 96,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 77,
                              "name": "ElementaryTypeName",
                              "src": "1310:4:0"
                            }
                          ],
                          "id": 78,
                          "name": "VariableDeclaration",
                          "src": "1310:9:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "bool",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "send",
                                "referencedDeclaration": null,
                                "type": "function (uint256) returns (bool)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 65,
                                    "type": "address payable",
                                    "value": "_to"
                                  },
                                  "id": 79,
                                  "name": "Identifier",
                                  "src": "1322:3:0"
                                }
                              ],
                              "id": 80,
                              "name": "MemberAccess",
                              "src": "1322:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "value",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 689,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 81,
                                  "name": "Identifier",
                                  "src": "1331:3:0"
                                }
                              ],
                              "id": 82,
                              "name": "MemberAccess",
                              "src": "1331:9:0"
                            }
                          ],
                          "id": 83,
                          "name": "FunctionCall",
                          "src": "1322:19:0"
                        }
                      ],
                      "id": 84,
                      "name": "VariableDeclarationStatement",
                      "src": "1310:31:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_b090ac9b4324226978d6a01b7f3d156f7383ac0de7f6c2461d98ee4aa3a631d5",
                                    "typeString": "literal_string \"Transaction Failed!\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 85,
                              "name": "Identifier",
                              "src": "1347:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 78,
                                "type": "bool",
                                "value": "sent"
                              },
                              "id": 86,
                              "name": "Identifier",
                              "src": "1355:4:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "5472616e73616374696f6e204661696c656421",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Transaction Failed!\"",
                                "value": "Transaction Failed!"
                              },
                              "id": 87,
                              "name": "Literal",
                              "src": "1362:21:0"
                            }
                          ],
                          "id": 88,
                          "name": "FunctionCall",
                          "src": "1347:37:0"
                        }
                      ],
                      "id": 89,
                      "name": "ExpressionStatement",
                      "src": "1347:37:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 448,
                                "type": "function (address,uint256)",
                                "value": "Log"
                              },
                              "id": 90,
                              "name": "Identifier",
                              "src": "1395:3:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 65,
                                "type": "address payable",
                                "value": "_to"
                              },
                              "id": 91,
                              "name": "Identifier",
                              "src": "1399:3:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "balance",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 65,
                                    "type": "address payable",
                                    "value": "_to"
                                  },
                                  "id": 92,
                                  "name": "Identifier",
                                  "src": "1404:3:0"
                                }
                              ],
                              "id": 93,
                              "name": "MemberAccess",
                              "src": "1404:11:0"
                            }
                          ],
                          "id": 94,
                          "name": "FunctionCall",
                          "src": "1395:21:0"
                        }
                      ],
                      "id": 95,
                      "name": "EmitStatement",
                      "src": "1390:26:0"
                    }
                  ],
                  "id": 96,
                  "name": "Block",
                  "src": "1210:209:0"
                }
              ],
              "id": 97,
              "name": "FunctionDefinition",
              "src": "1132:287:0"
            },
            {
              "attributes": {
                "constant": true,
                "name": "MONTH_IN_SECONDS",
                "overrides": null,
                "scope": 473,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "visibility": "private"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint256",
                    "type": "uint256"
                  },
                  "id": 98,
                  "name": "ElementaryTypeName",
                  "src": "1425:7:0"
                },
                {
                  "attributes": {
                    "argumentTypes": null,
                    "hexvalue": "31",
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "subdenomination": "days",
                    "token": "number",
                    "type": "int_const 86400",
                    "value": "1"
                  },
                  "id": 99,
                  "name": "Literal",
                  "src": "1469:6:0"
                }
              ],
              "id": 100,
              "name": "VariableDeclaration",
              "src": "1425:50:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "3e4e6f09",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "provideLoan",
                "overrides": null,
                "scope": 473,
                "stateMutability": "payable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "loan_provider",
                        "overrides": null,
                        "scope": 124,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 101,
                          "name": "ElementaryTypeName",
                          "src": "1504:7:0"
                        }
                      ],
                      "id": 102,
                      "name": "VariableDeclaration",
                      "src": "1504:21:0"
                    }
                  ],
                  "id": 103,
                  "name": "ParameterList",
                  "src": "1503:23:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 104,
                  "name": "ParameterList",
                  "src": "1541:0:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          106
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "loan_given",
                            "overrides": null,
                            "scope": 123,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "struct Loan.Loan_given",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "Loan_given",
                                "referencedDeclaration": 30,
                                "type": "struct Loan.Loan_given"
                              },
                              "id": 105,
                              "name": "UserDefinedTypeName",
                              "src": "1551:10:0"
                            }
                          ],
                          "id": 106,
                          "name": "VariableDeclaration",
                          "src": "1551:28:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": true,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "struct Loan.Loan_given memory",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 30,
                                "type": "type(struct Loan.Loan_given storage pointer)",
                                "value": "Loan_given"
                              },
                              "id": 107,
                              "name": "Identifier",
                              "src": "1582:10:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 6,
                                "type": "uint256",
                                "value": "total_provided_loans"
                              },
                              "id": 108,
                              "name": "Identifier",
                              "src": "1593:20:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "value",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 689,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 109,
                                  "name": "Identifier",
                                  "src": "1616:3:0"
                                }
                              ],
                              "id": 110,
                              "name": "MemberAccess",
                              "src": "1616:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 102,
                                "type": "address",
                                "value": "loan_provider"
                              },
                              "id": 111,
                              "name": "Identifier",
                              "src": "1628:13:0"
                            }
                          ],
                          "id": 112,
                          "name": "FunctionCall",
                          "src": "1582:60:0"
                        }
                      ],
                      "id": 113,
                      "name": "VariableDeclarationStatement",
                      "src": "1551:91:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "struct Loan.Loan_given storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "struct Loan.Loan_given storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 43,
                                    "type": "mapping(uint256 => struct Loan.Loan_given storage ref)",
                                    "value": "provided_loans"
                                  },
                                  "id": 114,
                                  "name": "Identifier",
                                  "src": "1652:14:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 6,
                                    "type": "uint256",
                                    "value": "total_provided_loans"
                                  },
                                  "id": 115,
                                  "name": "Identifier",
                                  "src": "1667:20:0"
                                }
                              ],
                              "id": 116,
                              "name": "IndexAccess",
                              "src": "1652:36:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 106,
                                "type": "struct Loan.Loan_given memory",
                                "value": "loan_given"
                              },
                              "id": 117,
                              "name": "Identifier",
                              "src": "1691:10:0"
                            }
                          ],
                          "id": 118,
                          "name": "Assignment",
                          "src": "1652:49:0"
                        }
                      ],
                      "id": 119,
                      "name": "ExpressionStatement",
                      "src": "1652:49:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "++",
                            "prefix": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 6,
                                "type": "uint256",
                                "value": "total_provided_loans"
                              },
                              "id": 120,
                              "name": "Identifier",
                              "src": "1711:20:0"
                            }
                          ],
                          "id": 121,
                          "name": "UnaryOperation",
                          "src": "1711:22:0"
                        }
                      ],
                      "id": 122,
                      "name": "ExpressionStatement",
                      "src": "1711:22:0"
                    }
                  ],
                  "id": 123,
                  "name": "Block",
                  "src": "1541:202:0"
                }
              ],
              "id": 124,
              "name": "FunctionDefinition",
              "src": "1483:260:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "fa47034d",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "checkProvidedLoans",
                "overrides": null,
                "scope": 473,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "loan_id",
                        "overrides": null,
                        "scope": 136,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 125,
                          "name": "ElementaryTypeName",
                          "src": "1777:7:0"
                        }
                      ],
                      "id": 126,
                      "name": "VariableDeclaration",
                      "src": "1777:15:0"
                    }
                  ],
                  "id": 127,
                  "name": "ParameterList",
                  "src": "1776:17:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 136,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "struct Loan.Loan_given",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "contractScope": null,
                            "name": "Loan_given",
                            "referencedDeclaration": 30,
                            "type": "struct Loan.Loan_given"
                          },
                          "id": 128,
                          "name": "UserDefinedTypeName",
                          "src": "1815:10:0"
                        }
                      ],
                      "id": 129,
                      "name": "VariableDeclaration",
                      "src": "1815:17:0"
                    }
                  ],
                  "id": 130,
                  "name": "ParameterList",
                  "src": "1814:19:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 130
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "struct Loan.Loan_given storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 43,
                                "type": "mapping(uint256 => struct Loan.Loan_given storage ref)",
                                "value": "provided_loans"
                              },
                              "id": 131,
                              "name": "Identifier",
                              "src": "1851:14:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 126,
                                "type": "uint256",
                                "value": "loan_id"
                              },
                              "id": 132,
                              "name": "Identifier",
                              "src": "1866:7:0"
                            }
                          ],
                          "id": 133,
                          "name": "IndexAccess",
                          "src": "1851:23:0"
                        }
                      ],
                      "id": 134,
                      "name": "Return",
                      "src": "1844:30:0"
                    }
                  ],
                  "id": 135,
                  "name": "Block",
                  "src": "1834:47:0"
                }
              ],
              "id": 136,
              "name": "FunctionDefinition",
              "src": "1749:132:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "e0bd38ac",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getLoan",
                "overrides": null,
                "scope": 473,
                "stateMutability": "payable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "provided_loanID",
                        "overrides": null,
                        "scope": 210,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 137,
                          "name": "ElementaryTypeName",
                          "src": "1908:7:0"
                        }
                      ],
                      "id": 138,
                      "name": "VariableDeclaration",
                      "src": "1908:23:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_interest_rate",
                        "overrides": null,
                        "scope": 210,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "int256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "int",
                            "type": "int256"
                          },
                          "id": 139,
                          "name": "ElementaryTypeName",
                          "src": "1937:3:0"
                        }
                      ],
                      "id": 140,
                      "name": "VariableDeclaration",
                      "src": "1937:18:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_time_of_repayment",
                        "overrides": null,
                        "scope": 210,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 141,
                          "name": "ElementaryTypeName",
                          "src": "1961:7:0"
                        }
                      ],
                      "id": 142,
                      "name": "VariableDeclaration",
                      "src": "1961:26:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_borrower_id",
                        "overrides": null,
                        "scope": 210,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address payable",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "payable",
                            "type": "address payable"
                          },
                          "id": 143,
                          "name": "ElementaryTypeName",
                          "src": "1993:15:0"
                        }
                      ],
                      "id": 144,
                      "name": "VariableDeclaration",
                      "src": "1993:28:0"
                    }
                  ],
                  "id": 145,
                  "name": "ParameterList",
                  "src": "1902:121:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 146,
                  "name": "ParameterList",
                  "src": "2039:0:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          148
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_sender_id",
                            "overrides": null,
                            "scope": 209,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "address",
                                "stateMutability": "nonpayable",
                                "type": "address"
                              },
                              "id": 147,
                              "name": "ElementaryTypeName",
                              "src": "2045:7:0"
                            }
                          ],
                          "id": 148,
                          "name": "VariableDeclaration",
                          "src": "2045:18:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "member_name": "loan_provider",
                            "referencedDeclaration": 29,
                            "type": "address"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "type": "struct Loan.Loan_given storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 43,
                                    "type": "mapping(uint256 => struct Loan.Loan_given storage ref)",
                                    "value": "provided_loans"
                                  },
                                  "id": 149,
                                  "name": "Identifier",
                                  "src": "2066:14:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 138,
                                    "type": "uint256",
                                    "value": "provided_loanID"
                                  },
                                  "id": 150,
                                  "name": "Identifier",
                                  "src": "2081:15:0"
                                }
                              ],
                              "id": 151,
                              "name": "IndexAccess",
                              "src": "2066:31:0"
                            }
                          ],
                          "id": 152,
                          "name": "MemberAccess",
                          "src": "2066:45:0"
                        }
                      ],
                      "id": 153,
                      "name": "VariableDeclarationStatement",
                      "src": "2045:66:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          155
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_amount_borrowed",
                            "overrides": null,
                            "scope": 209,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint256",
                                "type": "uint256"
                              },
                              "id": 154,
                              "name": "ElementaryTypeName",
                              "src": "2117:7:0"
                            }
                          ],
                          "id": 155,
                          "name": "VariableDeclaration",
                          "src": "2117:24:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "member_name": "loan_amount",
                            "referencedDeclaration": 27,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "type": "struct Loan.Loan_given storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 43,
                                    "type": "mapping(uint256 => struct Loan.Loan_given storage ref)",
                                    "value": "provided_loans"
                                  },
                                  "id": 156,
                                  "name": "Identifier",
                                  "src": "2144:14:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 138,
                                    "type": "uint256",
                                    "value": "provided_loanID"
                                  },
                                  "id": 157,
                                  "name": "Identifier",
                                  "src": "2159:15:0"
                                }
                              ],
                              "id": 158,
                              "name": "IndexAccess",
                              "src": "2144:31:0"
                            }
                          ],
                          "id": 159,
                          "name": "MemberAccess",
                          "src": "2144:43:0"
                        }
                      ],
                      "id": 160,
                      "name": "VariableDeclarationStatement",
                      "src": "2117:70:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_63580c8f2f353fc5b6490d467132dc04a523d5a3d9a1206eea4b2a39c4d766db",
                                    "typeString": "literal_string \"Contract balance is insufficient\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 161,
                              "name": "Identifier",
                              "src": "2193:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "balance",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "isStructConstructorCall": false,
                                        "lValueRequested": false,
                                        "names": [
                                          null
                                        ],
                                        "tryCall": false,
                                        "type": "address",
                                        "type_conversion": true
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_contract$_Loan_$473",
                                                "typeString": "contract Loan"
                                              }
                                            ],
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "type": "type(address)"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "name": "address",
                                                "type": null
                                              },
                                              "id": 162,
                                              "name": "ElementaryTypeName",
                                              "src": "2201:7:0"
                                            }
                                          ],
                                          "id": 163,
                                          "name": "ElementaryTypeNameExpression",
                                          "src": "2201:7:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 703,
                                            "type": "contract Loan",
                                            "value": "this"
                                          },
                                          "id": 164,
                                          "name": "Identifier",
                                          "src": "2209:4:0"
                                        }
                                      ],
                                      "id": 165,
                                      "name": "FunctionCall",
                                      "src": "2201:13:0"
                                    }
                                  ],
                                  "id": 166,
                                  "name": "MemberAccess",
                                  "src": "2201:21:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 155,
                                    "type": "uint256",
                                    "value": "_amount_borrowed"
                                  },
                                  "id": 167,
                                  "name": "Identifier",
                                  "src": "2226:16:0"
                                }
                              ],
                              "id": 168,
                              "name": "BinaryOperation",
                              "src": "2201:41:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "436f6e74726163742062616c616e636520697320696e73756666696369656e74",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Contract balance is insufficient\"",
                                "value": "Contract balance is insufficient"
                              },
                              "id": 169,
                              "name": "Literal",
                              "src": "2244:34:0"
                            }
                          ],
                          "id": 170,
                          "name": "FunctionCall",
                          "src": "2193:86:0"
                        }
                      ],
                      "id": 171,
                      "name": "ExpressionStatement",
                      "src": "2193:86:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          173
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "loan",
                            "overrides": null,
                            "scope": 209,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "struct Loan.Loan_info",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "Loan_info",
                                "referencedDeclaration": 23,
                                "type": "struct Loan.Loan_info"
                              },
                              "id": 172,
                              "name": "UserDefinedTypeName",
                              "src": "2334:9:0"
                            }
                          ],
                          "id": 173,
                          "name": "VariableDeclaration",
                          "src": "2334:21:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": true,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "struct Loan.Loan_info memory",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 23,
                                "type": "type(struct Loan.Loan_info storage pointer)",
                                "value": "Loan_info"
                              },
                              "id": 174,
                              "name": "Identifier",
                              "src": "2358:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 4,
                                "type": "uint256",
                                "value": "total_loans"
                              },
                              "id": 175,
                              "name": "Identifier",
                              "src": "2368:11:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 155,
                                "type": "uint256",
                                "value": "_amount_borrowed"
                              },
                              "id": 176,
                              "name": "Identifier",
                              "src": "2381:16:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 140,
                                "type": "int256",
                                "value": "_interest_rate"
                              },
                              "id": 177,
                              "name": "Identifier",
                              "src": "2399:14:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 142,
                                "type": "uint256",
                                "value": "_time_of_repayment"
                              },
                              "id": 178,
                              "name": "Identifier",
                              "src": "2415:18:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 144,
                                "type": "address payable",
                                "value": "_borrower_id"
                              },
                              "id": 179,
                              "name": "Identifier",
                              "src": "2435:12:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "address payable",
                                "type_conversion": true
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "type": "type(address payable)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "name": "address",
                                        "stateMutability": "payable",
                                        "type": null
                                      },
                                      "id": 180,
                                      "name": "ElementaryTypeName",
                                      "src": "2449:8:0"
                                    }
                                  ],
                                  "id": 181,
                                  "name": "ElementaryTypeNameExpression",
                                  "src": "2449:8:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 148,
                                    "type": "address",
                                    "value": "_sender_id"
                                  },
                                  "id": 182,
                                  "name": "Identifier",
                                  "src": "2457:10:0"
                                }
                              ],
                              "id": 183,
                              "name": "FunctionCall",
                              "src": "2449:19:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 184,
                              "name": "Literal",
                              "src": "2470:1:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "66616c7365",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "bool",
                                "type": "bool",
                                "value": "false"
                              },
                              "id": 185,
                              "name": "Literal",
                              "src": "2473:5:0"
                            }
                          ],
                          "id": 186,
                          "name": "FunctionCall",
                          "src": "2358:121:0"
                        }
                      ],
                      "id": 187,
                      "name": "VariableDeclarationStatement",
                      "src": "2334:145:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "struct Loan.Loan_info storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "struct Loan.Loan_info storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 39,
                                    "type": "mapping(uint256 => struct Loan.Loan_info storage ref)",
                                    "value": "loans_mapping"
                                  },
                                  "id": 188,
                                  "name": "Identifier",
                                  "src": "2485:13:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 4,
                                    "type": "uint256",
                                    "value": "total_loans"
                                  },
                                  "id": 189,
                                  "name": "Identifier",
                                  "src": "2499:11:0"
                                }
                              ],
                              "id": 190,
                              "name": "IndexAccess",
                              "src": "2485:26:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 173,
                                "type": "struct Loan.Loan_info memory",
                                "value": "loan"
                              },
                              "id": 191,
                              "name": "Identifier",
                              "src": "2514:4:0"
                            }
                          ],
                          "id": 192,
                          "name": "Assignment",
                          "src": "2485:33:0"
                        }
                      ],
                      "id": 193,
                      "name": "ExpressionStatement",
                      "src": "2485:33:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "++",
                            "prefix": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 4,
                                "type": "uint256",
                                "value": "total_loans"
                              },
                              "id": 194,
                              "name": "Identifier",
                              "src": "2524:11:0"
                            }
                          ],
                          "id": 195,
                          "name": "UnaryOperation",
                          "src": "2524:13:0"
                        }
                      ],
                      "id": 196,
                      "name": "ExpressionStatement",
                      "src": "2524:13:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          198
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "sent",
                            "overrides": null,
                            "scope": 209,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 197,
                              "name": "ElementaryTypeName",
                              "src": "2583:4:0"
                            }
                          ],
                          "id": 198,
                          "name": "VariableDeclaration",
                          "src": "2583:9:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "bool",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "send",
                                "referencedDeclaration": null,
                                "type": "function (uint256) returns (bool)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 144,
                                    "type": "address payable",
                                    "value": "_borrower_id"
                                  },
                                  "id": 199,
                                  "name": "Identifier",
                                  "src": "2595:12:0"
                                }
                              ],
                              "id": 200,
                              "name": "MemberAccess",
                              "src": "2595:17:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 155,
                                "type": "uint256",
                                "value": "_amount_borrowed"
                              },
                              "id": 201,
                              "name": "Identifier",
                              "src": "2613:16:0"
                            }
                          ],
                          "id": 202,
                          "name": "FunctionCall",
                          "src": "2595:35:0"
                        }
                      ],
                      "id": 203,
                      "name": "VariableDeclarationStatement",
                      "src": "2583:47:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_4e0e83c9fbc9d3951bde72fa4e20c8edda20ecd10e3bfbbda1ec49cb0f636ce4",
                                    "typeString": "literal_string \"Failed to send Ether to the borrower\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 204,
                              "name": "Identifier",
                              "src": "2686:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 198,
                                "type": "bool",
                                "value": "sent"
                              },
                              "id": 205,
                              "name": "Identifier",
                              "src": "2694:4:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4661696c656420746f2073656e6420457468657220746f2074686520626f72726f776572",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Failed to send Ether to the borrower\"",
                                "value": "Failed to send Ether to the borrower"
                              },
                              "id": 206,
                              "name": "Literal",
                              "src": "2700:38:0"
                            }
                          ],
                          "id": 207,
                          "name": "FunctionCall",
                          "src": "2686:53:0"
                        }
                      ],
                      "id": 208,
                      "name": "ExpressionStatement",
                      "src": "2686:53:0"
                    }
                  ],
                  "id": 209,
                  "name": "Block",
                  "src": "2039:703:0"
                }
              ],
              "id": 210,
              "name": "FunctionDefinition",
              "src": "1886:856:0"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "calculateMonthlyPayment",
                "overrides": null,
                "scope": 473,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "internal"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "loanId",
                        "overrides": null,
                        "scope": 259,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 211,
                          "name": "ElementaryTypeName",
                          "src": "2782:7:0"
                        }
                      ],
                      "id": 212,
                      "name": "VariableDeclaration",
                      "src": "2782:14:0"
                    }
                  ],
                  "id": 213,
                  "name": "ParameterList",
                  "src": "2781:16:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 259,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 214,
                          "name": "ElementaryTypeName",
                          "src": "2821:7:0"
                        }
                      ],
                      "id": 215,
                      "name": "VariableDeclaration",
                      "src": "2821:7:0"
                    }
                  ],
                  "id": 216,
                  "name": "ParameterList",
                  "src": "2820:9:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          218
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "loan",
                            "overrides": null,
                            "scope": 258,
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "type": "struct Loan.Loan_info",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "Loan_info",
                                "referencedDeclaration": 23,
                                "type": "struct Loan.Loan_info"
                              },
                              "id": 217,
                              "name": "UserDefinedTypeName",
                              "src": "2840:9:0"
                            }
                          ],
                          "id": 218,
                          "name": "VariableDeclaration",
                          "src": "2840:22:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "struct Loan.Loan_info storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 39,
                                "type": "mapping(uint256 => struct Loan.Loan_info storage ref)",
                                "value": "loans_mapping"
                              },
                              "id": 219,
                              "name": "Identifier",
                              "src": "2865:13:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 212,
                                "type": "uint256",
                                "value": "loanId"
                              },
                              "id": 220,
                              "name": "Identifier",
                              "src": "2879:6:0"
                            }
                          ],
                          "id": 221,
                          "name": "IndexAccess",
                          "src": "2865:21:0"
                        }
                      ],
                      "id": 222,
                      "name": "VariableDeclarationStatement",
                      "src": "2840:46:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          224
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "totalLoanAmount",
                            "overrides": null,
                            "scope": 258,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint256",
                                "type": "uint256"
                              },
                              "id": 223,
                              "name": "ElementaryTypeName",
                              "src": "2896:7:0"
                            }
                          ],
                          "id": 224,
                          "name": "VariableDeclaration",
                          "src": "2896:23:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "-",
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "/",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "*",
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "amount_borrowed",
                                            "referencedDeclaration": 10,
                                            "type": "uint256"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 218,
                                                "type": "struct Loan.Loan_info storage pointer",
                                                "value": "loan"
                                              },
                                              "id": 225,
                                              "name": "Identifier",
                                              "src": "2923:4:0"
                                            }
                                          ],
                                          "id": 226,
                                          "name": "MemberAccess",
                                          "src": "2923:20:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "type": "uint256"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "operator": "+",
                                                "type": "uint256"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "hexvalue": "313030",
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "subdenomination": null,
                                                    "token": "number",
                                                    "type": "int_const 100",
                                                    "value": "100"
                                                  },
                                                  "id": 227,
                                                  "name": "Literal",
                                                  "src": "2947:3:0"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                      null
                                                    ],
                                                    "tryCall": false,
                                                    "type": "uint256",
                                                    "type_conversion": true
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": [
                                                          {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                          }
                                                        ],
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "type": "type(uint256)"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "name": "uint256",
                                                            "type": null
                                                          },
                                                          "id": 228,
                                                          "name": "ElementaryTypeName",
                                                          "src": "2953:7:0"
                                                        }
                                                      ],
                                                      "id": 229,
                                                      "name": "ElementaryTypeNameExpression",
                                                      "src": "2953:7:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "member_name": "interest_rate",
                                                        "referencedDeclaration": 12,
                                                        "type": "int256"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 218,
                                                            "type": "struct Loan.Loan_info storage pointer",
                                                            "value": "loan"
                                                          },
                                                          "id": 230,
                                                          "name": "Identifier",
                                                          "src": "2961:4:0"
                                                        }
                                                      ],
                                                      "id": 231,
                                                      "name": "MemberAccess",
                                                      "src": "2961:18:0"
                                                    }
                                                  ],
                                                  "id": 232,
                                                  "name": "FunctionCall",
                                                  "src": "2953:27:0"
                                                }
                                              ],
                                              "id": 233,
                                              "name": "BinaryOperation",
                                              "src": "2947:33:0"
                                            }
                                          ],
                                          "id": 234,
                                          "name": "TupleExpression",
                                          "src": "2946:35:0"
                                        }
                                      ],
                                      "id": 235,
                                      "name": "BinaryOperation",
                                      "src": "2923:58:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "313030",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 100",
                                        "value": "100"
                                      },
                                      "id": 236,
                                      "name": "Literal",
                                      "src": "2984:3:0"
                                    }
                                  ],
                                  "id": 237,
                                  "name": "BinaryOperation",
                                  "src": "2923:64:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "amount_repayed",
                                    "referencedDeclaration": 20,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 218,
                                        "type": "struct Loan.Loan_info storage pointer",
                                        "value": "loan"
                                      },
                                      "id": 238,
                                      "name": "Identifier",
                                      "src": "2990:4:0"
                                    }
                                  ],
                                  "id": 239,
                                  "name": "MemberAccess",
                                  "src": "2990:19:0"
                                }
                              ],
                              "id": 240,
                              "name": "BinaryOperation",
                              "src": "2923:86:0"
                            }
                          ],
                          "id": 241,
                          "name": "TupleExpression",
                          "src": "2922:88:0"
                        }
                      ],
                      "id": 242,
                      "name": "VariableDeclarationStatement",
                      "src": "2896:114:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          244
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "remainingMonths",
                            "overrides": null,
                            "scope": 258,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint256",
                                "type": "uint256"
                              },
                              "id": 243,
                              "name": "ElementaryTypeName",
                              "src": "3020:7:0"
                            }
                          ],
                          "id": 244,
                          "name": "VariableDeclaration",
                          "src": "3020:23:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "/",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "-",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "timestamp",
                                        "referencedDeclaration": null,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 679,
                                            "type": "block",
                                            "value": "block"
                                          },
                                          "id": 245,
                                          "name": "Identifier",
                                          "src": "3047:5:0"
                                        }
                                      ],
                                      "id": 246,
                                      "name": "MemberAccess",
                                      "src": "3047:15:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "time_of_repayment",
                                        "referencedDeclaration": 14,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 218,
                                            "type": "struct Loan.Loan_info storage pointer",
                                            "value": "loan"
                                          },
                                          "id": 247,
                                          "name": "Identifier",
                                          "src": "3065:4:0"
                                        }
                                      ],
                                      "id": 248,
                                      "name": "MemberAccess",
                                      "src": "3065:22:0"
                                    }
                                  ],
                                  "id": 249,
                                  "name": "BinaryOperation",
                                  "src": "3047:40:0"
                                }
                              ],
                              "id": 250,
                              "name": "TupleExpression",
                              "src": "3046:42:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 100,
                                "type": "uint256",
                                "value": "MONTH_IN_SECONDS"
                              },
                              "id": 251,
                              "name": "Identifier",
                              "src": "3091:16:0"
                            }
                          ],
                          "id": 252,
                          "name": "BinaryOperation",
                          "src": "3046:61:0"
                        }
                      ],
                      "id": 253,
                      "name": "VariableDeclarationStatement",
                      "src": "3020:87:0"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 216
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "/",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 224,
                                "type": "uint256",
                                "value": "totalLoanAmount"
                              },
                              "id": 254,
                              "name": "Identifier",
                              "src": "3124:15:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 244,
                                "type": "uint256",
                                "value": "remainingMonths"
                              },
                              "id": 255,
                              "name": "Identifier",
                              "src": "3142:15:0"
                            }
                          ],
                          "id": 256,
                          "name": "BinaryOperation",
                          "src": "3124:33:0"
                        }
                      ],
                      "id": 257,
                      "name": "Return",
                      "src": "3117:40:0"
                    }
                  ],
                  "id": 258,
                  "name": "Block",
                  "src": "2830:334:0"
                }
              ],
              "id": 259,
              "name": "FunctionDefinition",
              "src": "2749:415:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "bdbfa3de",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "cancelLoan",
                "overrides": null,
                "scope": 473,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "loan_id",
                        "overrides": null,
                        "scope": 270,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 260,
                          "name": "ElementaryTypeName",
                          "src": "3190:7:0"
                        }
                      ],
                      "id": 261,
                      "name": "VariableDeclaration",
                      "src": "3190:15:0"
                    }
                  ],
                  "id": 262,
                  "name": "ParameterList",
                  "src": "3189:17:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 263,
                  "name": "ParameterList",
                  "src": "3214:0:0"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "delete",
                            "prefix": true,
                            "type": "tuple()"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "struct Loan.Loan_info storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 39,
                                    "type": "mapping(uint256 => struct Loan.Loan_info storage ref)",
                                    "value": "loans_mapping"
                                  },
                                  "id": 264,
                                  "name": "Identifier",
                                  "src": "3231:13:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 261,
                                    "type": "uint256",
                                    "value": "loan_id"
                                  },
                                  "id": 265,
                                  "name": "Identifier",
                                  "src": "3245:7:0"
                                }
                              ],
                              "id": 266,
                              "name": "IndexAccess",
                              "src": "3231:22:0"
                            }
                          ],
                          "id": 267,
                          "name": "UnaryOperation",
                          "src": "3224:29:0"
                        }
                      ],
                      "id": 268,
                      "name": "ExpressionStatement",
                      "src": "3224:29:0"
                    }
                  ],
                  "id": 269,
                  "name": "Block",
                  "src": "3214:46:0"
                }
              ],
              "id": 270,
              "name": "FunctionDefinition",
              "src": "3170:90:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "3dec37fc",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "automaticMonthlyPayment",
                "overrides": null,
                "scope": 473,
                "stateMutability": "payable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "loanId",
                        "overrides": null,
                        "scope": 367,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 271,
                          "name": "ElementaryTypeName",
                          "src": "3299:7:0"
                        }
                      ],
                      "id": 272,
                      "name": "VariableDeclaration",
                      "src": "3299:14:0"
                    }
                  ],
                  "id": 273,
                  "name": "ParameterList",
                  "src": "3298:16:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 274,
                  "name": "ParameterList",
                  "src": "3329:0:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          276
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "loan",
                            "overrides": null,
                            "scope": 366,
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "type": "struct Loan.Loan_info",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "Loan_info",
                                "referencedDeclaration": 23,
                                "type": "struct Loan.Loan_info"
                              },
                              "id": 275,
                              "name": "UserDefinedTypeName",
                              "src": "3339:9:0"
                            }
                          ],
                          "id": 276,
                          "name": "VariableDeclaration",
                          "src": "3339:22:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "struct Loan.Loan_info storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 39,
                                "type": "mapping(uint256 => struct Loan.Loan_info storage ref)",
                                "value": "loans_mapping"
                              },
                              "id": 277,
                              "name": "Identifier",
                              "src": "3364:13:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 272,
                                "type": "uint256",
                                "value": "loanId"
                              },
                              "id": 278,
                              "name": "Identifier",
                              "src": "3378:6:0"
                            }
                          ],
                          "id": 279,
                          "name": "IndexAccess",
                          "src": "3364:21:0"
                        }
                      ],
                      "id": 280,
                      "name": "VariableDeclarationStatement",
                      "src": "3339:46:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          282
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "amount_to_be_paid",
                            "overrides": null,
                            "scope": 366,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint256",
                                "type": "uint256"
                              },
                              "id": 281,
                              "name": "ElementaryTypeName",
                              "src": "3395:7:0"
                            }
                          ],
                          "id": 282,
                          "name": "VariableDeclaration",
                          "src": "3395:25:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "uint256",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 259,
                                "type": "function (uint256) view returns (uint256)",
                                "value": "calculateMonthlyPayment"
                              },
                              "id": 283,
                              "name": "Identifier",
                              "src": "3423:23:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 272,
                                "type": "uint256",
                                "value": "loanId"
                              },
                              "id": 284,
                              "name": "Identifier",
                              "src": "3447:6:0"
                            }
                          ],
                          "id": 285,
                          "name": "FunctionCall",
                          "src": "3423:31:0"
                        }
                      ],
                      "id": 286,
                      "name": "VariableDeclarationStatement",
                      "src": "3395:59:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 464,
                                "type": "function (uint256)",
                                "value": "LogValue"
                              },
                              "id": 287,
                              "name": "Identifier",
                              "src": "3469:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 282,
                                "type": "uint256",
                                "value": "amount_to_be_paid"
                              },
                              "id": 288,
                              "name": "Identifier",
                              "src": "3478:17:0"
                            }
                          ],
                          "id": 289,
                          "name": "FunctionCall",
                          "src": "3469:27:0"
                        }
                      ],
                      "id": 290,
                      "name": "EmitStatement",
                      "src": "3464:32:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_7870e5b2c5679158eccf8b28da6a6e9f46141ea0ee6443a3f06157b1b11111f4",
                                    "typeString": "literal_string \"Loan is already repaid\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 291,
                              "name": "Identifier",
                              "src": "3506:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "!",
                                "prefix": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "isRepaid",
                                    "referencedDeclaration": 22,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 276,
                                        "type": "struct Loan.Loan_info storage pointer",
                                        "value": "loan"
                                      },
                                      "id": 292,
                                      "name": "Identifier",
                                      "src": "3515:4:0"
                                    }
                                  ],
                                  "id": 293,
                                  "name": "MemberAccess",
                                  "src": "3515:13:0"
                                }
                              ],
                              "id": 294,
                              "name": "UnaryOperation",
                              "src": "3514:14:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4c6f616e20697320616c726561647920726570616964",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Loan is already repaid\"",
                                "value": "Loan is already repaid"
                              },
                              "id": 295,
                              "name": "Literal",
                              "src": "3530:24:0"
                            }
                          ],
                          "id": 296,
                          "name": "FunctionCall",
                          "src": "3506:49:0"
                        }
                      ],
                      "id": 297,
                      "name": "ExpressionStatement",
                      "src": "3506:49:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_ec83fd00432662dbf5dd2aac1f81c346fbe87acecf7cd3f016ab25f549f71749",
                                    "typeString": "literal_string \"Insufficient contract balance\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 298,
                              "name": "Identifier",
                              "src": "3676:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "balance",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "borrower_id",
                                        "referencedDeclaration": 16,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 276,
                                            "type": "struct Loan.Loan_info storage pointer",
                                            "value": "loan"
                                          },
                                          "id": 299,
                                          "name": "Identifier",
                                          "src": "3684:4:0"
                                        }
                                      ],
                                      "id": 300,
                                      "name": "MemberAccess",
                                      "src": "3684:16:0"
                                    }
                                  ],
                                  "id": 301,
                                  "name": "MemberAccess",
                                  "src": "3684:24:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 282,
                                    "type": "uint256",
                                    "value": "amount_to_be_paid"
                                  },
                                  "id": 302,
                                  "name": "Identifier",
                                  "src": "3712:17:0"
                                }
                              ],
                              "id": 303,
                              "name": "BinaryOperation",
                              "src": "3684:45:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "496e73756666696369656e7420636f6e74726163742062616c616e6365",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Insufficient contract balance\"",
                                "value": "Insufficient contract balance"
                              },
                              "id": 304,
                              "name": "Literal",
                              "src": "3731:31:0"
                            }
                          ],
                          "id": 305,
                          "name": "FunctionCall",
                          "src": "3676:87:0"
                        }
                      ],
                      "id": 306,
                      "name": "ExpressionStatement",
                      "src": "3676:87:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 456,
                                "type": "function (uint256)",
                                "value": "LogValueBefore"
                              },
                              "id": 307,
                              "name": "Identifier",
                              "src": "3840:14:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "balance",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender_id",
                                    "referencedDeclaration": 18,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 276,
                                        "type": "struct Loan.Loan_info storage pointer",
                                        "value": "loan"
                                      },
                                      "id": 308,
                                      "name": "Identifier",
                                      "src": "3855:4:0"
                                    }
                                  ],
                                  "id": 309,
                                  "name": "MemberAccess",
                                  "src": "3855:14:0"
                                }
                              ],
                              "id": 310,
                              "name": "MemberAccess",
                              "src": "3855:22:0"
                            }
                          ],
                          "id": 311,
                          "name": "FunctionCall",
                          "src": "3840:38:0"
                        }
                      ],
                      "id": 312,
                      "name": "EmitStatement",
                      "src": "3835:43:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          314
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "sent",
                            "overrides": null,
                            "scope": 366,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 313,
                              "name": "ElementaryTypeName",
                              "src": "3888:4:0"
                            }
                          ],
                          "id": 314,
                          "name": "VariableDeclaration",
                          "src": "3888:9:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "bool",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "send",
                                "referencedDeclaration": null,
                                "type": "function (uint256) returns (bool)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "address payable",
                                    "type_conversion": true
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        ],
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "type": "type(address payable)"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "name": "address",
                                            "stateMutability": "payable",
                                            "type": null
                                          },
                                          "id": 315,
                                          "name": "ElementaryTypeName",
                                          "src": "3900:8:0"
                                        }
                                      ],
                                      "id": 316,
                                      "name": "ElementaryTypeNameExpression",
                                      "src": "3900:8:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender_id",
                                        "referencedDeclaration": 18,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 276,
                                            "type": "struct Loan.Loan_info storage pointer",
                                            "value": "loan"
                                          },
                                          "id": 317,
                                          "name": "Identifier",
                                          "src": "3908:4:0"
                                        }
                                      ],
                                      "id": 318,
                                      "name": "MemberAccess",
                                      "src": "3908:14:0"
                                    }
                                  ],
                                  "id": 319,
                                  "name": "FunctionCall",
                                  "src": "3900:23:0"
                                }
                              ],
                              "id": 320,
                              "name": "MemberAccess",
                              "src": "3900:28:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 282,
                                "type": "uint256",
                                "value": "amount_to_be_paid"
                              },
                              "id": 321,
                              "name": "Identifier",
                              "src": "3929:17:0"
                            }
                          ],
                          "id": 322,
                          "name": "FunctionCall",
                          "src": "3900:47:0"
                        }
                      ],
                      "id": 323,
                      "name": "VariableDeclarationStatement",
                      "src": "3888:59:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 460,
                                "type": "function (uint256)",
                                "value": "LogValueAfter"
                              },
                              "id": 324,
                              "name": "Identifier",
                              "src": "3962:13:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "balance",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender_id",
                                    "referencedDeclaration": 18,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 276,
                                        "type": "struct Loan.Loan_info storage pointer",
                                        "value": "loan"
                                      },
                                      "id": 325,
                                      "name": "Identifier",
                                      "src": "3976:4:0"
                                    }
                                  ],
                                  "id": 326,
                                  "name": "MemberAccess",
                                  "src": "3976:14:0"
                                }
                              ],
                              "id": 327,
                              "name": "MemberAccess",
                              "src": "3976:22:0"
                            }
                          ],
                          "id": 328,
                          "name": "FunctionCall",
                          "src": "3962:37:0"
                        }
                      ],
                      "id": 329,
                      "name": "EmitStatement",
                      "src": "3957:42:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_92ad45549db9f58d19e024365f85a0c8ac795b4a8ba66a369c16933f75075f07",
                                    "typeString": "literal_string \"Failed to send payment\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 330,
                              "name": "Identifier",
                              "src": "4009:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 314,
                                "type": "bool",
                                "value": "sent"
                              },
                              "id": 331,
                              "name": "Identifier",
                              "src": "4017:4:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4661696c656420746f2073656e64207061796d656e74",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Failed to send payment\"",
                                "value": "Failed to send payment"
                              },
                              "id": 332,
                              "name": "Literal",
                              "src": "4023:24:0"
                            }
                          ],
                          "id": 333,
                          "name": "FunctionCall",
                          "src": "4009:39:0"
                        }
                      ],
                      "id": 334,
                      "name": "ExpressionStatement",
                      "src": "4009:39:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "+=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "member_name": "amount_repayed",
                                "referencedDeclaration": 20,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 276,
                                    "type": "struct Loan.Loan_info storage pointer",
                                    "value": "loan"
                                  },
                                  "id": 335,
                                  "name": "Identifier",
                                  "src": "4093:4:0"
                                }
                              ],
                              "id": 337,
                              "name": "MemberAccess",
                              "src": "4093:19:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 282,
                                "type": "uint256",
                                "value": "amount_to_be_paid"
                              },
                              "id": 338,
                              "name": "Identifier",
                              "src": "4116:17:0"
                            }
                          ],
                          "id": 339,
                          "name": "Assignment",
                          "src": "4093:40:0"
                        }
                      ],
                      "id": 340,
                      "name": "ExpressionStatement",
                      "src": "4093:40:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "+=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "member_name": "time_of_repayment",
                                "referencedDeclaration": 14,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 276,
                                    "type": "struct Loan.Loan_info storage pointer",
                                    "value": "loan"
                                  },
                                  "id": 341,
                                  "name": "Identifier",
                                  "src": "4143:4:0"
                                }
                              ],
                              "id": 343,
                              "name": "MemberAccess",
                              "src": "4143:22:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 100,
                                "type": "uint256",
                                "value": "MONTH_IN_SECONDS"
                              },
                              "id": 344,
                              "name": "Identifier",
                              "src": "4169:16:0"
                            }
                          ],
                          "id": 345,
                          "name": "Assignment",
                          "src": "4143:42:0"
                        }
                      ],
                      "id": 346,
                      "name": "ExpressionStatement",
                      "src": "4143:42:0"
                    },
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": ">=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "amount_repayed",
                                "referencedDeclaration": 20,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 276,
                                    "type": "struct Loan.Loan_info storage pointer",
                                    "value": "loan"
                                  },
                                  "id": 347,
                                  "name": "Identifier",
                                  "src": "4200:4:0"
                                }
                              ],
                              "id": 348,
                              "name": "MemberAccess",
                              "src": "4200:19:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "amount_borrowed",
                                "referencedDeclaration": 10,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 276,
                                    "type": "struct Loan.Loan_info storage pointer",
                                    "value": "loan"
                                  },
                                  "id": 349,
                                  "name": "Identifier",
                                  "src": "4223:4:0"
                                }
                              ],
                              "id": 350,
                              "name": "MemberAccess",
                              "src": "4223:20:0"
                            }
                          ],
                          "id": 351,
                          "name": "BinaryOperation",
                          "src": "4200:43:0"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "member_name": "isRepaid",
                                        "referencedDeclaration": 22,
                                        "type": "bool"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 276,
                                            "type": "struct Loan.Loan_info storage pointer",
                                            "value": "loan"
                                          },
                                          "id": 352,
                                          "name": "Identifier",
                                          "src": "4259:4:0"
                                        }
                                      ],
                                      "id": 354,
                                      "name": "MemberAccess",
                                      "src": "4259:13:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "74727565",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "bool",
                                        "type": "bool",
                                        "value": "true"
                                      },
                                      "id": 355,
                                      "name": "Literal",
                                      "src": "4275:4:0"
                                    }
                                  ],
                                  "id": 356,
                                  "name": "Assignment",
                                  "src": "4259:20:0"
                                }
                              ],
                              "id": 357,
                              "name": "ExpressionStatement",
                              "src": "4259:20:0"
                            }
                          ],
                          "id": 358,
                          "name": "Block",
                          "src": "4245:45:0"
                        }
                      ],
                      "id": 359,
                      "name": "IfStatement",
                      "src": "4196:94:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "struct Loan.Loan_info storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "struct Loan.Loan_info storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 39,
                                    "type": "mapping(uint256 => struct Loan.Loan_info storage ref)",
                                    "value": "loans_mapping"
                                  },
                                  "id": 360,
                                  "name": "Identifier",
                                  "src": "4300:13:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 272,
                                    "type": "uint256",
                                    "value": "loanId"
                                  },
                                  "id": 361,
                                  "name": "Identifier",
                                  "src": "4314:6:0"
                                }
                              ],
                              "id": 362,
                              "name": "IndexAccess",
                              "src": "4300:21:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 276,
                                "type": "struct Loan.Loan_info storage pointer",
                                "value": "loan"
                              },
                              "id": 363,
                              "name": "Identifier",
                              "src": "4324:4:0"
                            }
                          ],
                          "id": 364,
                          "name": "Assignment",
                          "src": "4300:28:0"
                        }
                      ],
                      "id": 365,
                      "name": "ExpressionStatement",
                      "src": "4300:28:0"
                    }
                  ],
                  "id": 366,
                  "name": "Block",
                  "src": "3329:1006:0"
                }
              ],
              "id": 367,
              "name": "FunctionDefinition",
              "src": "3266:1069:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "ebea51b4",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "depositCollateral",
                "overrides": null,
                "scope": 473,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "loanId",
                        "overrides": null,
                        "scope": 419,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 368,
                          "name": "ElementaryTypeName",
                          "src": "4368:7:0"
                        }
                      ],
                      "id": 369,
                      "name": "VariableDeclaration",
                      "src": "4368:14:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "nftContract",
                        "overrides": null,
                        "scope": 419,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 370,
                          "name": "ElementaryTypeName",
                          "src": "4384:7:0"
                        }
                      ],
                      "id": 371,
                      "name": "VariableDeclaration",
                      "src": "4384:19:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "tokenId",
                        "overrides": null,
                        "scope": 419,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 372,
                          "name": "ElementaryTypeName",
                          "src": "4405:7:0"
                        }
                      ],
                      "id": 373,
                      "name": "VariableDeclaration",
                      "src": "4405:15:0"
                    }
                  ],
                  "id": 374,
                  "name": "ParameterList",
                  "src": "4367:54:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 375,
                  "name": "ParameterList",
                  "src": "4429:0:0"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_870fd4d59d3f3a049f760b401ed79173d5d6ef5f72a802b0e7dc792422acf340",
                                    "typeString": "literal_string \"Only the borrower can deposit collateral\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 376,
                              "name": "Identifier",
                              "src": "4439:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "==",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 689,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 377,
                                      "name": "Identifier",
                                      "src": "4447:3:0"
                                    }
                                  ],
                                  "id": 378,
                                  "name": "MemberAccess",
                                  "src": "4447:10:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "borrower_id",
                                    "referencedDeclaration": 16,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "struct Loan.Loan_info storage ref"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 39,
                                            "type": "mapping(uint256 => struct Loan.Loan_info storage ref)",
                                            "value": "loans_mapping"
                                          },
                                          "id": 379,
                                          "name": "Identifier",
                                          "src": "4461:13:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 369,
                                            "type": "uint256",
                                            "value": "loanId"
                                          },
                                          "id": 380,
                                          "name": "Identifier",
                                          "src": "4475:6:0"
                                        }
                                      ],
                                      "id": 381,
                                      "name": "IndexAccess",
                                      "src": "4461:21:0"
                                    }
                                  ],
                                  "id": 382,
                                  "name": "MemberAccess",
                                  "src": "4461:33:0"
                                }
                              ],
                              "id": 383,
                              "name": "BinaryOperation",
                              "src": "4447:47:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4f6e6c792074686520626f72726f7765722063616e206465706f73697420636f6c6c61746572616c",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Only the borrower can deposit collateral\"",
                                "value": "Only the borrower can deposit collateral"
                              },
                              "id": 384,
                              "name": "Literal",
                              "src": "4496:42:0"
                            }
                          ],
                          "id": 385,
                          "name": "FunctionCall",
                          "src": "4439:100:0"
                        }
                      ],
                      "id": 386,
                      "name": "ExpressionStatement",
                      "src": "4439:100:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_cce25055cc518ce3c6a39158f4b67afd88e25523d38915e0b3241b4d1e02d575",
                                    "typeString": "literal_string \"Collateral cannot be deposited for a repaid loan\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 387,
                              "name": "Identifier",
                              "src": "4549:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "!",
                                "prefix": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "isRepaid",
                                    "referencedDeclaration": 22,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "struct Loan.Loan_info storage ref"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 39,
                                            "type": "mapping(uint256 => struct Loan.Loan_info storage ref)",
                                            "value": "loans_mapping"
                                          },
                                          "id": 388,
                                          "name": "Identifier",
                                          "src": "4558:13:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 369,
                                            "type": "uint256",
                                            "value": "loanId"
                                          },
                                          "id": 389,
                                          "name": "Identifier",
                                          "src": "4572:6:0"
                                        }
                                      ],
                                      "id": 390,
                                      "name": "IndexAccess",
                                      "src": "4558:21:0"
                                    }
                                  ],
                                  "id": 391,
                                  "name": "MemberAccess",
                                  "src": "4558:30:0"
                                }
                              ],
                              "id": 392,
                              "name": "UnaryOperation",
                              "src": "4557:31:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "436f6c6c61746572616c2063616e6e6f74206265206465706f736974656420666f72206120726570616964206c6f616e",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Collateral cannot be deposited for a repaid loan\"",
                                "value": "Collateral cannot be deposited for a repaid loan"
                              },
                              "id": 393,
                              "name": "Literal",
                              "src": "4590:50:0"
                            }
                          ],
                          "id": 394,
                          "name": "FunctionCall",
                          "src": "4549:92:0"
                        }
                      ],
                      "id": 395,
                      "name": "ExpressionStatement",
                      "src": "4549:92:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_505b99e21ee1a0801c1bc5b9bc549a333d452e69707d64c74f99617b9935526c",
                                    "typeString": "literal_string \"Collateral is already deposited for this loan\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  692,
                                  693
                                ],
                                "referencedDeclaration": 693,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 396,
                              "name": "Identifier",
                              "src": "4651:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "==",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "nftContract",
                                    "referencedDeclaration": 32,
                                    "type": "address"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "struct Loan.Collateral storage ref"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 47,
                                            "type": "mapping(uint256 => struct Loan.Collateral storage ref)",
                                            "value": "loanCollaterals"
                                          },
                                          "id": 397,
                                          "name": "Identifier",
                                          "src": "4659:15:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 369,
                                            "type": "uint256",
                                            "value": "loanId"
                                          },
                                          "id": 398,
                                          "name": "Identifier",
                                          "src": "4675:6:0"
                                        }
                                      ],
                                      "id": 399,
                                      "name": "IndexAccess",
                                      "src": "4659:23:0"
                                    }
                                  ],
                                  "id": 400,
                                  "name": "MemberAccess",
                                  "src": "4659:35:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "address payable",
                                    "type_conversion": true
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                          }
                                        ],
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "type": "type(address)"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "name": "address",
                                            "type": null
                                          },
                                          "id": 401,
                                          "name": "ElementaryTypeName",
                                          "src": "4698:7:0"
                                        }
                                      ],
                                      "id": 402,
                                      "name": "ElementaryTypeNameExpression",
                                      "src": "4698:7:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "30",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 0",
                                        "value": "0"
                                      },
                                      "id": 403,
                                      "name": "Literal",
                                      "src": "4706:1:0"
                                    }
                                  ],
                                  "id": 404,
                                  "name": "FunctionCall",
                                  "src": "4698:10:0"
                                }
                              ],
                              "id": 405,
                              "name": "BinaryOperation",
                              "src": "4659:49:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "436f6c6c61746572616c20697320616c7265616479206465706f736974656420666f722074686973206c6f616e",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Collateral is already deposited for this loan\"",
                                "value": "Collateral is already deposited for this loan"
                              },
                              "id": 406,
                              "name": "Literal",
                              "src": "4710:47:0"
                            }
                          ],
                          "id": 407,
                          "name": "FunctionCall",
                          "src": "4651:107:0"
                        }
                      ],
                      "id": 408,
                      "name": "ExpressionStatement",
                      "src": "4651:107:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "struct Loan.Collateral storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "struct Loan.Collateral storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 47,
                                    "type": "mapping(uint256 => struct Loan.Collateral storage ref)",
                                    "value": "loanCollaterals"
                                  },
                                  "id": 409,
                                  "name": "Identifier",
                                  "src": "4905:15:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 369,
                                    "type": "uint256",
                                    "value": "loanId"
                                  },
                                  "id": 410,
                                  "name": "Identifier",
                                  "src": "4921:6:0"
                                }
                              ],
                              "id": 411,
                              "name": "IndexAccess",
                              "src": "4905:23:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": true,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "struct Loan.Collateral memory",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 35,
                                    "type": "type(struct Loan.Collateral storage pointer)",
                                    "value": "Collateral"
                                  },
                                  "id": 412,
                                  "name": "Identifier",
                                  "src": "4931:10:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 371,
                                    "type": "address",
                                    "value": "nftContract"
                                  },
                                  "id": 413,
                                  "name": "Identifier",
                                  "src": "4942:11:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 373,
                                    "type": "uint256",
                                    "value": "tokenId"
                                  },
                                  "id": 414,
                                  "name": "Identifier",
                                  "src": "4955:7:0"
                                }
                              ],
                              "id": 415,
                              "name": "FunctionCall",
                              "src": "4931:32:0"
                            }
                          ],
                          "id": 416,
                          "name": "Assignment",
                          "src": "4905:58:0"
                        }
                      ],
                      "id": 417,
                      "name": "ExpressionStatement",
                      "src": "4905:58:0"
                    }
                  ],
                  "id": 418,
                  "name": "Block",
                  "src": "4429:608:0"
                }
              ],
              "id": 419,
              "name": "FunctionDefinition",
              "src": "4341:696:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "93423e9c",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getAccountBalance",
                "overrides": null,
                "scope": 473,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "target_address",
                        "overrides": null,
                        "scope": 430,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 420,
                          "name": "ElementaryTypeName",
                          "src": "5071:7:0"
                        }
                      ],
                      "id": 421,
                      "name": "VariableDeclaration",
                      "src": "5071:22:0"
                    }
                  ],
                  "id": 422,
                  "name": "ParameterList",
                  "src": "5070:24:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 430,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 423,
                          "name": "ElementaryTypeName",
                          "src": "5117:7:0"
                        }
                      ],
                      "id": 424,
                      "name": "VariableDeclaration",
                      "src": "5117:7:0"
                    }
                  ],
                  "id": 425,
                  "name": "ParameterList",
                  "src": "5116:9:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 425
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "member_name": "balance",
                            "referencedDeclaration": null,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 421,
                                "type": "address",
                                "value": "target_address"
                              },
                              "id": 426,
                              "name": "Identifier",
                              "src": "5181:14:0"
                            }
                          ],
                          "id": 427,
                          "name": "MemberAccess",
                          "src": "5181:22:0"
                        }
                      ],
                      "id": 428,
                      "name": "Return",
                      "src": "5174:29:0"
                    }
                  ],
                  "id": 429,
                  "name": "Block",
                  "src": "5126:84:0"
                }
              ],
              "id": 430,
              "name": "FunctionDefinition",
              "src": "5044:166:0"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "66877b8d",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getLoanDetails",
                "overrides": null,
                "scope": 473,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "loan_id",
                        "overrides": null,
                        "scope": 442,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 431,
                          "name": "ElementaryTypeName",
                          "src": "5240:7:0"
                        }
                      ],
                      "id": 432,
                      "name": "VariableDeclaration",
                      "src": "5240:15:0"
                    }
                  ],
                  "id": 433,
                  "name": "ParameterList",
                  "src": "5239:17:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 442,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "struct Loan.Loan_info",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "contractScope": null,
                            "name": "Loan_info",
                            "referencedDeclaration": 23,
                            "type": "struct Loan.Loan_info"
                          },
                          "id": 434,
                          "name": "UserDefinedTypeName",
                          "src": "5278:9:0"
                        }
                      ],
                      "id": 435,
                      "name": "VariableDeclaration",
                      "src": "5278:16:0"
                    }
                  ],
                  "id": 436,
                  "name": "ParameterList",
                  "src": "5277:18:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 436
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "struct Loan.Loan_info storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 39,
                                "type": "mapping(uint256 => struct Loan.Loan_info storage ref)",
                                "value": "loans_mapping"
                              },
                              "id": 437,
                              "name": "Identifier",
                              "src": "5313:13:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 432,
                                "type": "uint256",
                                "value": "loan_id"
                              },
                              "id": 438,
                              "name": "Identifier",
                              "src": "5327:7:0"
                            }
                          ],
                          "id": 439,
                          "name": "IndexAccess",
                          "src": "5313:22:0"
                        }
                      ],
                      "id": 440,
                      "name": "Return",
                      "src": "5306:29:0"
                    }
                  ],
                  "id": 441,
                  "name": "Block",
                  "src": "5296:46:0"
                }
              ],
              "id": 442,
              "name": "FunctionDefinition",
              "src": "5216:126:0"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "Log"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "sender",
                        "overrides": null,
                        "scope": 448,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 443,
                          "name": "ElementaryTypeName",
                          "src": "5359:7:0"
                        }
                      ],
                      "id": 444,
                      "name": "VariableDeclaration",
                      "src": "5359:14:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "balance",
                        "overrides": null,
                        "scope": 448,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 445,
                          "name": "ElementaryTypeName",
                          "src": "5376:7:0"
                        }
                      ],
                      "id": 446,
                      "name": "VariableDeclaration",
                      "src": "5376:15:0"
                    }
                  ],
                  "id": 447,
                  "name": "ParameterList",
                  "src": "5358:34:0"
                }
              ],
              "id": 448,
              "name": "EventDefinition",
              "src": "5349:44:0"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "LogSender"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "sender",
                        "overrides": null,
                        "scope": 452,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 449,
                          "name": "ElementaryTypeName",
                          "src": "5415:7:0"
                        }
                      ],
                      "id": 450,
                      "name": "VariableDeclaration",
                      "src": "5415:14:0"
                    }
                  ],
                  "id": 451,
                  "name": "ParameterList",
                  "src": "5414:16:0"
                }
              ],
              "id": 452,
              "name": "EventDefinition",
              "src": "5399:32:0"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "LogValueBefore"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "value",
                        "overrides": null,
                        "scope": 456,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 453,
                          "name": "ElementaryTypeName",
                          "src": "5458:7:0"
                        }
                      ],
                      "id": 454,
                      "name": "VariableDeclaration",
                      "src": "5458:13:0"
                    }
                  ],
                  "id": 455,
                  "name": "ParameterList",
                  "src": "5457:15:0"
                }
              ],
              "id": 456,
              "name": "EventDefinition",
              "src": "5437:36:0"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "LogValueAfter"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "value",
                        "overrides": null,
                        "scope": 460,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 457,
                          "name": "ElementaryTypeName",
                          "src": "5498:7:0"
                        }
                      ],
                      "id": 458,
                      "name": "VariableDeclaration",
                      "src": "5498:13:0"
                    }
                  ],
                  "id": 459,
                  "name": "ParameterList",
                  "src": "5497:15:0"
                }
              ],
              "id": 460,
              "name": "EventDefinition",
              "src": "5478:35:0"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "LogValue"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "value",
                        "overrides": null,
                        "scope": 464,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 461,
                          "name": "ElementaryTypeName",
                          "src": "5533:7:0"
                        }
                      ],
                      "id": 462,
                      "name": "VariableDeclaration",
                      "src": "5533:13:0"
                    }
                  ],
                  "id": 463,
                  "name": "ParameterList",
                  "src": "5532:15:0"
                }
              ],
              "id": 464,
              "name": "EventDefinition",
              "src": "5518:30:0"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "LogMapping"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "loan",
                        "overrides": null,
                        "scope": 468,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "struct Loan.Loan_info",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "contractScope": null,
                            "name": "Loan_info",
                            "referencedDeclaration": 23,
                            "type": "struct Loan.Loan_info"
                          },
                          "id": 465,
                          "name": "UserDefinedTypeName",
                          "src": "5571:9:0"
                        }
                      ],
                      "id": 466,
                      "name": "VariableDeclaration",
                      "src": "5571:14:0"
                    }
                  ],
                  "id": 467,
                  "name": "ParameterList",
                  "src": "5570:16:0"
                }
              ],
              "id": 468,
              "name": "EventDefinition",
              "src": "5554:33:0"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "LogMappingProvided"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "loan",
                        "overrides": null,
                        "scope": 472,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "struct Loan.Loan_given",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "contractScope": null,
                            "name": "Loan_given",
                            "referencedDeclaration": 30,
                            "type": "struct Loan.Loan_given"
                          },
                          "id": 469,
                          "name": "UserDefinedTypeName",
                          "src": "5618:10:0"
                        }
                      ],
                      "id": 470,
                      "name": "VariableDeclaration",
                      "src": "5618:15:0"
                    }
                  ],
                  "id": 471,
                  "name": "ParameterList",
                  "src": "5617:17:0"
                }
              ],
              "id": 472,
              "name": "EventDefinition",
              "src": "5593:42:0"
            }
          ],
          "id": 473,
          "name": "ContractDefinition",
          "src": "148:5489:0"
        }
      ],
      "id": 474,
      "name": "SourceUnit",
      "src": "32:5607:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.1+commit.e6f7d5a4.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0x4b5E2b55651e5A9Cf02a6FCF7c1eBf82cD68cB96",
        "transactionHash": "0x757b30fd6415d0345f65019d7fdc6e2c65097060925f7a5fcb28b83678fadf99"
      }
    },
    "schemaVersion": "3.4.16",
    "updatedAt": "2023-10-29T02:36:51.732Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }
// import MetmaskConnect from './metamaskConnection/metamask'


var contract_address = "0x455D9E662F92CEFD83F67344A2df209CB72d03a9"
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// const ethers = require("ethers")

// import ethers from 'ethers'


var wallet;
var signer;

export default function Headers(){
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("Connect Wallet");
  const [userBalance, setUserBalance] = useState("");


  

  const connectWallet = async () => {
    if (window.ethereum) {
      console.log("MetaMask detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        console.log(accounts);
       // wallet = new ethers.wallet(accounts[0] , provider);
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

  const getUserBalance = (accountAddress) =>{
    window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
      .then(balance => {
        console.log(ethers.utils.formatEther(balance));
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch(error => {
        console.error("Error fetching balance:", error);
      });
  }

  useEffect(()=>{

    localStorage.setItem("Address", JSON.stringify(defaultAccount))
  },[defaultAccount])

  console.log(userBalance);



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
  
const handlepress = async () => {
  getDetails();
}

  // <MetmaskConnect/>
  
    return(
      

    <div class="main" >
    <div class = "main-1">
      <div class="ether-flow">
      EtherFlow
      </div>
      <div class="main-1-1">
        <li> <NavLink to="/trade" style={{ textDecoration: 'none'}}>Trade</NavLink></li>
        <li>Dashboard</li>
        <li>Portfolio</li>
      </div>
      <div>
        <button class="button" style={{color:"black"}}  onClick={connectWallet} > {defaultAccount}</button>
        <button class="button" style={{color:"black"}}  onClick={handlepress} > press me </button>
      </div>
    </div>

    

    </div>
    
    )
}