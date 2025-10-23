// import { useState } from "react";
// import { initContracts } from "../contracts";
// import { ethers } from "ethers";
// const BidAuction = () => {
//   const [tokenId, setTokenId] = useState("");
//   const [bidAmount, setBidAmount] = useState("");

//   const handleBid = async () => {
//     try {
//       const { landAuctionContract,landNFTContract } = await initContracts();
//       const tx = await landAuctionContract.bid(
//   landNFTContract,      // NFT contract address
//   BigInt(tokenId),             // Token ID as BigInt
//   { value: ethers.parseEther(bidAmount) } // ETH value
// );

//       await tx.wait();
//       alert("Bid placed!");
//     } catch (err: any) {
//       alert(err.message || "Failed to place bid");
//     }
//   };

//   return (
//     <div>
//       <input placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
//       <input placeholder="Bid Amount (ETH)" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} />
//       <button onClick={handleBid}>Place Bid</button>
//     </div>
//   );
// };

// export default BidAuction;
import { useState } from "react";
import { initContracts } from "../contracts";
import { ethers } from "ethers";

const BidAuction = () => {
  const [tokenId, setTokenId] = useState("");
  const [bidAmount, setBidAmount] = useState("");

  const handleBid = async () => {
    try {
      const { landAuctionContract, landNFTContract } = await initContracts();
      const tx = await landAuctionContract.bid(
        landNFTContract,      // NFT contract address
        BigInt(tokenId),      // Token ID as BigInt
        { value: ethers.parseEther(bidAmount) } // ETH value
      );
      await tx.wait();
      alert("Bid placed!");
    } catch (err: any) {
      alert(err.message || "Failed to place bid");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      borderRadius: "16px",
     paddingTop: "20px",
paddingRight: "40px",
paddingBottom: "40px",
paddingLeft: "40px",

      width: "500px",
      margin: "50px auto",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
      fontFamily: "'Poppins', sans-serif",
      color: "#222",
    },
    heading: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#1a1a1a",
      marginBottom: "30px",
      letterSpacing: "0.5px",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      borderRadius: "10px",
      border: "2px solid #ddd",
      marginBottom: "20px",
      fontSize: "15px",
      outline: "none",
      transition: "all 0.3s ease",
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Place Your Bid</h2>
      <input
        style={styles.input}
        placeholder="Enter Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
        onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />
      <input
        style={styles.input}
        placeholder="Enter Bid Amount (ETH)"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />
      <button
        style={styles.button}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(118, 75, 162, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
        onClick={handleBid}
      >
        Place Bid
      </button>
    </div>
  );
};

export default BidAuction;
