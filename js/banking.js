const btnDeposit = document.getElementById("deposit-button");
const inputDeposit = document.getElementById("input-deposit");
const inputWithdraw = document.getElementById("input-withdraw");
const btnWithdraw = document.getElementById("withdraw-button");
const totalDeposit = document.getElementById("deposit-total");
const totalBalance = document.getElementById("balance-total");
const totalWithdraw = document.getElementById("withdraw-total");

const calcDepositWithdraw = (totalField, inputField) => {
  totalField.textContent = totalField.textContent * 1 + inputField.value * 1;
  inputField.value = "";
  totalBalance.textContent =
    totalDeposit.textContent * 1 - totalWithdraw.textContent * 1;
};

btnDeposit.addEventListener("click", () => {
  calcDepositWithdraw(totalDeposit, inputDeposit);
});

btnWithdraw.addEventListener("click", () => {
  calcDepositWithdraw(totalWithdraw, inputWithdraw);
});
