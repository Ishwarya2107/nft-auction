// import { useEffect, useState } from "react";
// import { initContracts } from "../contracts";
// import { LAND_NFT_ADDRESS } from "../constants"; // Your NFT contract address

// interface Auction {
//   tokenId: string;
//   seller: string;
//   minBid: string;
//   highestBid: string;
//   highestBidder: string;
//   endTime: number;
//   ended: boolean;
// }

// const AuctionList = () => {
//   const [auctions, setAuctions] = useState<Auction[]>([]);

//   const fetchAuctions = async () => {
//     try {
//       const { landAuctionContract } = await initContracts();
//       const auctionCount = await landAuctionContract.getAuctionCount(LAND_NFT_ADDRESS);

//       const loaded: Auction[] = [];
//       for (let i = 0; i < Number(auctionCount); i++) {
//         const a = await landAuctionContract.getAuctionByIndex(LAND_NFT_ADDRESS, i);
//         loaded.push({
//           tokenId: a.tokenId.toString(),
//           seller: a.seller,
//           minBid: a.minBid.toString(),
//           highestBid: a.highestBid.toString(),
//           highestBidder: a.highestBidder,
//           endTime: Number(a.endTime),
//           ended: a.ended,
//         });
//       }

//       const now = Math.floor(Date.now() / 1000);
//       // Only show auctions that are still ongoing
//       setAuctions(loaded.filter(a => !a.ended && a.endTime > now));
//     } catch (err) {
//       console.error("Failed to fetch auctions:", err);
//     }
//   };

//   const endAuction = async (tokenId: string) => {
//     try {
//       const { landAuctionContract } = await initContracts();
//       const tx = await landAuctionContract.endAuction(LAND_NFT_ADDRESS, BigInt(tokenId));
//       await tx.wait();
//       alert(`Auction ${tokenId} ended successfully!`);
//       fetchAuctions(); // Refresh auction list
//     } catch (err: any) {
//       alert(err.message || "Failed to end auction");
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchAuctions();
//     // Optional: refresh auctions every 10 seconds
//     const interval = setInterval(fetchAuctions, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const now = Math.floor(Date.now() / 1000);

//   return (
//     <div>
    
//       {auctions.length === 0 && <p>No active auctions</p>}
//       {auctions.map((a, idx) => (
//         <div key={idx} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
//           <p>Token ID: {a.tokenId}</p>
//           <p>Seller: {a.seller}</p>
//           <p>Min Bid: {a.minBid}</p>
//           <p>Highest Bid: {a.highestBid}</p>
//           <p>Highest Bidder: {a.highestBidder}</p>
//           <p>Ends At: {new Date(a.endTime * 1000).toLocaleString()}</p>

//           {/* Show End Auction button for all active auctions */}
//           {!a.ended && (
//             <button
//               onClick={() => endAuction(a.tokenId)}
              
//             >
//               End Auction
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AuctionList;
import { useEffect, useState } from "react";
import { initContracts } from "../contracts";
import { LAND_NFT_ADDRESS } from "../constants";

interface Auction {
  tokenId: string;
  seller: string;
  minBid: string;
  highestBid: string;
  highestBidder: string;
  endTime: number;
  ended: boolean;
}

const AuctionList = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  const fetchAuctions = async () => {
    try {
      const { landAuctionContract } = await initContracts();
      const auctionCount = await landAuctionContract.getAuctionCount(LAND_NFT_ADDRESS);

      const loaded: Auction[] = [];
      for (let i = 0; i < Number(auctionCount); i++) {
        const a = await landAuctionContract.getAuctionByIndex(LAND_NFT_ADDRESS, i);
        loaded.push({
          tokenId: a.tokenId.toString(),
          seller: a.seller,
          minBid: a.minBid.toString(),
          highestBid: a.highestBid.toString(),
          highestBidder: a.highestBidder,
          endTime: Number(a.endTime),
          ended: a.ended,
        });
      }

      const now = Math.floor(Date.now() / 1000);
      setAuctions(loaded.filter(a => !a.ended && a.endTime > now));
    } catch (err) {
      console.error("Failed to fetch auctions:", err);
    }
  };

  const endAuction = async (tokenId: string) => {
    try {
      const { landAuctionContract } = await initContracts();
      const tx = await landAuctionContract.endAuction(LAND_NFT_ADDRESS, BigInt(tokenId));
      await tx.wait();
      alert(`Auction ${tokenId} ended successfully!`);
      fetchAuctions();
    } catch (err: any) {
      alert(err.message || "Failed to end auction");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAuctions();
    const interval = setInterval(fetchAuctions, 10000);
    return () => clearInterval(interval);
  }, []);

  const now = Math.floor(Date.now() / 1000);

  const styles = {
  page: {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "flex-start",
  background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  height: "200px",           // initial height
  minHeight: "500px",        // ensures it doesn't shrink too small
  padding: "20px 30px",
  fontFamily: "'Poppins', sans-serif",
  color: "#222",
  borderRadius: "20px",
  maxWidth: "530px",
  margin: "20px auto",
  overflow: "visible",       // allows expanding downward
}


,
    title: {
      fontSize: "28px",
      fontWeight: 700,
      marginBottom: "30px",
      color: "#1a1a1a",
    },
    auctionCard: {
  width: "500px", // reduced from 400px
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
  padding: "20px",
  marginBottom: "25px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
},
    label: {
      fontWeight: 600,
      color: "#555",
    },
    value: {
      color: "#333",
      marginBottom: "8px",
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
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Active NFT Auctions</h2>

      {auctions.length === 0 && <p>No active auctions right now!</p>}

      {auctions.map((a, idx) => (
        <div
          key={idx}
          style={styles.auctionCard}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(0,0,0,0.18)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
          }}
        >
          <p><span style={styles.label}>Token ID:</span> <span style={styles.value}>{a.tokenId}</span></p>
          <p><span style={styles.label}>Seller:</span> <span style={styles.value}>{a.seller}</span></p>
          <p><span style={styles.label}>Min Bid:</span> <span style={styles.value}>{a.minBid} wei</span></p>
          <p><span style={styles.label}>Highest Bid:</span> <span style={styles.value}>{a.highestBid} wei</span></p>
          <p><span style={styles.label}>Highest Bidder:</span> <span style={styles.value}>{a.highestBidder}</span></p>
          <p><span style={styles.label}>Ends At:</span> <span style={styles.value}>{new Date(a.endTime * 1000).toLocaleString()}</span></p>

          {!a.ended && (
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
              onClick={() => endAuction(a.tokenId)}
            >
              🏁 End Auction
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AuctionList;
