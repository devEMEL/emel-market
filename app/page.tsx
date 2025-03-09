"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, TrendingUp } from 'lucide-react';

interface Collection {
  contractAddress: string;
  name: string;
  coverImage: string;
  itemsListed: number;
}

const Home: React.FC = () => {


    const [activeSort, setActiveSort] = useState('createdAt');
    const [orderDirection, setOrderDirection] = useState('desc');
    // const { loading, data, error, refetch } = useQuery(GET_COLLECTIONS, { 
    //     variables: { orderBy: activeSort, orderDirection, chainId: String(chainId) }
    // });

    const handleSort = (sortType: any) => {
        if (sortType === activeSort) {
            // Toggle order direction if the same sort type is clicked
            setOrderDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            // Update sorting criterion
            setActiveSort(sortType);
            setOrderDirection('asc'); // Reset to ascending order if sortType changes
        }

    };


    //   useEffect(() => {
    //       // Whenever activeSort or orderDirection changes, refetch with new variables
    //       refetch({
    //           orderBy: activeSort,
    //           orderDirection
    //       });
  
    //       // Logging after state has changed
    //       console.log("Updated activeSort:", activeSort);
    //       console.log("Updated orderDirection:", orderDirection);
    //   }, [activeSort, orderDirection, refetch]); // Dependency on both activeSort and orderDirection
  
    //   if (loading) return <p>Loading...</p>; // Loading Spinner
    //   if (error) return <p>Error : {error.message}</p>;

    const mockCollections: Collection[] = [
        {
          contractAddress: "0x1234...5678",
          name: "Cosmic Wanderers",
          coverImage: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&auto=format&fit=crop",
          itemsListed: 5
        },
        {
          contractAddress: "0x8765...4321",
          name: "Digital Dreams",
          coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop",
          itemsListed: 3
        },
        {
          contractAddress: "0xabcd...efgh",
          name: "Neon Nights",
          coverImage: "https://images.unsplash.com/photo-1633355444132-695d5876cd00?w=400&auto=format&fit=crop",
          itemsListed: 8
        }
      ];



  return (
    <div className="min-h-screen bg-gradient-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Listed Collections</h1>
            <p className="text-gray-400 mt-2">Explore NFT collections currently listed for sale</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800/30 rounded-lg px-4 py-2">
              <span className="text-gray-400">Total Collections:</span>
              <span className="ml-2 font-semibold">{mockCollections.length}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCollections.map((collection, index) => (
            <div
              key={index}
            //   onClick={() => router.push(`/collection/${collection.contractAddress}`)}
              className="bg-gray-800/30 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
                <Link
                href={`/collection/${collection.contractAddress}`}
            >
              <div className="relative">
                <img
                  src={collection.coverImage}
                  alt={collection.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-semibold truncate">{collection.name}</h3>
                  <p className="text-gray-400 text-sm truncate">CA: {collection.contractAddress}</p>
                </div>
              </div>
              </Link>
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center text-sm">
                  <Tag className="w-4 h-4 mr-2 text-blue-400" />
                  <span>{collection.itemsListed} items listed</span>
                </div>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  View All →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;