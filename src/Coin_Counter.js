export default function CountCoins(moneyAmount) {
  if (isNaN(moneyAmount)) {
    return "Please enter a number"
  };
  if (moneyAmount === 0) {
    return "";
  }
  else if (moneyAmount / 0.25 >= 1) {
    const quarters = Math.floor((moneyAmount * 100) / 25);
    console.log(quarters);
    return `${quarters} quarters ` + CountCoins(moneyAmount - quarters * 0.25);
  }
  else if (moneyAmount / 0.10 >= 1) {
    const dimes = Math.floor((moneyAmount * 100) / 10);
    console.log(dimes);
    return `${dimes} dimes ` + CountCoins(moneyAmount - dimes * 0.10);
  }
  else if (moneyAmount / 0.05 >= 1.00) {
    const nickels = Math.floor((moneyAmount * 100) / 5);
    console.log(nickels);
    return `${nickels} nickels ` + CountCoins(moneyAmount - nickels * 0.05);
  }
  else if (moneyAmount / 0.01 >= 1) {
    const pennies = Math.round(moneyAmount / .01);
    console.log(pennies);
    return `${pennies} pennies` + CountCoins(moneyAmount - pennies * 0.01);
  }
  else {
    return "";
  }
}

export function CoinCount(coin){
  return function(money){
  }
}