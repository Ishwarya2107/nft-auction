// import { useState } from "react";
// import { ethers } from "ethers";

// declare let window: any;

// const Navbar = () => {
//   const [account, setAccount] = useState<string>("");

//   const connectWallet = async () => {
//     if (!window.ethereum) {
//       alert("MetaMask is not installed");
//       return;
//     }
//     const provider = new ethers.BrowserProvider(window.ethereum);
//     const accounts = await provider.send("eth_requestAccounts", []);
//     setAccount(accounts[0]);
//   };

//   return (
//     <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
//       <button onClick={connectWallet}>
//         {account ? `Connected: ${account.substring(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { ethers } from "ethers";

declare let window: any;

const Navbar = () => {
  const [account, setAccount] = useState<string>("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed");
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setAccount(accounts[0]);
  };

  const styles = {
    nav: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "0 0 16px 16px",
      fontFamily: "'Poppins', sans-serif",
    },
    button: {
      background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "12px",
      padding: "10px 20px",
      paddingRight: "20px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
  };

  return (
    <nav style={styles.nav}>
       <h1 style={{ textAlign: "center",paddingRight:"240px" }}>NFT Land Auction Dashboard </h1>
      <button
           style={{
      ...styles.button,
      marginRight:"100px"// moves it a bit left from the right edge
    }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(118, 75, 162, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
        onClick={connectWallet}
      >
        {account
          ? `Connected: ${account.substring(0, 6)}...${account.slice(-4)}`
          : "Connect Wallet"}
      </button>
    </nav>
  );
};

export default Navbar;
