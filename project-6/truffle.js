const HDWallet = require('@truffle/hdwallet-provider');
mnemonic = "worry question use rocket outer bubble feature gas arrive leave device install";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    // ganache-cli net
    gnet: {
      host: "127.0.0.1",
      port: 8889,
      network_id: "*", // Match any network id
    },
    // rinkeby net
    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/9edd3d8485664a4ba5265cc89b8fff56`),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
      docker: true
    }
  }
};