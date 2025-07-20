const { ethers } = require("hardhat")
const { formatEther } = require("ethers") //

async function main() {
	const [deployer] = await ethers.getSigners()
	console.log("Deploying contracts with the account:", deployer.address)

	const weiAmount = (
		await ethers.provider.getBalance(deployer.address)
	).toString()
	// console.log("Account balance:", await ethers.utils.formatEther(weiAmount))
	console.log("Account balance:", formatEther(weiAmount))

	// make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
	const Token = await ethers.getContractFactory("OanskyToken")
	const token = await Token.deploy()
	await token.waitForDeployment() // 👈 The Hardhat version of .deployed()
	console.log("Token address:", await token.getAddress())
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
// This script deploys an ERC-20 token contract using Hardhat and ethers.js.
// To run this script, use the command: npx hardhat run scripts/deploy.js
// Ensure you have the Hardhat environment set up and the contract compiled before running this script.
// The script retrieves the deployer's account, logs the balance, deploys the token contract,
// and logs the deployed token's address to the console.
// This is a basic deployment script and can be extended with additional functionality as needed.
// Ensure you have the necessary dependencies installed, such as ethers.js and Hardhat.
