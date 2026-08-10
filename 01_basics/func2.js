//rest operator
function calculatemycartvalue(val1 ,val2, ...num1){
return num1

}
console.log(calculatemycartvalue(200,300,400,500));

const user = {
    username : 'shreyas',
    price: 199,
}

function handleobject(anyobject){
    console.log( `${anyobject.username} loggedIn and price is ${anyobject.price}`); 
}

handleobject(user);