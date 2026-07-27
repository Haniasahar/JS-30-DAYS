let array = [1, 2, 3, 4, 5, 94, 15, 4, 8, 7, 0]
console.log("original array", array)

//copy array
let copied_array = []
for (let i = 0; i < array.length; i++) {
    copied_array[i] = array[i]
}

console.log("copied_array", copied_array);


//reverse array
let length = copied_array.length;
for (let i = 0; i < copied_array.length / 2; i++) {
    let abc = copied_array[i]
    copied_array[i] = copied_array[length - i - 1]
    copied_array[length - i - 1] = abc
}

console.log("reversed_array", copied_array)

//merge arrays
let arr1 = [1, 2,]
let arr2 = [3, 4, 5]

let new_array = arr1

for (let i = 0; i < arr2.length; i++) {
    new_array.push(arr2[i])
}

console.log(new_array);

//


//missig no.
// let arr = [4, 16, "x", 256, 1024]
// let arr = ["x", 1, 9, 25, 49, 81, 121]
// let arr = ["x", 8, 27, 64, 125, 216]
let arr = [3, 9, 27, 81, "x"]
console.log("original array", arr)
let missing_no = null

function removeNaN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i])) {
            for (let j = i; j < arr.length; j++) {
                arr[j] = arr[j + 1]
            }
            arr.length--
            i--
        }
    }
}

function arithmetic_missing(arr, arr_original) {
    let diff_array = []
    let diff = null

    for (let i = 0; i < arr.length - 1; i++) {
        diff_array.push(arr[i + 1] - arr[i])
    }

    console.log("diff_array", diff_array);
    removeNaN(diff_array)
    console.log("new diff_array", diff_array)

    if (diff_array[0] === diff_array[diff_array.length - 0 - 2] &&
        diff_array[diff_array.length - 0 - 2] === diff_array[diff_array.length - 0 - 1]) {
        diff = diff_array[0]
        console.log("diff", diff);

        if (arr_original[0] === "x") {
            missing_no = arr[1] - diff
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (arr_original[i] === "x") {
                    missing_no = arr[i - 1] + diff
                }
            }
        }
        console.log("arithmetic missin", missing_no)
        return true
    }
    else { return }
}

function geometric_missing(arr, arr_original) {
    let ratio_array = []
    let ratio = null

    for (let i = 0; i < arr.length - 1; i++) {
        ratio_array.push(arr[i + 1] / arr[i])
    }

    console.log("ratio_array", ratio_array);
    removeNaN(ratio_array)
    console.log("new ratio_array", ratio_array)

    if (ratio_array[0] === ratio_array[ratio_array.length - 2] &&
        ratio_array[ratio_array.length - 2] === ratio_array[ratio_array.length - 1]) {
        ratio = ratio_array[0]
        console.log("ratio", ratio);

        if (arr_original[0] === "x") {
            missing_no = arr[1] / ratio
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (arr_original[i] === "x") {
                    missing_no = arr[i - 1] * ratio
                }
            }
        }
        console.log("geometric missin", missing_no)
        return true
    }
    else { return }
}

function square_missing(arr) {
    let rooted_array = []
    let condition_for_square_missing = true

    for (let i = 0; i < arr.length; i++) {
        rooted_array.push(Math.sqrt(arr[i]))
    }

    console.log("rooted_array", rooted_array);

    let rooted_array_no_NaN = []
    //copying the rooted_array
    for (let i = 0; i < rooted_array.length; i++) {
        rooted_array_no_NaN[i] = rooted_array[i]
    }
    removeNaN(rooted_array_no_NaN)
    console.log("rooted_array_no_NaN", rooted_array_no_NaN)
    console.log("rooted array is same", rooted_array)

    for (let i = 0; i < rooted_array_no_NaN.length; i++) {
        if (rooted_array_no_NaN[i] % 1 !== 0) {
            condition_for_square_missing = false

        }
    }
    console.log("condition", condition_for_square_missing)

    if (condition_for_square_missing) {
        arithmetic_missing(rooted_array, arr)
        missing_no = missing_no * missing_no
        return true
    }
    else { return }
}

function cube_missing(arr) {
    let rooted_array = []
    let condition_for_cube_missing = true

    for (let i = 0; i < arr.length; i++) {
        rooted_array.push(Math.cbrt(arr[i]))
    }

    console.log("rooted_array", rooted_array);

    let rooted_array_no_NaN = []
    //copying the rooted_array
    for (let i = 0; i < rooted_array.length; i++) {
        rooted_array_no_NaN[i] = rooted_array[i]
    }
    removeNaN(rooted_array_no_NaN)
    console.log("rooted_array_no_NaN", rooted_array_no_NaN)
    console.log("rooted array is same", rooted_array)

    for (let i = 0; i < rooted_array_no_NaN.length; i++) {
        if (rooted_array_no_NaN[i] % 1 !== 0) {
            condition_for_cube_missing = false

        }
    }
    console.log("condition", condition_for_cube_missing)

    if (condition_for_cube_missing) {
        arithmetic_missing(rooted_array, arr)
        missing_no = missing_no * missing_no * missing_no
    }
}

arithmetic_missing(arr, arr) ||

    (geometric_missing(arr, arr) || square_missing(arr) || cube_missing(arr))

console.log("missing no:", missing_no)
