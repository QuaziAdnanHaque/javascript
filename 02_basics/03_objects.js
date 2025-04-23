// Object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Adnan",
    "Full name": "Quazi Adnan Haque",
    [mySym]: "myKey1",
    age: 21,
    location: "Kolkata",
    email: "haquequaziadnan@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}
// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "adnan@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "adnanhaque@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
