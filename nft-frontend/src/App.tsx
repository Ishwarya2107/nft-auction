// import React from "react";
// import Navbar from "./components/Navbar";
// import MintNFT from "./components/MintNFT";
// import CreateAuction from "./components/CreateAuction";
// import AuctionList from "./components/AuctionList";
// import BidAuction from "./components/BidAuction";

// const App = () => {
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", }}>
     
//       <Navbar />

      

//       <section >
       
//         <MintNFT />
//       </section>

//       <section >
       
//         <CreateAuction />
//       </section>

//       <section >
   
//         <AuctionList />
//       </section>

//       <section >
        
//         <BidAuction />
//       </section>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import MintNFT from "./components/MintNFT";
import CreateAuction from "./components/CreateAuction";
import AuctionList from "./components/AuctionList";
import BidAuction from "./components/BidAuction";

const App = () => {
  const styles = {
    page: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: "10px",
      height: "100vh",
      padding: "20px",
      boxSizing: "border-box" as const,
      fontFamily: "'Poppins', sans-serif",
    },
    box: {
      width: "100%",
      height: "100%",
    
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        <div style={{ ...styles.box, position: "relative", top: "-90px",left: "50px" }}>
  <MintNFT />
</div>
           <div style={{ ...styles.box, position: "relative", top: "-60px",right: "50px" }}>
          <BidAuction />
        </div>
      
          <div style={{ ...styles.box, position: "relative", top: "-250px",left: "50px" }}>
          <CreateAuction />
        </div>
        <div style={{ ...styles.box, position: "relative", top: "-185px",right: "50px" }}>
          <AuctionList />
        </div>
      </div>
    </>
  );
};

export default App;
