const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;
console.log ('смогу ли я работать?' + (availableHours > projectHours));
console.log('стоимость работ' + projectHours * payRateUSD + '$');