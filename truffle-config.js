const HDWalletProvider = require('@truffle/hdwallet-provider');

// Replace this with your own 12-word mnemonic
const mnemonic = 'question online runway usage tired laundry walk sun boat notice slice aim';

module.exports = {
  networks: {
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rpc.ankr.com/polygon_mumbai'),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  //replace with your own api key
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    polygonscan: 'S1VXKDQCP4P2VXAK9Q8B46K71TFP9WF692' // Go to Polygonscan -> Sign in/ Sign up and go to API keys and create a new API key
  },
  compilers: {
    solc: {
      version: "0.8.8"
    }
  }
};