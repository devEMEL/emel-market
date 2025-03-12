import { gql } from '@apollo/client';
import { NFTType } from './type/NFT';
import { listingType } from './type/listing';

const baseSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }
`;

export const typeDefs = [baseSchema, NFTType, listingType]; // add other types like listing and auction
