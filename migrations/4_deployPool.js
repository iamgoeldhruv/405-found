const LendingPool = artifacts.require("LendingPool");

module.exports = function (deployer) {
  // Deploy the LendingPool contract with an initial contribution of 100 ether
  deployer.deploy(LendingPool , 5);
};
