const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const contractAddress = "0xA3609F0FD2E45A56b2A84a53f1D55a0e8586A98b"; // твой адрес контракта
  const contract = await ethers.getContractAt("CallSystemProgram", contractAddress);

  const seed = ethers.encodeBytes32String("bootcamp-seed");
  const programId = ethers.zeroPadValue("0x0000000000000000000000000000000000000001", 32); // 🛠️ fix
  const space = 128;

  const recipient = "0x0000000000000000000000004D9e056c13126F9bEe618881f7f5075197FF91E7"; // обернутый EVM адрес
  const amount = 10000000; // в лампортах

  const tx = await contract.createAndTransferWithSeed(seed, programId, space, recipient, amount);
  console.log("🚀 TX hash:", tx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
