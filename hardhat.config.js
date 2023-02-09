const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const GOERLI_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOERLI_PRIVATE_KEY;

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [privateKey],
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    rinkeby: {
    url: 'https://rinkeby.infura.io/v3/bed4fdcc76bb4978a9a3103ef0946f64',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};

