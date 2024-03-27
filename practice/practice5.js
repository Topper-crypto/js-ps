function power(pow) {
    return function (num) {
        return num**pow;
    }
}

const powerOfTwo = power(2);
