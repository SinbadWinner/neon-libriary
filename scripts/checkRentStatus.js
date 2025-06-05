const hre = require("hardhat");
const { utils } = require("ethers");

async function main() {
  const contractAddress = "your_contract_address";
  const solanaPubkey = "your_publick_key"; // Base58

  const contract = await hre.ethers.getContractAt("CallSystemProgram", contractAddress);

  // Преобразуем Solana-адрес в bytes32
  const bs58 = require("bs58");
  const pubkeyBytes = bs58.decode(solanaPubkey);
  const pubkeyHex = "0x" + Buffer.from(pubkeyBytes).toString("hex");

  const isExempt = await contract.isRentExempt(pubkeyHex);
  console.log(`🔍 Is rent exempt: ${isExempt}`);
}

main().catch(console.error);
