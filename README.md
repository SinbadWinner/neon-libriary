# Neon EVM – Week 3 Task Submission

This repository contains the implementation for Week 3 of the Neon Dev Bootcamp. The task was to use Neon’s Solidity composability libraries to interact with Solana’s System Program using precompiled contracts.

## ✅ Task Objectives

- Deploy the `CallSystemProgram` contract from the `solidity-composability-libraries`
- Use it to:
  - Create a Solana account via `createAccountWithSeed`
  - Transfer SOL via `transfer`

These actions were performed successfully using the Neon EVM testnet (`neondevnet`).

## 🧠 Contract Used

The main contract is `CallSystemProgram.sol`. It demonstrates how to:

- Convert Neon EVM addresses to Solana public keys
- Format and encode low-level instructions using helper libraries
- Execute Solana system-level operations via `ICallSolana`

## ✍️ Bonus: Custom Function for Extra Points

A custom function was added to demonstrate combined instruction handling:

```solidity
function createAndTransferWithSeed(
    bytes memory seed,
    bytes32 programId,
    uint64 space,
    bytes32 recipient,
    uint64 amount
) external

This function creates a Solana account with a seed and then transfers SOL to a recipient in one combined execution flow, showcasing an advanced use of Neon composability.

📂 Scripts
Tree scripts were created for testing and deployment:

scripts/deploy.js: Deploys the contract to Neon Devnet

scripts/executeCreateAndTransfer.js: Executes the custom function on-chain

checkRentStatus.js: Checks if a Solana account is rent-exempt using the contract


⚙️ Setup Instructions
1. Install dependencies:
npm install
2. Set up your .env file with required private keys:
PRIVATE_KEY_OWNER=your_evm_owner_private_key
PRIVATE_KEY_USER_1=...
PRIVATE_KEY_SOLANA=your_base58_solana_keypair
3. Compile the project:
npx hardhat compile
4. Deploy the contract:
npx hardhat run scripts/deploy.js --network neondevnet
5. Execute the custom logic:
npx hardhat run scripts/executeCreateAndTransfer.js --network neondevnet
6. Run rent-exemption check
npx hardhat run scripts/checkRentStatus.js --network neondevnet


✅ Result
Contract deployed: ✔️

Solana account creation: ✔️

SOL transfer: ✔️

Custom function executed on-chain: ✔️ (several)