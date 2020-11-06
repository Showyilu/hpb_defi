function sendEth() {
  const Web3 = require('web3');

  const ropsten_web3 = new Web3('https://ropsten.infura.io/v3/54a0353c5af04aef9055f63241e4b226');

  const account1 = '0xf27D21a87650636C6b863637D22D811e0bb18AA5';
  const account2 = '0xa8D1581a8b7AC3BAF132Be9642243c11d104CE5d';

  const privateKey1 = '968a7efb6bc572569d41b48e80789ca28cf2716c6c42e5ad21422d196d831e79';

  const tx = {
    from: account1,
    to: account2,
    gas: ropsten_web3.utils.toHex(21000),
    value: ropsten_web3.utils.toHex(ropsten_web3.utils.toWei('0.1', 'ether'))
  };
  const signPromise = ropsten_web3.eth.accounts.signTransaction(tx, privateKey1);

  signPromise.then((signedTx) => {
    const sentTx = ropsten_web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
    sentTx.on("receipt", receipt => {
      alert("Sent Status: " + receipt.status);
      alert("Hash: " + receipt.transactionHash);
    });
    sentTx.on("error", err => {
      alert("Error is " + err);
    });
  }).catch((err) => {
    alert("Unexpected error is " + err);
  });
}

export default sendEth;