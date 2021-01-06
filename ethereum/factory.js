import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xEc59204076A09743035075eD85567Cdb95614f53'
);

export default instance;
