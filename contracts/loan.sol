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
        status = Status.Granted;
        sender_id = msg.sender;
    }

    Status public status;

    function getLoanStatus() public view returns (Status){
        return status;
    }

    function setLoanStatus(Status _status) public {
        status = _status;
    }

    function fundLoan(address payable _to) public payable{
        _to.transfer(msg.value);
    }
    


    
    
}
