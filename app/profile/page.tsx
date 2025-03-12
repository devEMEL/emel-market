// @ts-nocheck
"use client"
import React, { useEffect, useState } from 'react';
import { Wallet, Tag, Gavel, History, ExternalLink } from 'lucide-react';
import { GET_USER_NFTS } from '@/queries/nftQueries';
import { useAccount } from 'wagmi';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

type Tab = 'nfts' | 'listings' | 'auctions' | 'activity';

interface NFT {
  image: string;
  name: string;
  tokenId: string;
  contractAddress: string;
}

interface Listing extends NFT {
  listedAt: string;
  price: string;
}

interface Auction extends NFT {
  auctionedAt: string;
  startingPrice: string;
  duration: string;
  highestBidder: string;
  highestBid: string;
}

interface Transaction {
  hash: string;
  type: 'Sale' | 'Purchase' | 'Bid' | 'List' | 'Cancel';
  nftId: string;
  collectionAddress: string;
  seller: string;
  price: string;
  timestamp: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

const page = () => {
  const [activeTab, setActiveTab] = useState<Tab>('nfts');

    // const chainId = useChainId();
    const { address } = useAccount();


    

    const { loading: nftsFetchLoading, error: nftsFetchError, data: nftsFetchData } = useQuery(GET_USER_NFTS, {
        variables: { address, chainId: String(10143) },
        skip: !address, // Skip query until address is available
    });



  const _myNFTs = [
    {   
        collectionImage: "https://ipfs.io/ipfs/bafkreifvmdhd54eiaep2xl2gdakfagl2azjfxas2bbx2v2xgp6uvryvgh4",
        contractAddress: "0xDE6FCD074d20948b9C6587644D9B70A8bcBE5b12",
        ercStandard: "ERC721",
        tokenId: "2",
        tokenImage: "https://ipfs.io/ipfs/bafkreifvmdhd54eiaep2xl2gdakfagl2azjfxas2bbx2v2xgp6uvryvgh4",
        tokenName: "Ethereal Artifacts"
    }
  ]

  const mockNFTs: NFT[] = [
    {
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&auto=format&fit=crop",
      name: "Cosmic Wanderer",
      tokenId: "123",
      contractAddress: "0x1234...5678"
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop",
      name: "Digital Dreams",
      tokenId: "456",
      contractAddress: "0x8765...4321"
    }
  ];

  const mockListings: Listing[] = [
    {
      ...mockNFTs[0],
      listedAt: "3 hours ago",
      price: "0.5"
    }
  ];

  const mockAuctions: Auction[] = [
    {
      ...mockNFTs[1],
      auctionedAt: "2 hours ago",
      startingPrice: "1",
      duration: "6 days remaining",
      highestBidder: "0xabcd...efgh",
      highestBid: "1.2"
    }
  ];

  const mockTransactions: Transaction[] = [
    {
      hash: "0xabcd...efgh",
      type: "Sale",
      nftId: "123",
      collectionAddress: "0x1234...5678",
      seller: "0xabcd...efgh",
      price: "0.5",
      timestamp: "2024-03-15 14:30:00",
      status: "Completed"
    }
  ];

  const tabs = [
    { id: 'nfts', label: 'My NFTs', icon: Wallet },
    { id: 'listings', label: 'My Listings', icon: Tag },
    { id: 'auctions', label: 'My Auctions', icon: Gavel },
    { id: 'activity', label: 'My Activity', icon: History }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400';
      case 'Pending': return 'text-yellow-400';
      case 'Failed': return 'text-red-400';
      default: return 'text-white';
    }
  };

  useEffect(() => {
    console.log({nftsFetchData})
  })

  if (nftsFetchLoading) return <p>Loading...</p>; // Loading Spinner
  if (nftsFetchError) return <p>Error : {nftsFetchError.message}</p>
  if(!nftsFetchData) {
      return <p>No data available</p>
  }

