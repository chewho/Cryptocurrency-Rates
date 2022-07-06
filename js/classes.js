class UI {
  constructor() {
    this.init();
  }
  init() {
    this.printCryptoCurrencies();
  }
  // Prints the <options> for the form
  printCryptoCurrencies() {
    cryptoAPI.getCryptoCurrenciesList().then((data) => {
      console.log(data);
    });
  }
}

class CryptoAPI {
  // Get all cryptocurrencies
  async getCryptoCurrenciesList() {
    const url = await fetch("api.coincap.io/v2/assets");

    // Return this as a json
    const cryptoCurrencies = await url.json();

    // Return the object
    return {
      cryptoCurrencies,
    };
  }
}
