function accountBalance() {
  const Web3 = require('web3');

  web3 = new Web3("https://mainnet.infura.io/v3/54a0353c5af04aef9055f63241e4b226");

  // Read account balance
  const account = "0xbd094BcD41A7385281698ea83a24224749DE07bE";

  web3.eth.getBalance(account, (err, wei) => {
    alert("Account balance: " + web3.utils.fromWei(wei, 'ether'));
  })
}

export default accountBalance;