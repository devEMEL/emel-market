import { gql } from '@apollo/client';


export const GET_USER_NFTS = gql`
    query getUserNFTS($address: String!, $chainId: String!) {
        nfts(address: $address, chainId: $chainId) {
            id
            contractAddress
            tokenId
            collectionImage
            ercStandard
            tokenImage
            tokenName
            chainId
        }
    }
`;




