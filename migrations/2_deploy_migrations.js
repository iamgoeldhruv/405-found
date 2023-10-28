const Loan = artifacts.require("./loan.sol");

module.exports = function(deployer) {
  // Deploy the SendEth contract to the local network
  deployer.deploy(Loan)
};
