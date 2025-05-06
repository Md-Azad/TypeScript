"use strict";
// learning function
function add(num1, num2) {
    return num1 + num2;
}
const result = add(2, 3);
console.log(result);
// arrow function
const addArrow = (num3, num4) => num3 + num4;
console.log(addArrow(3, 4));
// Object--> function --> method;
const account = {
    name: "Azad",
    balance: 5,
    addBalance(balance) {
        return this.balance + balance;
    }
};
console.log(account.addBalance(5));
const arr = [1, 4, 10];
const newArr = arr.map((ele) => {
    return ele * ele;
});
console.log(newArr);
