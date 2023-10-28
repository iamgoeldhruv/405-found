// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.22 <0.9.0;



contract Loan {
    uint256 private total_loans;
    uint256 private total_provided_loans;
    

    struct Loan_info{
        uint256 loan_id;
        uint256 amount_borrowed;
        int interest_rate;
        uint256 time_of_repayment;
        address payable borrower_id;
        address sender_id;
        uint256 amount_repayed;
        bool isRepaid;
        // Collateral collateral;
    }

    struct Loan_given{
        uint256 loan_id;
        uint256 loan_amount;
        address loan_provider;
    }





    struct Collateral {
        address nftContract;
        uint256 tokenId;
    }
    
    mapping (uint256 => Loan_info) public loans_mapping;
    mapping (uint256 => Loan_given) public provided_loans;
    mapping(uint256 => Collateral) public loanCollaterals;
    mapping (address => Loan_info []) public loansByBorrower;
    mapping (address => Loan_info []) public loansByReciever;

    function sendPaisa(address payable from , address payable _to) public payable {
    require(from.balance >= msg.value, "Insufficient Funds"); // Check the contract's balance
    bool sent = _to.send(msg.value);
    require(sent , "Transaction Failed!");
    emit Log(_to, _to.balance);
}

    uint256 constant private MONTH_IN_SECONDS = 30 days; 

    function provideLoan(uint256 loan_amount , address loan_provider) public payable{
        Loan_given memory loan_given = Loan_given(total_provided_loans , loan_amount , loan_provider);
        provided_loans[total_provided_loans] = loan_given;
        total_provided_loans++;
        require(loan_provider.balance > msg.value , "U can't provide that loan!");
        bool sent = payable(address(this)).send(msg.value);
    }

    function getLoan(uint256 _amount_borrowed,
        int _interest_rate,
        uint256 _time_of_repayment,
        address payable _borrower_id,
        address _sender_id
        // Collateral memory _collateral
        ) public {
        require(_sender_id.balance > _amount_borrowed , "You don't have funds to give loans");
        Loan_info memory loan = Loan_info(total_loans,_amount_borrowed , _interest_rate ,_time_of_repayment, _borrower_id , _sender_id , 0,false);
        loans_mapping[total_loans] = loan;
        total_loans++;
    }

    function calculateMonthlyPayment(uint256 loanId) internal view returns (uint256) {
        Loan_info storage loan = loans_mapping[loanId];
        uint256 totalLoanAmount = (loan.amount_borrowed * (100 + uint256(loan.interest_rate)) / 100 - loan.amount_repayed);
        uint256 remainingMonths = (block.timestamp - loan.time_of_repayment) / MONTH_IN_SECONDS;
        return totalLoanAmount / remainingMonths;
    }

    function cancelLoan(uint256 loan_id) public {
        delete loans_mapping[loan_id];
    }

    function automaticMonthlyPayment(uint256 loanId) public {
        Loan_info storage loan = loans_mapping[loanId];
        uint256 amount_to_be_paid = calculateMonthlyPayment(loanId);
        require(!loan.isRepaid, "Loan is already repaid");
        // require(block.timestamp <= loan.time_of_repayment, "Payment can only be made before the due date");
        require(address(this).balance >= amount_to_be_paid, "Insufficient contract balance");

        bool sent = loan.borrower_id.send(amount_to_be_paid);
        require(sent, "Failed to send payment");

        // If payment goes thru->
        loan.amount_repayed += amount_to_be_paid;
        loan.time_of_repayment += MONTH_IN_SECONDS;

        if (loan.amount_repayed >= loan.amount_borrowed) {
            loan.isRepaid = true;
        }
    }

    function depositCollateral(uint256 loanId, address nftContract, uint256 tokenId) public {
        require(msg.sender == loans_mapping[loanId].borrower_id, "Only the borrower can deposit collateral");
        require(!loans_mapping[loanId].isRepaid, "Collateral cannot be deposited for a repaid loan");
        require(loanCollaterals[loanId].nftContract == address(0), "Collateral is already deposited for this loan");
        // Transfer the NFT to this contract
        // IERC721Enumerable(nftContract).transferFrom(msg.sender, address(this), tokenId);
        loanCollaterals[loanId] = Collateral(nftContract, tokenId);
        // emit CollateralDeposited(loanId, nftContract, tokenId);
    }


    function getAccountBalance(address target_address) public  returns (uint256) {
        // emit LogSender(sender_id);
        emit LogValue(target_address.balance);
        return target_address.balance;
    }

    function getLoanDetails(uint256 loan_id) public  {
        emit LogMapping(loans_mapping[loan_id]);
    }


    event Log(address sender , uint256 balance);

    event LogSender(address sender);

    event LogValue(uint256 value);

    event LogMapping(Loan_info loan);
}

