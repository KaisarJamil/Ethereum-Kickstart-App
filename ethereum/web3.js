import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //we are in server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/e172aeb0757346f6ad6388e9f1479373'
  );
  web3 = new Web3(provider);
}

export default web3;
