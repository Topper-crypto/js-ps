function convertCurrency(amount, fromCurrency, toCurrency) {
    let exchangeRate;
    fromCurrency = fromCurrency.toLowerCase();
    toCurrency = toCurrency.toLowerCase();
    
    switch (fromCurrency + '_' + toCurrency) {
        case 'rub_usd':
            exchangeRate = 0.013;
            break;
        case 'usd_rub':
            exchangeRate = 75.0;
            break;
        case 'rub_eur':
            exchangeRate = 0.012;
            break;
        case 'eur_rub':
            exchangeRate = 85.0;
            break;
        case 'usd_eur':
            exchangeRate = 0.92;
            break;
        case 'eur_usd':
            exchangeRate = 1.09;
            break;
        default:
            return 0;
    }

  
    const convertedAmount = amount * exchangeRate;
    return convertedAmount;
}


console.log(`Примерно $1000 рублей к долларам вернет $${convertCurrency(1000, 'rub', 'usd')}`);

