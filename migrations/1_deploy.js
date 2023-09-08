const HogwartsNFT = artifacts.require("HogwartsNFT");
const RandomHouseAssignment = artifacts.require("RandomHouseAssignment");

module.exports = function(deployer, network, accounts) {
  const vrfCoordinatorV2Address = "0x7a1bac17ccc5b313516c5e16fb24f7659aa5ebed";
  const subId = "5860";
  const keyHash = "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";
  const callbackGasLimit = 2000000;

  deployer.deploy(HogwartsNFT).then((hogwartsInstance) => {
    return deployer
      .deploy(
        RandomHouseAssignment,
        hogwartsInstance.address,
        vrfCoordinatorV2Address,
        subId,
        keyHash,
        callbackGasLimit
      )
      .then((randomHouseInstance) => {
        // Transfer ownership of HogwartsNFT to RandomHouseAssignment
        return hogwartsInstance.transferOwnership(randomHouseInstance.address);
      });
  });
};




