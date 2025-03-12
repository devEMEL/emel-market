import { gql } from '@apollo/client';

export const NFTType = gql`
    type NFT {
        id: ID!
        contractAddress: String!
        tokenId: String!
        collectionImage: String!
        ercStandard: String!
        tokenImage: String!
        tokenName: String!
        chainId: String!
    }

    extend type Query {
        nfts(address: String!, chainId: String!): [NFT!]!
        nft(address: String!, chainId: String!): NFT
    }


    extend type Mutation {
        createNFT(
            chainId: String!
            name: String!
            symbol: String!
            description: String
            collectionAddress: String!
            tokenId: String!
            ownerAddress: String!
            mintedAt: String!
            imageUrl: String!
        ): NFT
    }
`;
// since id = collection id

