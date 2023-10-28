// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract LendingPool{
    uint256 public totalFunds;
    uint256 public poolinterest;
    
    struct Investment{
         address investor;
        uint256 amount;
        uint256 timeDeposited;
    }
    struct Loan {
    address borrower;
    uint256 principal;
    uint256 collateral;
    uint256 interestRate;
    uint256 endTime;
    bool repaid;
    uint256 loanID;
}
    Investment[] public investments;
    Loan[] public loans;
    mapping(address=>uint256) public investorBalance;
    uint256 public nextLoanID=1;


    event InvestmentMade(address indexed investor, uint256 amount);
    event LoanCreated(address indexed borrower, uint256 loanID, uint256 principal, uint256 endTime);
    event LoanRepaid(address indexed borrower, uint256 principal);
    constructor(uint256 _poolInterestRate) public {
        poolinterest = _poolInterestRate; 
    }
    modifier onlyInvestor() {
    require(investorBalance[msg.sender] > 0, "Only investors can call this function");
    _;
    }
     function deposit() external payable {
        require(msg.value > 0, "You must deposit some Ether");
        totalFunds += msg.value;
        Investment memory newInvestment = Investment(msg.sender, msg.value, block.timestamp);
        investments.push(newInvestment);
        investorBalance[msg.sender] += msg.value;
        emit InvestmentMade(msg.sender, msg.value);
    }

      function createLoan(uint256 _principal, uint256 _durationInDays) external {
        require(_principal > 0, "Loan principal must be greater than 0");
        require(investorBalance[msg.sender] >= _principal, "Insufficient funds to take a loan");
        
        uint256 interestRate = (poolinterest * _durationInDays) / 365 days;
        uint256 endTime = block.timestamp + (_durationInDays * 1 days);
        
        Loan memory newLoan = Loan(
                                    msg.sender,
                                   
                                    _principal,
                                    _principal,
                                    interestRate,
                                    endTime,
                                    false,
                                    nextLoanID 
);
        loans.push(newLoan);
        nextLoanID++;
        
        investorBalance[msg.sender] -= _principal;
        
        emit LoanCreated(msg.sender, newLoan.loanID, _principal, endTime);
    }
        function repayLoan(uint256 _loanID) external payable {
        for (uint256 i = 0; i < loans.length; i++) {
            Loan storage loan = loans[i];
            if (loan.loanID == _loanID && !loan.repaid) {
                uint256 amountToRepay = loan.principal + (loan.principal * loan.interestRate / 100);
                require(msg.value >= amountToRepay, "Insufficient funds to repay the loan");
                loan.repaid = true;
                totalFunds += msg.value;
                investorBalance[msg.sender] += loan.principal;
                emit LoanRepaid(loan.borrower, loan.principal);
                return;
            }
        }
        revert("Loan not found or already repaid");
    }

    function getInvestmentCount() external view returns (uint256) {
        return investments.length;
    }
    
    function getLoanCount() external view returns (uint256) {
        return loans.length;
    }




}