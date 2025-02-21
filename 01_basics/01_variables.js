const accountId = 144553
let accountEmail = "adnan@google.com"
var accountPassword = "12345"
accountCity = "Kolkata" // prefer not to use
let accountState;
// accountId = 2 not allowed

accountEmail = "abc@hotmail.com"
accountPassword = "21212"
accountCity = "Jaipur"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])