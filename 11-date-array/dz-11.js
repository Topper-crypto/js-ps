function validateDate(dateStr) {
    const match = dateStr.match(/^(\d{2})[./](\d{2})[./](\d{2})$/);
    if (match) {
        const [, day, month, year] = match.map(Number);
        if (1 <= month && month <= 12 && 1 <= day && day <= 31) {
            if ([4, 6, 9, 11].includes(month) && day > 30) {
                return false;
            } else if (month === 2) {
              
                if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                    if (day > 29) {
                        return false;
                    }
                } else if (day > 28) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

function processDates(dateArray) {
    const processedDates = [];
    for (const dateStr of dateArray) {
        if (validateDate(dateStr)) {
            
            const [day, month, year] = dateStr.split(/[./]/).map(Number);
            processedDates.push(`${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year.toString().padStart(2, '0')}`);
        }
    }
    return processedDates;
}

const dates = ["10.02.22", "11.12.23", "0.13.22", "41.12", "02/29/24", "02/30/24"];
const processedDates = processDates(dates);
console.log(processedDates);
