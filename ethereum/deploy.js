const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

//unlock accounts and use infura network to use
const provider = new HDWalletProvider(
  'wise pen cattle small scissors very visual ocean across lava siege dream',
  'https://rinkeby.infura.io/v3/e172aeb0757346f6ad6388e9f1479373'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log(accounts);

	console.log(accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: '0x' + compiledFactory.bytecode })
		.send({from: accounts[0]});

		console.log('Contract deployed to', result.options.address);
};

deploy();
