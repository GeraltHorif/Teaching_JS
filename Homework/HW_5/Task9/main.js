const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const targetCurrency = currencyValues.find(item => item.currency === exchangeCurrency);
    if (targetCurrency) {
        return sumUAH / targetCurrency.value;
    }
        return 'Currency not found'
};

const currencies = [
    {currency: 'USD', value: 25},
    {currency: 'EUR', value: 42}
];


let result = exchange(10000, currencies, 'EUR');
console.log(result);
