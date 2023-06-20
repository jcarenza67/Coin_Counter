import CountCoins from './../src/Coin_Counter.js';

describe('CountCoins', () => {
  test('should return correct amount of quarters when given dollar amount.', () => {
    const quarterCount = CountCoins(3.00);
    expect(quarterCount).toEqual('12 quarters ');
  });

  test('Should return amount of quarters and dimes of money amount given', () => {
    const amountDimes = CountCoins(3.70);
    expect(amountDimes).toEqual('14 quarters 2 dimes ');
  });

  test("Should return amount of quarters, dimes and nickels of given an amount divisible by .05, but not by .10 or 1", () => {
    const amountNickels = CountCoins(5.15);
    expect(amountNickels).toEqual("20 quarters 1 dimes 1 nickels ")
  });

  test("Should return amount of quarters, dimes, nickels and pennies of given an amount divisible by .01, but not by .05, .10 or 1", () => {
    const amountPennies = CountCoins(5.18);
    expect(amountPennies).toEqual("20 quarters 1 dimes 1 nickels 3 pennies")
  });

})
