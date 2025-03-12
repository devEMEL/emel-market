import { listingResolvers } from './resolvers/listings';
import { nftResolvers } from './resolvers/nfts';
import { merge } from 'lodash';

export const resolvers = merge({}, nftResolvers, listingResolvers); // add other resolvers