  const renderNFTGrid = (items: NFT[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {nftsFetchData?.nfts.map((nft, index) => (
        <div key={index} className="bg-gray-800/30 rounded-lg overflow-hidden">
            <Link href={{
                pathname:`/listing/${nft.id}`,
                query: { nft: JSON.stringify(nft)}
            }}>
            <img src={nft.collectionImage} alt={nft.tokenName} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{nft.tokenName} #{nft.tokenId}</h3>
                {/* <p className="text-gray-400 text-sm">Token ID: {nft.tokenId}</p> */}
                <p className="text-gray-400 text-sm truncate">CA: {nft.contractAddress}</p>
            </div>
            </Link>
        </div>
      ))}
    </div>
  );

  const renderListings = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockListings.map((listing, index) => (
        <div key={index} className="bg-gray-800/30 rounded-lg overflow-hidden">
          <img src={listing.image} alt={listing.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{listing.name} #{listing.tokenId}</h3>
            <p className="text-gray-400 text-sm truncate">CA: {listing.contractAddress}</p>
            {/* <p className="text-gray-400 text-sm">Token ID: {listing.tokenId}</p> */}
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-400">{listing.listedAt}</span>
              <span className="text-blue-400 font-semibold">{listing.price} ETH</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAuctions = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockAuctions.map((auction, index) => (
        <div key={index} className="bg-gray-800/30 rounded-lg overflow-hidden">
          <img src={auction.image} alt={auction.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{auction.name} #{auction.tokenId}</h3>
            <div className="space-y-2 mt-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Starting Price:</span>
                <span>{auction.startingPrice} ETH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Current Bid:</span>
                <span className="text-green-400">{auction.highestBid} ETH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Time Left:</span>
                <span className="text-yellow-400">{auction.duration}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderActivity = () => (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="px-6 py-3 text-gray-400">Tx Hash</th>
            <th className="px-6 py-3 text-gray-400">Type</th>
            <th className="px-6 py-3 text-gray-400">NFT ID</th>
            <th className="px-6 py-3 text-gray-400">CA</th>
            <th className="px-6 py-3 text-gray-400">Seller</th>
            <th className="px-6 py-3 text-gray-400">Price (ETH)</th>
            <th className="px-6 py-3 text-gray-400">Time</th>
            <th className="px-6 py-3 text-gray-400">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((tx, index) => (
            <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30">
              <td className="px-6 py-4">
                <a href="#" className="flex items-center text-blue-400 hover:text-blue-300">
                  {tx.hash}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </td>
              <td className="px-6 py-4">{tx.type}</td>
              <td className="px-6 py-4">{tx.nftId}</td>
              <td className="px-6 py-4 font-mono">{tx.collectionAddress}</td>
              <td className="px-6 py-4 font-mono">{tx.seller}</td>
              <td className="px-6 py-4">{tx.price}</td>
              <td className="px-6 py-4">{tx.timestamp}</td>
              <td className={`px-6 py-4 ${getStatusColor(tx.status)}`}>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">My Profile</h1>
          <div className="flex space-x-2 text-sm">
            <div className="bg-gray-800/30 rounded-lg px-4 py-2">
              <span className="text-gray-400">Balance:</span>
              <span className="ml-2">2.5</span>
               {/* user balance */}
            </div>
            <div className="bg-gray-800/30 rounded-lg px-4 py-2 font-mono">
              <span className="text-gray-400">Address:</span> 
              <span className="ml-2">0x1234...5678</span>
               {/* user address */}
            </div>
          </div>
        </div>


        {/* <button onClick={ async() => {
            const mynfts = await fetchNFTs();
            console.log({mynfts});
        }}>view my nfts</button> */}
            

        <div className="mb-8">
          <nav className="flex space-x-4">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as Tab)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-gray-800/30 rounded-lg p-6">
          {activeTab === 'nfts' && renderNFTGrid(mockNFTs)}
          {activeTab === 'listings' && renderListings()}
          {activeTab === 'auctions' && renderAuctions()}
          {activeTab === 'activity' && renderActivity()}
        </div>
      </div>
    </div>
  );
};

export default page;