// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Loan {
    uint256 amount_borrowed;
    int interest_rate;
    uint256 time_of_repayment;
    address borrower_id;
    address sender_id;
    uint256 amount_repayed;

    enum Status {
        Ongoing , 
        Granted , 
        Rejected ,
        Success , 
        Failure
    }

    constructor() public {
        status = Status.Ongoing;
        sender_id = msg.sender;
    }

    Status public status;

    function getLoanStatus() public view returns (Status){
        return status;
    }

    function setLoanStatus(Status _status) public {
        status = _status;
    }

    function fundLoan(address payable from , address payable _to, uint256 value) public payable {
    require(from.balance >= value, "Insufficient Funds"); // Check the contract's balance
    bool sent = _to.send(value);
    emit Log(_to, _to.balance);
}

    function getAccountBalance(address target_address) public  returns (uint256) {
        // emit LogSender(sender_id);
        emit LogValue(target_address.balance);
        return target_address.balance;
    }

    function returnSenderID() public returns (address){
        emit LogSender(msg.sender);
        return msg.sender;
    }
    
    event Log(address sender , uint256 balance);

    event LogSender(address sender);

    event LogValue(uint256 value);
    
}

