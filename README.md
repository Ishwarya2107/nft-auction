# Blockchain enabled trade
## Land NFT Auction
### LandNFT is a decentralized application (dApp) that allows users to mint, own, and auction virtual land parcels as NFTs on the Ethereum Sepolia Testnet. Each land NFT represents a unique digital asset with metadata stored on IPFS, ensuring transparency, immutability, and verifiable ownership.

The project includes two main smart contracts:

#### LandNFT.sol – Handles the creation (minting) of land NFTs, linking each token to its metadata URI.

#### LandAuction.sol – Enables decentralized land auctions where users can list their NFTs, place bids, and transfer ownership securely using smart contracts.

#### Users can:
- **Mint** new land NFTs with unique metadata URIs  
- **View and manage** their owned NFTs  
- **Participate** in decentralized land auctions by bidding with ETH  

This project demonstrates the full lifecycle of NFT-based asset creation and trading on the blockchain, combining Solidity, Hardhat, IPFS, and MetaMask for an end-to-end decentralized experience.

### Running the Project

**Step 1: Clone the repository**  
Copy the repository to your local machine and navigate into the project folder.

```bash
git clone https://github.com/Ishwarya2107/nft-auction.git
cd nft-auction
```

**Step 2: Install dependencies**  
Install all necessary Node.js packages for the frontend and Hardhat.

```bash
npm install
```

**Step 3: Compile smart contracts**  
Compile your Solidity contracts to check for errors and generate artifacts.

```bash
npx hardhat compile
```

**Step 4: Set up environment variables**  
Create a `.env` file with your Sepolia testnet details.

```bash
echo "SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID" >> .env
echo "PRIVATE_KEY=your_wallet_private_key" >> .env
```

**Step 5: Deploy contracts to Sepolia**  
Deploy the smart contracts to the Sepolia testnet.

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

**Step 6: Start the frontend**  
Run the web interface locally to interact with your dApp.

```bash
npm start
```

**Step 7: Connect MetaMask**  
- Switch MetaMask to Sepolia Testnet  
- Import the account you used for deployment  
- Make sure it has some Sepolia ETH for gas fees  

**Step 8: Interact with the dApp**  
Use the frontend to:  
- Mint new land NFTs  
- View and manage owned NFTs  
- Participate in decentralized land auctions




### Team Members
**Aditya D P** – 22N203  
**Ishwarya S** – 22N223  
**Sudharsini S G** – 22N260  
**Srivan Alagesh** – 22N267  

