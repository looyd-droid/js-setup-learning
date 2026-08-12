const user = {
    username: "Shreyas",
    age:22,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}

user.welcomeMessage();
user.username = "Shreyas Borse";
user.welcomeMessage();