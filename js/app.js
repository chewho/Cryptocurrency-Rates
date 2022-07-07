const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Variables
const form = document.getElementById("form");

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Read currency
  const currencySelect = document.getElementById("currency").value;
  // Read cryptocurrency
  const cryptoCurrencySelect = document.getElementById("cryptocurrency").value;

  // Validate the <select>
  if (currencySelect === "" || cryptoCurrencySelect === "") {
    // Display an error
    ui.printMessage("All the fields are mandatory");
  } else {
    // Query the rest API
    cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect).then((data) => {
      console.log(data);
    });
  }
});
