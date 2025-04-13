// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2003, 4, 17)
let myCreatedDate = new Date("2003-05-17")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
    year: "2-digit",
})