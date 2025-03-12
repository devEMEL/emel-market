import { gql } from "@apollo/client";


export const CREATE_LISTING = gql`
    mutation createListing($seller: String!, $nftContract: String!, $tokenId: String!, $price: String!, $createdAt: String!) {
        createListing(seller: $seller, nftContract: $nftContract, tokenId: $tokenId, price: $price, createdAt: $createdAt) {
            id
            seller
            buyer
            nftContract 
            tokenId 
            price
            createdAt
            status
        }
    }
`;
