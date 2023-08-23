const accountId = 125552;
let  accountEmail = "utechh@gmail.com";
var accountPassword = "12345";
accountCity = "Shahdol";
let accountState;

// accountId = 2; // not allowed

accountEmail = "ut@22.com";
accountPassword = "54321";
accountCity = "Anpr";

console.log(accountId);

/* Prefer not to use var because
of issue in block and functional block */

console.table([accountEmail, accountPassword, accountCity, accountState]);