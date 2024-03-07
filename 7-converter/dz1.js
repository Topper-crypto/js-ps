function converter(amount, type) {
    let rur;
    if (type === 'usd') {
        rur = 90 * amount;
    }
    else if (type === 'de') {
        rur = 80 * amount;
    }
    else if (type === 'ch') {
        rur = 70 * amount;
    }
    else {
        console.log('тз хз');
    }
    return rur;
}

console.log(converter(900, 'па'));
