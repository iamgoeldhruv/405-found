const LoanContract = artifacts.require("./contracts/loan.sol")
const test_address = "0x2B1a18110033B90949e528bAbb27E0243BBb692c";
let balance = 0;
contract('LoanContract' ,() => {
    it("testing" , async () => {
    const ctrct = await LoanContract.new();
    balance = await ctrct.fundLoan(test_address , 99999999);
    let getBalance = await ctrct.getAccountBalance(test_address);
    console.log(getBalance["logs"][0]["args"]["0"].toString());
    // console.log(balance["logs"]);
    })
    
});

