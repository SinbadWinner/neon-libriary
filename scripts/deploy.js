const { ethers } = require("hardhat");

async function main() {
  const factory = await ethers.getContractFactory("CallSystemProgram");
  const contract = await factory.deploy();
  await contract.waitForDeployment(); // ✅ дождаться деплоя
  console.log("✅ Contract deployed at:", await contract.getAddress()); // ✅ получить адрес
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
