import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
         url: "https://sepolia.infura.io/v3/06c8cb41a43e4c0ab83609872e6ddc50",
            accounts: ["a612dfa767a875d83330a299d080bfb680d18526887da25e5cbfdd1eb439b488"]
    }
  }
};

export default config;
