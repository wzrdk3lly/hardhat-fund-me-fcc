const { run } = require("hardhat");

const verify = async (contractAddresss, args) => {
  console.log("verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddresss,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("already verified!");
    } else {
      console.log(e);
    }
  }
};

module.exports = { verify };
