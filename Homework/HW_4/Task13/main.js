function exchange(sumUAH,currencyValues,exchangeCurrency){
    let targetCurrency = null ;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            targetCurrency = item;
            break;
        }
    }
    if (targetCurrency){
        return sumUAH / targetCurrency.value;
    } else {
        return 'Currency not found'
    }
}
let currencies = [
    {currency: 'USD', value: 25},
    {currency: 'EUR', value: 42}
];

let result = exchange(10000, currencies, 'EUR');
console.log(result);
