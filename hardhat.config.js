require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const GOERLI_URL = process.env.GOERLI_URL
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY

const ETH_URL = process.env.ETH_URL
const PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    eth: {
      url: ETH_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
