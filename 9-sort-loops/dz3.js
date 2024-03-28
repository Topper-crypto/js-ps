function bubbleSort(arr, order) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (order === "asc" ? arr[i] > arr[i + 1] : arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
let numbers = [1, 40, -5, 10, 0];
let sortedAscending = bubbleSort(numbers.slice(), "asc");
let sortedDescending = bubbleSort(numbers.slice(), "desc");

console.log("Отсортированный по возрастанию массив:", sortedAscending);
console.log("Отсортированный по убыванию массив:", sortedDescending);