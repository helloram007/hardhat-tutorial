require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_URL='https://sepolia.infura.io/v3/ebf8b79743ad422da2f382d885183990';
const SECRET_KEY='7e92f2a8b0ba45bc7f00841e4cf3da1b82961cb8b0ac082217933fb7e43ed237';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${SECRET_KEY}`]  
    }
  }
};
