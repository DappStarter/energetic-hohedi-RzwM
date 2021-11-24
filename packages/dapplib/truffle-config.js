require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million public hunt drip flip sponsor'; 
let testAccounts = [
"0x2a3ef1a17371776a5b4869a47787643420cd9a18c3258f79d17024ec1724dddb",
"0x9777d82c0741c503cae71385f07d86fcf06ba274ed3fcfa2596c9324a32efd58",
"0xb137ab452c76e01f8002984a58ee610a6161a0344353a0f128dd6de6ba1ed020",
"0x42cede3cda18550f291f4a123ac84e5989477359c63adc0b2397c585bd82f9c3",
"0x781911ad16265f835aaea2eb8f68d6c4057aeb56ab4de075218bc5b31a7668b3",
"0x5ebca2501e2ca89493657dcecc4f084f9888ce1275410de9b9116e85a676cd0b",
"0xd481b52130edf61dc1e25f5d30e29775a4e65b86e8338b4646871605a01dd213",
"0x1b02e4b03b5f5753386e3f1fa2f272e1a0e4397e03df2361f41a35c7b5009d48",
"0xe086198c4fd8c4361a931ead2ac07bc6f04ffa3b15c74ad0e5ad1075ecd4d8e8",
"0x2114a72058c3f6a416e9c4c12104d1ac72d7a1548e0b828816dfaeefacde6ded"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


