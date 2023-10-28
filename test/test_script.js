const LoanContract = artifacts.require("./contracts/loan.sol")
const test_address = "0xBda6ea5ecf222f1684c653d219d1F743501ABd20";
let balance = 0;
contract('LoanContract' ,() => {
    it("testing" , async () => {
    const ctrct = await LoanContract.new();
    balance = await ctrct.getAccountBalance(test_address);
    console.log(balance["logs"][0]["args"]["0"].toString());
    })
    
});

