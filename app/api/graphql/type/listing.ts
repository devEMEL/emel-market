
import { gql } from '@apollo/client';
export const listingType = gql`

    enum ListingStatus {
        ACTIVE
        SOLD
        CANCELED
    }

    type Listing {
        id: ID!
        seller: String! 
        buyer: String!
        nftContract: String!  
        tokenId: String! 
        price: String!  
        createdAt: String!
        status: ListingStatus! 
    }

    extend type Query {
        listings(status: ListingStatus!): [Listing!]!
    }

    extend type Mutation {
        createListing(
            seller: String! 
            nftContract: String!  
            tokenId: String! 
            price: String!  
            createdAt: String!
        ): Listing!
    }
    

`;
// make listing
// cancel listing (status becomes cancelled)
// buy listing (status becomes bought)