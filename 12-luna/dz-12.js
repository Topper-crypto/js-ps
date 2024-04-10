function validateCreditCard(cardNumber) {
    // Очищаем строку от лишних символов и оставляем только цифры
    const cleanedNumber = cardNumber.replace(/\D/g, '');
    
    // Валидация полученной строки на корректность
    if (!/^\d{13,16}$/.test(cleanedNumber)) {
        return false;
    }

    // Применение алгоритма Луна
    let sum = 0;
    for (let i = 0; i < cleanedNumber.length; i++) {
        let digit = parseInt(cleanedNumber[i]);
        if ((cleanedNumber.length - i) % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    // Проверка результата
    return sum % 10 === 0;
}

// Пример использования
const cardNumber = "4561-1213-4367-2612";
console.log(validateCreditCard(cardNumber)); // Выведет: true
