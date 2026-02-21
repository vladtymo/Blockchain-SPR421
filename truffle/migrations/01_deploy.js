var contract = artifacts.require("./Adoption.sol");

module.exports = function (deployer) {
  deployer.deploy(contract);
};
