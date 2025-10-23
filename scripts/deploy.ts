import { ethers } from "hardhat";

async function main() {
  // Deploy LandNFT
  const LandNFTFactory = await ethers.getContractFactory("LandNFT");
  const landNFT = await LandNFTFactory.deploy();
  await landNFT.waitForDeployment(); // Ethers v6 replacement for .deployed()
  console.log("LandNFT deployed to:", await landNFT.getAddress());

  // Deploy LandAuction
  const LandAuctionFactory = await ethers.getContractFactory("LandAuction");
  const landAuction = await LandAuctionFactory.deploy();
  await landAuction.waitForDeployment();
  console.log("LandAuction deployed to:", await landAuction.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


