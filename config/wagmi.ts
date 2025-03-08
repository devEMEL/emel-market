import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import type { Chain } from 'viem';


const monadTestnet = {
    id: 10143,
    name: 'Monad Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Monad Testnet',
        symbol: 'MON',
    },
    rpcUrls: {
        public: {
            http: ['https://testnet-rpc2.monad.xyz/52227f026fa8fac9e2014c58fbf5643369b3bfc6'],
        },
        default: {
            http: ['https://testnet-rpc2.monad.xyz/52227f026fa8fac9e2014c58fbf5643369b3bfc6'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Monad Testnet',
            url: 'https://testnet.monadexplorer.com',
        },
    },

    testnet: true,
} as const satisfies Chain;

export const wagmiConfig = getDefaultConfig({
    appName: 'emel verse',
    projectId: 'cdddc2c45ee7a243f73916dfe293c0ca',
    chains: [
        monadTestnet,
    ],
    transports: {
        [monadTestnet.id]: http(),
    },
});
