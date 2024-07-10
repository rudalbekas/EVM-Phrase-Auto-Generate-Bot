const ethers = require('ethers');

function generateRandomPhrase() {

  const randomWallet = ethers.Wallet.createRandom();


  const mnemonic = randomWallet.mnemonic.phrase;


  return mnemonic;
}


function autoGeneratePhrases(intervalInSeconds) {
  setInterval(() => {
    const phrase = generateRandomPhrase();
    console.log(`Generated Phrase: ${phrase}`);
  }, intervalInSeconds * 1000);
}


autoGeneratePhrases(10);
