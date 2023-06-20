export default function CountCoins(moneyAmount) {
  if (isNaN(moneyAmount)) {
    return "Please enter a number"
  };
  if (moneyAmount === 0) {
    return "";
  }
  else if (moneyAmount / 0.25 >= 1) {
    const quarters = Math.floor(moneyAmount / 0.25);
    return `${quarters} quarters ` + CountCoins(moneyAmount - quarters * 0.25);
  }
  else if (moneyAmount / 0.10 >= 1) {
    const dimes = Math.floor(moneyAmount / 0.10);
    return `${dimes} dimes ` + CountCoins(moneyAmount - dimes * 0.10);
  }
  else if (moneyAmount / 0.05 >= 1.00) {
    const nickels = Math.floor(moneyAmount / 0.05);

    return `${nickels} nickels ` + CountCoins(moneyAmount - nickels * 0.05);
  }
  else if (moneyAmount / 0.01 >= 1) {
    const pennies = Math.round(moneyAmount / .01);
    return `${pennies} pennies` + CountCoins(moneyAmount - pennies * 0.01);
  }
  else {
    return "";
  }
}

// Closure function
export const CoinCountClosure = (moneyAmount) => {
  const quarters = Math.floor(moneyAmount/0.25);
  const dimes = Math.floor((moneyAmount - quarters * 0.25)/0.1);
  const nickels = Math.floor(((moneyAmount - (quarters * 0.25) - (dimes * 0.1)))/0.05);
  const pennies = Math.round((moneyAmount - (quarters * 0.25) - (dimes * 0.1) - (nickels * 0.05))/0.01);
  return function totalCount(){
    return `${quarters} quarters ${dimes} dimes ${nickels} nickels ${pennies} pennies`;
  }
}