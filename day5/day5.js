let obj = {
    name: "Ali",
    age: 20,
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
}

let key = "city"
console.log("obj", obj.name, obj["age"], obj["address"][key])

//count properties
let prop = 0
for (let key in obj) {
    prop += 1
}
console.log("no of props", prop)

//object keys
let arr = []
for (let key in obj) {
    arr.push(key)
}
console.log("obj keys", arr);

//object values
let array = []
for (let key in obj) {
    array.push(obj[key])
}
console.log("obj values", array);

//nested obj access

// let obj = {
//     name: "Ali",
//     age: 20,
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }

for (let key in obj["address"]) {
    console.log("nested obj", obj["address"][key]);
}

//student marks
obj = {
    name: "Ali",
    math: 90,
    english: 80,
    science: 70
}
let total = 0
let average = 0
let properties = 0

for (let key in obj) {
    if (typeof obj[key] === "number") {
        total += obj[key]
        properties += 1
    }
}

console.log("total", total)
console.log("average", total / properties)

//merge objects
obj = { name: "Ali" }
let addition = {
    age: 20,
    edu: "inter"
}

for (let key in addition) {
    obj[key] = addition[key]
}
console.log(obj);

//clone object
let copied = {}

for (let key in obj) {
    copied[key] = obj[key]
}
copied.lang = "urdu"
console.log("copied", copied);

console.log("while the original remains", obj);

//shopping cart total
obj = [
    { name: "Pen", price: 20, qty: 2 },
    { name: "Book", price: 100, qty: 1 }
]
let shop_total = 0

for (let i = 0; i < obj.length; i++) {
    shop_total += obj[i].price * obj[i].qty
}
console.log("shopping total", shop_total);

//inventory
obj = [
    { name: "Pen", stock: 0 },
    { name: "Pencil", stock: 1 },
    { name: "Book", stock: 0 },
    { name: "Ink", stock: 0 }
]
for (let i = 0; i < obj.length; i++) {
    if (obj[i].stock === 0) {
        console.log(obj[i].name, "--> out of stock")
    }
    else {
        console.log(obj[i].name, "--> in stock")
    }
}

//deep vs shallow

const person = {}
person.name = "Ali"

person.address = {}
person.address.city = "Karachi"

console.log("person", person)

//SHALLOW COPY

// const copy = {}
// for (let key in person) {
//  copy[key]=person[key]
// }

// copy.name = "Ahmed"
// copy.address.city = "Lahore"

// console.log("copy", copy);
// console.log("person", person)

//DEEP COPY

// const person = {
//   name: "Ali",
//   address: {
//     city: "Karachi"
//   }
// };
const deep_copy = {}
for (let key in person) {
    console.log("imp", key, person[key]);
    console.log("typeof", person[key], typeof person[key])

    if (typeof person[key] === "object") {
        //create another obj
        //copy its props too
        let abc = person[key]
        console.log("abc", abc)
        for (let new_key in abc) {
            console.log("new_key", new_key);
            console.log("value", abc[new_key])
            deep_copy[key] = abc
            console.log(deep_copy);
        }
    }
    else {
        deep_copy[key] = person[key]
        console.log("runnin for", person[key], deep_copy);

    }
}

console.log("deep copy", deep_copy);
console.log("person", person)

deep_copy.name = "Ahmed"
deep_copy.address.city = "Lahore"

//for in loop mai const or let key se kia changes hotey ??