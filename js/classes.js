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
      const cryptoCurrencies = data.cryptoCurrencies.coins;

      // Build the <select> from the REST API
      const select = document.getElementById("cryptocurrency");

      cryptoCurrencies.forEach((currency) => {
        // Add the <option>
        const option = document.createElement("option");
        option.value = currency.symbol;
        option.appendChild(document.createTextNode(currency.name));
        select.appendChild(option);
      });
    });
  }

  // Prints an error
  printMessage(message, className) {
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const messagesDiv = document.querySelector(".messages");
    messagesDiv.appendChild(div);

    // Remove the message
    setTimeout(() => {
      document.querySelector(".messages div").remove();
    }, 2000);
  }

  // Prints the result of the valuation / rate
  displayResult(result) {
    console.log(result);
    let HTMLTemplate = "";
    HTMLTemplate += `
    <h3>Result:</h3>
    <p>The price of ${result.name} is ${result.price}</p>`;
    const divResult = document.querySelector("#result");
    divResult.innerHTML = HTMLTemplate;
  }
}

class CryptoAPI {
  // Query the rest API with a currency and a cryptocurrency
  async queryAPI(currency, cryptocurrency) {
    const url = await fetch(`https://coinlib.io/api/v1/coin?key=064ca45432bd1c94&pref=${currency}&symbol=${cryptocurrency}`);

    // Return as json
    const result = await url.json();

    // Return the object
    return {
      result,
    };
  }

  // Get all cryptocurrencies
  async getCryptoCurrenciesList() {
    const url = await fetch("https://coinlib.io/api/v1/coinlist?key=064ca45432bd1c94&pref=BTC&page=1&order=volume_desc");

    // Return this as a json
    const cryptoCurrencies = await url.json();
    // Return the object
    return {
      cryptoCurrencies,
    };
  }
}
