// import { useState } from "react";
// import { initContracts } from "../contracts";
// import { ethers } from "ethers";

// const CreateAuction = () => {
//   const [tokenId, setTokenId] = useState("");
//   const [minBid, setMinBid] = useState("");
//   const [duration, setDuration] = useState("");

//   const handleCreate = async () => {
//     try {
//       const { landAuctionContract, landNFTContract } = await initContracts();
// await landNFTContract.approve(landAuctionContract, BigInt(tokenId));

//       const tx = await landAuctionContract.createAuction(
//         landNFTContract,           // NFT contract address
//         BigInt(tokenId),                  // token ID as uint256
//         ethers.parseEther(minBid),        // min bid in wei
//         BigInt(duration)                  // duration as uint256
//       );

//       await tx.wait();
//       alert("Auction created!");
//     } catch (err: any) {
//       alert(err.message || "Failed to create auction");
//     }
//   };

//   return (
//     <div>
//       <input placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
//       <input placeholder="Min Bid (ETH)" value={minBid} onChange={(e) => setMinBid(e.target.value)} />
//       <input placeholder="Duration (seconds)" value={duration} onChange={(e) => setDuration(e.target.value)} />
//       <button onClick={handleCreate}>Create Auction</button>
//     </div>
//   );
// };

// export default CreateAuction;
import { useState } from "react";
import { initContracts } from "../contracts";
import { ethers } from "ethers";

const CreateAuction = () => {
  const [tokenId, setTokenId] = useState("");
  const [minBid, setMinBid] = useState("");
  const [duration, setDuration] = useState("");

  const handleApprove = async () => {
    try {
      const { landAuctionContract, landNFTContract } = await initContracts();
      await landNFTContract.approve(landAuctionContract, BigInt(tokenId));
      alert("Token approved successfully!");
    } catch (err: any) {
      alert(err.message || "Approval failed");
    }
  };

  const handleCreate = async () => {
    try {
      const { landAuctionContract, landNFTContract } = await initContracts();
      const tx = await landAuctionContract.createAuction(
        landNFTContract,
        BigInt(tokenId),
        ethers.parseEther(minBid),
        BigInt(duration)
      );
      await tx.wait();
      alert("Auction created successfully!");
    } catch (err: any) {
      alert(err.message || "Auction creation failed");
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
      padding: "20px 40px 50px 40px",
      width: "480px",
      margin: "80px auto",
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
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      gap: "20px",
    },
    button: {
      flex: 1,
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
      <h2 style={styles.heading}>Create Your Auction </h2>
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
        placeholder="Enter Min Bid (ETH)"
        value={minBid}
        onChange={(e) => setMinBid(e.target.value)}
        onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />
      <input
        style={styles.input}
        placeholder="Enter Duration (seconds)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />

      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(118, 75, 162, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
          onClick={handleApprove}
        >
          Approve
        </button>

        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(118, 75, 162, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
          onClick={handleCreate}
        >
          Create Auction
        </button>
      </div>
    </div>
  );
};

export default CreateAuction;


