//common elements
let arr3 = [1, 2, 3, 4, 5, 4, 7, 7]

let common_elements = []
for (let i = 0; i < arr3.length; i++) {

    for (let j = 0; j < arr3.length; j++) {
        if (i !== j && arr3[i] === arr3[j]) {
            common_elements.push(arr3[i])
        }
    }
}
console.log("common elements", common_elements);

//[4,4,7,7]
// let arr3 = [1, 2, 3, 4, 5, 4, 7, 7]

//  [1, 2, 3, 5, 4, 7, 7]

common_elements = [4, 7]
//remove duplicates
for (let i = 0; i < arr3.length; i++) { //i=3
    for (let j = 0; j < common_elements.length; j++) {
        if (arr3[i] === common_elements[j]) {
            for (let k = i; k < arr3.length; k++) {
                arr3[k] = arr3[k + 1]
            }
            // arr3.length--
            // i--
            console.log(i,);
        }
    }
}

console.log("removing duples", arr3);

// result: [1,2,3,4,5,7]


//reverse string 
let string = " level hai bhai ka "
let reversed = ""

//the array reverse logic dont apply to strings , instead do . split("") and then apply and then .join("")
for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i] ///means reversed=reversed+string[i]
}

console.log("reversed string", reversed)

//palindrome
if (string === reversed) {
    console.log("the string is palindrome")
}
else {
    console.log("Sorry guyz; palindrome failed");
}

//count vowels
const vowels = "aeiou"
let no_of_vowel = 0

for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < 5; j++) {
        if (string[i] === vowels[j]) {
            no_of_vowel += 1
        }
    }
}

console.log("no of vowels =", no_of_vowel);

//trimming first and last space

let string_copied = string
let trim_str = ""

if (string[string.length - 1] === " ") {
    let trim_array = []

    for (let i = 0; i < string.length - 1; i++) {
        trim_array.push([string[i]])
    }

    trim_str = trim_array.join("")
    string_copied = trim_str
    trim_str = ""

    // trim_str.length -- // cant do this bcz strings are immutable, converted to arrays to make them mutable
}

if (string_copied[0] === " ") {
    for (let i = 0; i < string_copied.length - 1; i++) {
        trim_str += string_copied[i + 1]
    }
}

console.log("trimmed string:", trim_str)

//count words
let no_of_space = 0

for (let i = 0; i < trim_str.length; i++) {
    if (trim_str[i] == " ") {
        no_of_space += 1
    }
}

console.log("no of words =", no_of_space + 1);

//capitalize   // every 1st letter 
let new_string = string
let upper_str = ""

if (new_string[0] !== " ") {
    upper_str = new_string[0].toUpperCase()
    for (let k = 1; k < new_string.length; k++) {
        upper_str += new_string[k]
    }
    new_string = upper_str
    upper_str = ""
    console.log("index 0 capitalized", new_string);
}

for (let i = 0; i < new_string.length; i++) {
    if (new_string[i] === " " && i !== new_string.length - 1) { //6

        for (let j = 0; j <= i; j++) {
            upper_str += new_string[j]
        }

        upper_str += new_string[i + 1].toUpperCase()

        for (let k = i + 2; k < new_string.length; k++) {
            upper_str += new_string[k]
        }

        new_string = upper_str
        upper_str = ""
        // console.log(i, "new string", new_string)
    }
}

console.log("Every 1st letter capitalized", new_string)

//longest word
let word = ""
let words = []
let value_of_i = -1

if (string[0] === " ") {
    value_of_i = 0
}

for (let i = 1; i < string.length; i++) {
    if (string[i] === " ") {
        for (let j = value_of_i + 1; j < i; j++) {
            word += string[j]
        }
        value_of_i = i
        // console.log("word", word)
        words.push(word)
        word = ""
    }
}

if (string[string.length - 1] !== " ") {
    for (let k = value_of_i + 1; k < string.length; k++) {
        word += string[k]
    }
    words.push(word)
}

console.log("words", words)
console.log("no of words", words.length)

let longest = words[0]
for (let i = 1; i < words.length; i++) {
    if (longest.length < words[i].length) {
        longest = words[i]
    }
}

console.log("longest word:", longest)

//character frequency
string = "level"
let char_obj = {}
let count = 0

for (let i = 0; i < string.length; i++) { //string[3]="e"
    if (string[i] !== " ") {
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j]) {
                count += 1
            }
        }
        char_obj[string[i]] = count
        count = 0
    }
}

console.log("char obj", char_obj);

//is m agr level hai to last waley l ke liye again condition ja ri , even answer thk h but .. so handle this

//remove spaces

// string = "I am haniya sahar." //i=17 //l=18

// for (let i = 0; i < string.length; i++) { //i=1
//     if (string[i] === " ") {
//         for (let j = i; j < string.length - 1; j++) {
//             string[j] = string[j + 1]
//         }
//         string.length--
//         console.log("hehe", string)
//     }
// }

// console.log("string_witout_spaces", string)

// not gonna work bcz elements of strings cant be changed like arrays, so must change it to an array and then ...

string = "I am haniya sahar."
let array = string.split("")

for (let i = 0; i < array.length; i++) { //i=1
    if (array[i] === " ") {
        for (let j = i; j < array.length - 1; j++) {
            array[j] = array[j + 1]
        }
        array.length--
    }
}

let string_witout_spaces = array.join("")
console.log("string_witout_spaces", string_witout_spaces)

//but better practice for dsa is (without using methods)

string = "I am haniya sahar." //i=17 //l=18
let str = ""

for (let i = 0; i < string.length; i++) {
if(string[i]===" "){
    
}
}