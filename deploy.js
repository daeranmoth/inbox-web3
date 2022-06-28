const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'duck wrong ring column icon ball alone blur hill switch village year',
  'https://rinkeby.infura.io/v3/32cf1d990f614863a2ba843a12455373'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!']})
    .send({ gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};

deploy();
