const mysym = "Key1";

const Jsuser = {
    name:"Shreyas Borse",
    "fullname":"Shreyas Girish Borse",
    age: 18,
    email: "shreyasborse9332",
    isLoggedIn: false,
    lastLoginDays: ["Mondays","Tuesday"],
    [mysym]: "myKey1"
}

console.log(Jsuser["fullname"]);
console.log(typeof Jsuser[mysym]);