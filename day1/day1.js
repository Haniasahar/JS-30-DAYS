// count occurrences
let array = [1, 2, 3, 4, 5, 94, 15, 4, 8, 7, 100]

let target = 4
let occur = 0

target = 7

for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
        occur = occur + 1
    }
}
console.log("occurrences", occur);

//second largest
let largest = array[0]
let second_largest = array[0]

for (let i = 1; i < array.length; i++) {
    if (largest < array[i]) {
        largest = array[i]
    }
}
console.log("largest", largest)

for (let i = 1; i < array.length; i++) {
    if (array[i] < largest && second_largest < array[i]) {
        second_largest = array[i]
    }
}

console.log("second largest", second_largest)