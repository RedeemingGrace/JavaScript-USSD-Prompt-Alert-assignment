// Simulated First Bank USSD Mobile Banking

// Dial the USSD code
var ussdCode = prompt("Please dial the USSD code (*894#):");

if (ussdCode === "*894#") {
  alert("Welcome to *894# banking!");

  // Choose the first option: Quick Banking
  var quickBankingOption = prompt(`
    Quick Banking Menu:
    1. Transfer money
    2. Airtime (self)
    3. Airtime (others)
    4. Enquiries services
    5. Data
    6. Pay bills
    7. Next page
    Please select an option (1/2/3/4/5/6/7):`);

  if (quickBankingOption === "2") {
    // Airtime (self) option selected
    var amount = parseFloat(prompt("Enter amount (minimum NGN50):"));

    if (isNaN(amount) || amount < 50) {
      alert("Invalid amount. Amount must be a number above 50.");
    } else {
      var balance = 500; // Simulated account balance
      balance -= amount;

      alert(`Recharge of NGN${amount.toFixed(2)} successful. The balance is NGN${balance.toFixed(2)}.`);
    }
  } else {
    alert("Option not supported in this example.");
  }
} else {
  alert("Invalid USSD code. Please try again.");
}