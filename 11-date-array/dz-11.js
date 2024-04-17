
function processDates(dateStrings) {
    const validDates = [];
    dateStrings.forEach(dateStr => {
        const dateParts = dateStr.split(/[./]/);
        let day, month, year;

        if (dateParts.length === 3) {
            day = parseInt(dateParts[0]);
            month = parseInt(dateParts[1]);
            year = parseInt(dateParts[2]);

           
            if (day <= 31 && month <= 12 && year >= 0) {
                if (day < 10) day = '0' + day;
                if (month < 10) month = '0' + month;
                validDates.push(`${day}/${month}/${year}`);
            }
        }
    });
    return validDates;
}


const dateStrings = ["10.02.22", "11.12.23", "0.13.22", "41.12"];
const processedDates = processDates(dateStrings);
console.log(processedDates);
