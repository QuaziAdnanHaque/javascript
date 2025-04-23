// singleton

 const tinderUser = new Object() //singleton
tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn =  false

// const tinderUser = {}// non singleton
//  console.log(tinderUser);

const regularUser = {
    email: "john.doe@example.com",
    fullname:{
        userFullName: {
            firstName: "John", 
            lastName: "Doe"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2 }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "user1@example.com"
    },
    {
        id: 2,
        email: "user1@example.com"
    },
    {
        id: 3,
        email: "user1@example.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));
