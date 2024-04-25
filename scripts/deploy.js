const fs = require('fs');

const { ethers } = require("hardhat");

async function main(){
    // get the signer object for the deployer.
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const balance = await deployer.provider.getBalance(deployer.address);
    console.log(`Account balance: ${balance}`);

    const Token = await ethers.getContractFactory('Token');
    const token = await Token.deploy();
    //TODO - The below token address is outputted as undefined.
    // above line 10, earlier getbalance was in deployer, but in the
    //latest versions it was deprecated and moved into provider.
    //so instead of deployer.getBalance, we have to use deployer.provider.getBalance().
    //But the below was not resolved and hence the output is undefined.
    console.log(`Token Address: ${token.address}`);

    const data = {
        address: token.address,
        abi: JSON.parse(token.interface.format('json')),
    };
    fs.writeFileSync('frontend/src/Token.json', JSON.stringify(data));

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });