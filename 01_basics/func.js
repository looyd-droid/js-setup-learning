// function addno(num1,num2){
//  console.log(num1+num2);
// }

// addno(3,4);

function addno2(num3,num4){
    let result= num3+num4;

    return result;
    //console.log(result); // this line will not execute because it is after the return statement
}
const result=addno2(5,6);
console.log("result:", result);

function loggedinusername(username){
    return`${username} just loggedIn`;

}

console.log(loggedinusername("Shreyas"));