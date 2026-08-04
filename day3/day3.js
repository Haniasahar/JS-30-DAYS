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

string = " I am haniya sahar . "
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

let str = ""

for (let i = 0; i < string.length; i++) { //i=1
    if (string[i] === " ") {
        for (let j = 0; j < i; j++) {
            str += string[j]
        }
        for (let k = i + 1; k < string.length; k++) {
            str += string[k]
        }
        string = str
        str = ""
        // console.log(string)
    }
}

console.log("string_witout_spaces manual", string)

//remove duplicate letters


//anagram
const word1 = "silent" 
const word2 = "listen"
let results = []
let result = false
let used_j = []

if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {//i=3
        for (let j = 0; j < word1.length; j++) {//j=1
            for (let k = 0; k < used_j.length; k++) {//k=2
                if (j === used_j[k]) {
                    j += 1 //try doin it without modifying i j k here "k by yourself"
                    k = -1
                }
            }

            console.log("i", i, "all j's", j)
            if (word1[i] === word2[j]) {
                console.log("hehe j", j)
                used_j.push(j)
                console.log("used j", used_j);
                results.push(true)
                j = word1.length
            }
        }
    }
}


if (results.length === word1.length) {
    result = true
}

console.log(results);
console.log("anagram is", result)
