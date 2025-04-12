// src/utils/ipfs.js
import { create } from 'ipfs-http-client';
const client = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

export const uploadToIPFS = async (file, user) => {
  const added = await client.add(file);
  // TODO: store file hash with user's eth address on blockchain (simulate or use actual)
  return added;
};

export const getUserFiles = async (user) => {
  // MOCK: Replace with real blockchain lookup
  return [
    { name: 'test1.pdf', cid: 'QmTestHash1' },
    { name: 'photo.png', cid: 'QmTestHash2' }
  ];
};

export const downloadFromIPFS = (cid) => {
  window.open(`https://ipfs.io/ipfs/${cid}`, '_blank');
};

export const shareFile = (from, to, cid) => {
  // Simulate sharing on-chain
  alert(`File with CID ${cid} shared from ${from} to ${to}`);
};
