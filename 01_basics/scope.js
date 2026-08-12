// SCOPE IN JAVASCRIPT:::: SO IN SIMPLE WORDS PARENTS CAN GIVE CHOCOLATE TO CHILDREN BUT CHILDREN CANNOT GIVE CHOCOLATE TO PARENTS...

function one(){                     // THIS IS A GLOBAL SCOPE FOR FUNCTION TWO, THIS CANNOT ACCESS VARIABLES OF FUNCTION TWO BECAUSE IT IS A PARENT FUNCTION
   let username = "Shreyas",
   age = 22;

   function two(){                 // THIS CAN ACCESS VARIABLES OF FUNCTION ONE BECAUSE IT IS A CHILD FUNCTION
    let name = "Borse",
    city = "Mumbai";
    console.log(username);
   }

//    console.log(city);
   two();
}

one();