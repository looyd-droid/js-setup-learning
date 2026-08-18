// const temperature = 35;

// if(temperature<30){
//     console.log("its not that hot")
// }

// if(temperature>30){
//     console.log("its a hot day")
// }


//example_2
// const score = 120;
// if(score>100){
//     const power = "Fly";
//     console.log(`user power: ${power}`);
// }

//example_3

const UserLoggedIn = true;
const UserEmailVerified = true;
const UserLoggedInFromGoogle = false;
const UserLoggedInFromEmail = true;

if(UserLoggedIn){
    if(UserEmailVerified){
        console.log(`user valid logged In via ${UserLoggedInFromGoogle ? "Google" : "Email"}`);
    }else if(UserLoggedInFromGoogle){
        console.log("User LoggedIn from google");
    }else if(UserLoggedInFromEmail){
        console.log("User Logged In via Valid Email");
    }else{
        console.log("Invalid User");
    }
}else{
    console.log("User Not registered, please log in");
}