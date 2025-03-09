"use client";
import React from 'react';
import { Clock, Gavel, TrendingUp } from 'lucide-react';

interface AuctionNFT {
  image: string;
  name: string;
  tokenId: string;
  contractAddress: string;
  startingPrice: string;
  currentBid: string;
  highestBidder: string;
  endsIn: string;
  totalBids: number;
}

const page = () => {
  const mockAuctions: AuctionNFT[] = [
    {
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&auto=format&fit=crop",
      name: "Cosmic Wanderer #123",
      tokenId: "123",
      contractAddress: "0x1234...5678",
      startingPrice: "0.5 ETH",
      currentBid: "0.75 ETH",
      highestBidder: "0xabcd...efgh",
      endsIn: "23h 45m",
      totalBids: 5
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop",
      name: "Digital Dreams #45",
      tokenId: "45",
      contractAddress: "0x8765...4321",
      startingPrice: "1 ETH",
      currentBid: "1.2 ETH",
      highestBidder: "0x9876...dcba",
      endsIn: "2d 12h",
      totalBids: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Live Auctions</h1>
            <p className="text-gray-400 mt-2">Bid on unique NFTs from various collections</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800/30 rounded-lg px-4 py-2">
              <span className="text-gray-400">Active Auctions:</span>
              <span className="ml-2 font-semibold">{mockAuctions.length}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAuctions.map((auction, index) => (
            <div key={index} className="bg-gray-800/30 rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={auction.image}
                  alt={auction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/60 rounded-full px-3 py-1 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>{auction.endsIn}</span>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{auction.name}</h3>
                  <p className="text-gray-400 text-sm">Token ID: {auction.tokenId}</p>
                  <p className="text-gray-400 text-sm truncate">CA: {auction.contractAddress}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Starting Price:</span>
                    <span>{auction.startingPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Current Bid:</span>
                    <span className="text-green-400 font-semibold">{auction.currentBid}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Highest Bidder:</span>
                    <span className="font-mono">{auction.highestBidder}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Bids:</span>
                    <div className="flex items-center">
                      <Gavel className="w-4 h-4 mr-1 text-blue-400" />
                      <span>{auction.totalBids}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;