# 🌟 OanskyToken (ERC-20)

**OanskyToken** is a custom ERC-20 token deployed on the Sepolia Ethereum testnet using Hardhat and OpenZeppelin.

> ✅ Contract Address: `0xC3F8ffA25823E768500F9361D872d2bc7d275fa1`  
> 🌐 Explorer: [View on Sepolia Etherscan](https://sepolia.etherscan.io/address/0xC3F8ffA25823E768500F9361D872d2bc7d275fa1)

---

## 🔧 Tech Stack

- [Solidity](https://soliditylang.org/) (v0.8.x)
- [Hardhat](https://hardhat.org/)
- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Alchemy](https://www.alchemy.com/)
- [Ethers.js](https://docs.ethers.org/)
- [Sepolia Testnet](https://sepolia.etherscan.io/)

---

## 🪙 Token Details

| Name        | Symbol | Decimals | Total Supply       |
| ----------- | ------ | -------- | ------------------ |
| OanskyToken | SKY    | 18       | 100 SKY (10¹⁸ wei) |

---

## 📁 Project Structure

```bash
.
├── contracts/
│   └── OanskyToken.sol        # ERC-20 smart contract
├── scripts/
│   ├── deploy.js              # Deployment script
│   └── transfer.js            # (Upcoming) Transfer script
├── .env                       # Environment config (not committed)
├── hardhat.config.js          # Hardhat setup
├── README.md
```

---

## ⚡ Quick Start

### 1. Clone the repo and install dependencies

```bash
git clone https://github.com/oanskyy/oansky-token.git
cd oansky-token
npm install
```

### 2. Create a .env file

```
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-key
PRIVATE_KEY=your_private_key_without_0x
ETHERSCAN_API_KEY=your_etherscan_key
```

### 3.Compile the smart contract

```bash
npx hardhat compile
```

### 4. Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## ✅ To-Do (WIP)

- [ ] Verify contract on Etherscan
- [ ] Transfer tokens to another wallet
- [ ] Build a faucet-style claim dApp
- [ ] Design a mint/claim UI
- [ ] Create an airdrop script 

---

## 🧠 Inspiration

Created as part of a hands-on learning journey in **Web3**, **smart contracts**, and **token economics**.

---

## 👩‍💻 Author

**Oana Anghelachi**  
Frontend/Web3 Engineer · London/Remote

[GitHub](https://github.com/oanskyy)
