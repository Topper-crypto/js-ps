function reverseFilterArray(arr, removeFunc) {
    const filteredArray = [];
    for (const num of arr) {
        if (!removeFunc(num)) {
            filteredArray.push(num);
        }
    }
    return filteredArray;
}


const numbers = [3, 6, 9, 2];


function removeElements(num) {
    return num > 5;
}

const filteredArray = reverseFilterArray(numbers, removeElements);
console.log(filteredArray);