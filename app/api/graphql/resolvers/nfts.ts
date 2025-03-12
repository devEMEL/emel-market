// @ts-nocheck

import { nftModel } from "@/models/NFT";
import { fetchNFTs } from "@/utils";

export const nftResolvers = {
    Query: {
        nfts: async (_, { address, chainId }, { dataSources }) => {

            const mynfts = await fetchNFTs(address);
            return mynfts.map(nft => ({
                ...nft,
                id: `${nft.contractAddress}-${nft.tokenId}`,
                chainId,
            }));
        },
        // nft: async (_, { id }, { dataSources }) => {
        //     return nftModel.findById(id)
        // },
    },
    Mutation: {
        // createNFT: async (_, args, { dataSources }) => {
        //     const nft = new nftModel({
        //         chainId: args.chainId,
        //         name: args.name,
        //         symbol: args.symbol,
        //         description: args.description,
        //         collectionAddress: args.collectionAddress,
        //         tokenId: args.tokenId,
        //         ownerAddress: args.ownerAddress,
        //         mintedAt: args.mintedAt,
        //         imageUrl: args.imageUrl,
        //     });
        //     return nft.save();

        // },
    },
};
