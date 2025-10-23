// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract LandAuction {
    struct Auction {
        address seller;
        uint256 minBid;
        uint256 highestBid;
        address highestBidder;
        uint256 endTime;
        bool ended;
    }

    // Mapping: NFT contract => token ID => Auction
    mapping(address => mapping(uint256 => Auction)) public auctions;

    // Mapping: NFT contract => list of token IDs with auctions
    mapping(address => uint256[]) private nftTokenIds;

    // --- Create Auction ---
    function createAuction(
        address _nft,
        uint256 _tokenId,
        uint256 _minBid,
        uint256 _duration
    ) external {
        require(_duration > 0, "Duration must be positive");

        IERC721(_nft).transferFrom(msg.sender, address(this), _tokenId);

        auctions[_nft][_tokenId] = Auction({
            seller: msg.sender,
            minBid: _minBid,
            highestBid: 0,
            highestBidder: address(0),
            endTime: block.timestamp + _duration,
            ended: false
        });

        nftTokenIds[_nft].push(_tokenId);
    }

    // --- Place Bid ---
    function bid(address _nft, uint256 _tokenId) external payable {
        Auction storage auction = auctions[_nft][_tokenId];
        require(block.timestamp < auction.endTime, "Auction ended");
        require(msg.value > auction.highestBid && msg.value >= auction.minBid, "Bid too low");

        if (auction.highestBidder != address(0)) {
            payable(auction.highestBidder).transfer(auction.highestBid);
        }

        auction.highestBid = msg.value;
        auction.highestBidder = msg.sender;
    }

    // --- End Auction ---
 function endAuction(address _nft, uint256 _tokenId) external {
    Auction storage auction = auctions[_nft][_tokenId];
    require(!auction.ended, "Auction already ended");

    // Only seller can manually end early, or anyone if you want
    require(msg.sender == auction.seller, "Only seller can end");

    auction.ended = true;

    if (auction.highestBidder != address(0)) {
        IERC721(_nft).transferFrom(address(this), auction.highestBidder, _tokenId);
        payable(auction.seller).transfer(auction.highestBid);
    } else {
        IERC721(_nft).transferFrom(address(this), auction.seller, _tokenId);
    }
}


    // --- Get Number of Auctions ---
    function getAuctionCount(address _nft) external view returns (uint256) {
        return nftTokenIds[_nft].length;
    }

    // --- Get Auction Details by Index ---
    function getAuctionByIndex(address _nft, uint256 index) 
        external 
        view 
        returns (
            uint256 tokenId,
            address seller,
            uint256 minBid,
            uint256 highestBid,
            address highestBidder,
            uint256 endTime,
            bool ended
        ) 
    {
        require(index < nftTokenIds[_nft].length, "Index out of bounds");

        tokenId = nftTokenIds[_nft][index];
        Auction memory auction = auctions[_nft][tokenId];

        return (
            tokenId,
            auction.seller,
            auction.minBid,
            auction.highestBid,
            auction.highestBidder,
            auction.endTime,
            auction.ended
        );
    }
}
