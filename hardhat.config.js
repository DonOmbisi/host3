import "@nomicfoundation/hardhat-toolbox";
import { readFileSync } from "fs";
const privateKey = readFileSync("secrete.txt").toString();
/** @type import('hardhat/config').HardhatUserConfig */
export const defaultNetwork = "sepolia";
export const networks = {
  hardhat: {
    chainId: 4202,
  },

  BitTorrent: {
    url: "https://pre-rpc.bt.io/",
    accounts: [privateKey],
    gasPrice: 1000000000,
  },
};
export const solidity = "0.8.24";
export const allowUnlimitedContractSize = true;
export const throwOnTransactionFailures = true;
export const throwOnCallFailures = true;
export const loggingEnabled = true;

// npx hardhat ignition deploy ./ignition/modules/WebpageStorageModule.js --network BitTorrent
