// How to declare object in typescript

const user: {
    firstName: string;
    middleName:string;
    lastName:string;
}={
    firstName:"Md",
    middleName:"Azad",
    lastName: "Hossain"

}
console.log(user);
const user2: {
    firstName: string;
    middleName?:string; //optional type. 
    lastName:string;
}={
    firstName:"Md",
    lastName: "Hossain"

}
console.log(user2);
// for the fixed type;
const user3: {
    readonly firstName: string; // reassign is not possible.
    middleName?:string; //optional type. 
    lastName:string;
    companyName: "programming hero" //for the fixed type. here you will have to give the value "programming hero"
}={
    firstName:"Md",
    lastName: "Hossain",
    companyName:"programming hero"
}
console.log(user3);