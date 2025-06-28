let price = 19.5;

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const purchaseBtn = document.getElementById('purchase-btn');
const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');

purchaseBtn.addEventListener('click', () => {
  const cash = parseFloat(cashInput.value);

  if (isNaN(cash)) {
    alert('Please enter a valid number');
    return;
  }

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  let change = Math.round((cash - price) * 100) / 100;

  const currencyUnits = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1.00,
    'FIVE': 5.00,
    'TEN': 10.00,
    'TWENTY': 20.00,
    'ONE HUNDRED': 100.00
  };

  const sortedCid = [...cid].reverse();
  const changeArray = [];
  let remainingChange = change;

  for (let [unit, amount] of sortedCid) {
    const unitValue = currencyUnits[unit];
    let used = 0;

    while (remainingChange >= unitValue && amount > 0) {
      remainingChange = Math.round((remainingChange - unitValue) * 100) / 100;
      amount = Math.round((amount - unitValue) * 100) / 100;
      used = Math.round((used + unitValue) * 100) / 100;
    }

    if (used > 0) {
      changeArray.push([unit, used]);
    }
  }

  const totalCid = Math.round(cid.reduce((sum, curr) => sum + curr[1], 0) * 100) / 100;

  if (remainingChange > 0) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (Math.round(change * 100) / 100 === totalCid) {
    let changeString = changeArray.map(item => `${item[0]}: $${item[1]}`).join(' ');
    changeDue.textContent = `Status: CLOSED ${changeString}`;
  } else {
    let changeString = changeArray.map(item => `${item[0]}: $${item[1]}`).join(' ');
    changeDue.textContent = `Status: OPEN ${changeString}`;
  }
});
