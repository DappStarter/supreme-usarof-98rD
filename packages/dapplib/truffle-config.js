require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note still history include kite metal gauge'; 
let testAccounts = [
"0x78774903f0708e30527a47a1c85ffd2d86a098c510817b69b2b3bf352f05c2bf",
"0x842c6ef35df1cb0084575d8832db715cf61befa6e724d3efe1ff4da846c46a2e",
"0x526e1e56c98c9d1ba57a4833d222d92c28e8325bb52082a05e6ae6f985521db7",
"0xab6ae309fb570a170f3929041ec3250e7700502cdcfaafb09a07f2250a232e5a",
"0xc64f6ed080df9e44451dd4b5baefa8988ea69b083022669c56413d06deb14395",
"0xce5bbb0b933911e7803d22b1e17b7740252ea8ddffd6bc8bcfa52780508b26be",
"0x899a641b26273c7c60f976e9a4818573e253f72d6e62e0813ee0d741905201bc",
"0x8b9df0fcaba166e716c5978a7dbd54fd7ba4277f066706e1ebc7fe3343bf901c",
"0xd169cf2739211568b5d842e889496ced3da3a94f276772696833ce9e8a0105cd",
"0xf687bd5571143e494631ff56583b80df4d7cc1dda68ff8701b40e2dda046e00d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

