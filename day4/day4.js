let array = [1, 3, 0, 2]

//pair sum
//fix it for repeating same pairs
let target = 3

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length && j !== i; j++) {
        if (array[i] + array[j] === target) {
            console.log(array[i], "+", array[j], "=", target)
        }
    }
}

//bubble sort (apne barabr sey compare kro till the end)

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}

console.log("bubble sort", array);

//selection sort (find the minValue and exchange)

array = [4, 2, 0, 1]

for (let i = 0; i < array.length - 1; i++) {

    let minValue = array[i]
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {
        if (minValue > array[j]) {
            minValue = array[j]
            minIndex = j
        }
    }

    console.log(minValue, minIndex);

    if (i !== minIndex) {
        let temp = array[i]
        array[i] = minValue
        array[minIndex] = temp
    }
}

console.log("selection sort", array)

//cols of valid and max_cols of invalid matrix
function maxCols(array) {
    let max_cols = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; array[i][j] !== undefined; j++) {
            if (max_cols < j + 1) {
                max_cols = j + 1
            }
        }
    }
    return max_cols
}

function isValid(array, max_cols) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][max_cols - 1] === undefined) {
            return false
        }
    }
    return true
}

//matrix sum
let arr = [
    [1, 5, 6],
    [4, 0, 0]
]

let sum = 0
let cols = maxCols(arr)
let valid = isValid(arr, cols)

console.log("rows", arr.length, "max-columns", cols, "valid?", valid)

if (valid === false) {
    console.log("invalid matrix")
    sum = null
}
else {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < cols; j++) {
            sum += arr[i][j]
        }
    }
}

console.log("matrix sum", sum);

//creating desired matrix
let matrix = []

for (let i = 0; i < 2; i++) {
    matrix[i] = []
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = 0
    }
}

matrix = []
let num = 0

for (let i = 0; i < 2; i++) {
    matrix[i] = []
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = num + 1
        num = matrix[i][j]
    }
}

//matrix transpose
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

    // [1, 2, 3, 0, 1],
    // [4, 5, 6, 2, 3],
    // [7, 8, 9, 4, 5],
    // [6, 7, 1, 9, 0],
    // [1, 2, 3, 2, 2]
]

let tr_arr = []
let columns = maxCols(arr)
let validation = isValid(arr, columns)

if (validation === false) {
    console.log("invalid matrix, can't tranpose");
}
else {
    for (let i = 0; i < columns; i++) {
        tr_arr[i] = []
        for (let j = 0; j < arr.length; j++) {
            tr_arr[i][j] = arr[j][i]
        }
    }
}

console.log("transposed", tr_arr);

//pattern print

//square
function build_row(key, no) {
    let row = ""
    for (let i = 0; i < no; i++) {
        row += key
    }
    return row
}

let number = 4
let key = "*"

for (let i = 0; i < number; i++) {
    console.log(build_row(key, number))
}

//triangle
for (let i = 0; i < number; i++) {
    console.log(build_row("+", i + 1));
}

//pyramid
let no_of_keys = 1

for (let i = 0; i < number; i++) {
    console.log(build_row(" ", number - i - 1) + build_row(key, no_of_keys));
    no_of_keys += 2
}

//table

let table_of = 9

for (let i = 1; i <= 10; i++) {
    console.log(table_of, "*", i, "=", table_of * i)
}

//spiral print
function spiralPrint(arr) {
    let output = ""
    let arr_cols = maxCols(arr)
    let arr_valid = isValid(arr, arr_cols)

    let arr_inside = []

    if (arr_valid === false) {
        console.log("invalid matrix")
        output = null
    }
    else {
        for (let i = 0; i < arr.length; i++) { //0,1,2,3,4
            output += arr[0][i]
        }
        for (let j = 1; j < arr_cols - 1; j++) { //1,2,3
            output += arr[j][arr_cols - 1]
        }
        for (let j = 0; j < arr_cols; j++) { //0,1,2,3,4
            output += arr[arr.length - 1][arr_cols - j - 1]
        }

        for (let j = arr_cols - 2; j > 0; j--) { //3,2,1
            output += arr[j][0]
        }

        for (let i = 1; i < arr.length - 1; i++) { //1,2
            output += arr[i][1]
            arr_inside[i - 1] = []
            for (let j = 1; j < arr_cols - 1; j++) { //1,2
                arr_inside[i - 1][j - 1] = arr[i][j]
            }
        }
    }
    return [output, arr_inside]
}

arr = [
    // [5]

    [1, 2],
    [3, 4]

    // [1, 2, 3],
    // [4, 5, 6],
    // [7, 8, 9]

    // [1, 2, 3, 0],
    // [4, 5, 6, 0],
    // [7, 8, 9, 0],
    // [1, 2, 1, 1]

    // [1, 2, 3, 0, 1],
    // [4, 5, 6, 2, 3],
    // [7, 8, 9, 4, 5],
    // [6, 7, 1, 9, 0],
    // [1, 2, 3, 2, 2]
]

let [output, arr_inside] = spiralPrint(arr)
console.log("arr_inside", arr_inside)
console.log("output", output)

arr = arr_inside
console.log("arr now", arr);

if (arr_inside.length > 1) {
    let [new_output, new_arr_inside] = spiralPrint(arr)
    console.log("hehe")
    output += new_output
}
console.log("output", output)