import React from 'react'

const page = () => {
  return (
    <div>
         <div>Privacy Policy</div>
        <div>

                <div className='my-4'>
                1. Introduction <br />
                <div className='pl-6'>
                Welcome to EmelVerse. This Privacy Policy explains how we handle user data when you interact with our dApp. <br /> By using EmelVerse, you agree to the terms outlined here.
                </div>
                </div>

                <div className='my-4'>
                2. Data We Collect <br />
                <div className='pl-6'>
                We do not collect personally identifiable information (PII) such as names, emails, or passwords. However, we process the following data to enable the functionality of our platform: 
                <div className='mt-2'>
                a. Wallet Information
                </div>
                <p className='pl-6'>When you connect your wallet (e.g., MetaMask), we access your public wallet address to facilitate transactions. <br />We do not have access to your private keys.
                </p>
                <div className='mt-2'>
                b. NFT Data & IPFS Storage
                </div>
                <p className='pl-6'>When you create an NFT, your selected image is uploaded to IPFS, a decentralized file storage system. <br />The generated IPFS hash (CID) is stored in our database.
                </p>
                <div className='mt-2'>
                c. Blockchain Transactions
                </div>
                <p className='pl-6'>All transactions, including NFT minting and payments, are recorded on-chain. These records are public and immutable. <br />Users can claim ETH from NFT sales with a single click, and such transactions are executed via smart contracts.
                </p>
                <div className='mt-2'>
                d. Database Storage (MongoDB)
                </div>
                <p className='pl-6'>We store NFT metadata, including the IPFS hash and smart contract address, in MongoDB for indexing and display purposes. <br />We do not store user private keys, personal identifiers, or off-chain financial data.
                </p>
                </div>
                </div>

                <div className='my-4'>
                3. How We Use Your Data <br />
                <div className='pl-6'>
                The limited data we collect is used to:
                <div className='mt-2'>
                a.  Facilitate NFT creation, minting, and payments. <br />
                b. Store NFT metadata for seamless retrieval and display. <br />
                c. Allow collection owners to claim ETH from minted NFTs.
                </div>
                </div>
                </div>


                <div className='my-4'>
                4. Third-Party Services <br />
                <div className='pl-6'>
                Our platform integrates with decentralized and third-party services, including:
                <div className='mt-2'>
                a. IPFS (InterPlanetary File System) – Used for decentralized file storage. <br />
                b. Wallet Providers (MetaMask, WalletConnect, etc.) – Wallet interactions are handled directly by the provider. <br />
                c. MongoDB – Used to store NFT metadata, but not sensitive personal data.
                </div>
                </div>
                </div>


                <div className='my-4'>
                5. Security & Data Protection<br />
                <div className='pl-6'>
                
                <div className='mt-2'>
                a. Decentralization: We do not store private keys, passwords, or personal financial data. <br />
                b. Smart Contracts: Transactions are executed via immutable smart contracts, reducing central points of failure. <br />
                c. MongoDB Storage: While we store NFT metadata, it does not include sensitive user information. <br />
                d. User Responsibility: Users are responsible for securing their wallets and private keys.
                </div>
                </div>
                </div>

                <div className='my-4'>
                6. User Rights & Control <br />
                <div className='pl-6'>
               
                <div className='mt-2'>
                a. Full Control: Users can create, mint, and claim ETH without requiring personal registration. <br />
                b.Immutable Data: Since transactions and NFT metadata are stored on IPFS and the blockchain, we cannot alter or delete this information. <br />
                c. Wallet Disconnection: Users can disconnect their wallets at any time.
                </div>
                </div>
                </div>

                <div className='my-4'>
                7. Changes to This Policy <br />
                <div className='pl-6'>
                We may update this Privacy Policy periodically. Continued use of EmelVerse after changes means you accept the updated terms.
                </div>
                </div>


            </div>
    </div>
  )
}

export default page;