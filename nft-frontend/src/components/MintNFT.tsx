// import { useState } from "react";
// import { initContracts } from "../contracts"; // <- import the function

// const MintNFT = () => {
//   const [tokenURI, setTokenURI] = useState("");

//   const handleMint = async () => {
//     try {
//       const { landNFTContract } = await initContracts(); // <- get contract instance
//       const tx = await landNFTContract.mint(tokenURI);
//       await tx.wait();
//       alert("NFT minted!");
//     } catch (err: any) {
//       alert(err.message || "Minting failed");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Token URI"
//         value={tokenURI}
//         onChange={(e) => setTokenURI(e.target.value)}
//       />
//       <button onClick={handleMint}>Mint NFT</button>
//     </div>
//   );
// };

// export default MintNFT;
import { useState } from "react";
import { initContracts } from "../contracts";

const MintNFT = () => {
  const [tokenURI, setTokenURI] = useState("");

  const handleMint = async () => {
    try {
      const { landNFTContract } = await initContracts();
      const tx = await landNFTContract.mint(tokenURI);
      await tx.wait();
      alert("NFT minted!");
     
    } catch (err: any) {
      alert(err.message || "Minting failed");
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
     paddingTop: "30px",
    paddingRight: "30px",
    paddingBottom: "80px",
    paddingLeft: "30px",

      width: "500px",
      height:"200px",
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
      <h2 style={styles.heading}>Mint Your NFT</h2>
      <input
        style={styles.input}
        placeholder="Enter Token URI"
        value={tokenURI}
        onChange={(e) => setTokenURI(e.target.value)}
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
        onClick={handleMint}
      >
        Mint NFT
      </button>
    </div>
  );
};

export default MintNFT;


