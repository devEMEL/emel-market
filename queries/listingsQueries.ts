import { gql } from '@apollo/client';


export const GET_LISTINGS = gql`
    query getListings($status: ListingStatus!) {
        listings(status: $status) {
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

// export const GET_LISTINGS = gql`
//     query getListings($status: String!) {
//         listings(status: $status) {
//             id
//             seller
//             buyer
//             nftContract 
//             tokenId
//             price  
//             createdAt
//             status
//         }
//     }
// `;



