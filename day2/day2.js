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

//remove duplicates
//common elements

//missig no.
let arr = [1,4,9,"x",25]
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

function arithmetic_missing(arr) {
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

        if (arr[0] === "x") {
            missing_no = arr[1] - diff
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === "x") {
                    missing_no = arr[i - 1] + diff
                }
            }
        }
        console.log("hoho",missing_no)
    }
}

function geometric_missing(arr) {
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

        if (arr[0] === "x") {
            missing_no = arr[1] / ratio
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === "x") {
                    missing_no = arr[i - 1] * ratio
                }
            }
        }
    }
}

function square_missing(arr) {
    let rooted_array = []

    for (let i = 0; i < arr.length - 1; i++) {
        rooted_array.push(Math.sqrt(arr[i]))
    }

    console.log("rooted_array", rooted_array);

    arithmetic_missing(rooted_array)
    geometric_missing(rooted_array)

    missing_no = missing_no * missing_no
    //[1,2,NaN,4,5]
    // arr=rooted_array
}

arithmetic_missing(arr)
geometric_missing(arr)
square_missing(arr)

console.log("missing no:", missing_no)
