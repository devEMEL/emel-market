// @ts-nocheck

import { ListingModel } from "@/models/Listing";
import { fetchNFTs } from "@/utils";

// id: ID!
// seller: String! 
// buyer: String!
// nftContract: String!  
// tokenId: String! 
// price: String!  
// createdAt: String!
// status: ListingStatus! 

export const listingResolvers = {
    Query: {
        listings: async (_, { status }, { dataSources }) => {

            return ListingModel.find({ status: "ACTIVE"})
        },

        // nft: async (_, { id }, { dataSources }) => {
        //     return nftModel.findById(id)
        // },
    },
    Mutation: {
        createListing: async (_, args, { dataSources }) => {
            const nft = new ListingModel({
                seller: args.seller,
                nftContract: args.nftContract, 
                tokenId: args.tokenId, 
                price: args.price,
                createdAt: args.createdAt,
            });
            return nft.save();

        },
    },
};
