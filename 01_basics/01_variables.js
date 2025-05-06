const accountId =144553
let accountEmail="gpgc@gmail.com"
var accountPasswaord="12345"
accountCity="Karak"
let accountState;
// accountId=2  not allowed

/*
prefer not to use var
because of issues in block scope and functional scope
*/

accountEmail="hc@hd@gmail.com"
accountPasswaord="434343"
accountCity="kohat"
console.log(accountId);
console.table([accountId, accountEmail, accountPasswaord, accountCity,accountState]);
