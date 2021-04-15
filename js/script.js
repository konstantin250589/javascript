'use strict';

const arr = [1, 24, 15, 8, 5];
arr.sort(compareNub);
console.log(arr);

function compareNub(a, b) {
    return a - b;
}
arr[99] = 0;

console.log(arr.length);
console.log(arr);
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

    
arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt('', '');
const product = str.split(", ");
product.sort();
console.log(product.join("; "));
