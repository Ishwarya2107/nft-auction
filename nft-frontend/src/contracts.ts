import { ethers } from "ethers";
import { LAND_NFT_ADDRESS, LAND_NFT_ABI, LAND_AUCTION_ADDRESS, LAND_AUCTION_ABI } from "./constants";

declare let window: any;

export const initContracts = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const landNFTContract = new ethers.Contract(LAND_NFT_ADDRESS, LAND_NFT_ABI, signer);
  const landAuctionContract = new ethers.Contract(LAND_AUCTION_ADDRESS, LAND_AUCTION_ABI, signer);

  return { landNFTContract, landAuctionContract };
};

