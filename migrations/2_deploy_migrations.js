const SendEth = artifacts.require("./sendEth.sol");

module.exports = function(deployer) {
  // Deploy the SendEth contract to the local network
  deployer.deploy(SendEth)
};
