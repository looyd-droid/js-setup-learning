// switch(key){        -----------------|
//     case value1:                     |
//         break;                       |   
//     case value2:                     |
//         break;                       |--------------> SYNTAX
//     case value3:                     |           
//         break;                       |
//     default:                         |
//         break;                       |
// }------------------------------------|


//EXAMPLE 

const month =3;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("MARCH");
        break;
    case 4:
        console.log("APRIL");
        break;
    case 5:
        console.log("MAY");
        break;
    case 6:
        console.log("JUNE");
        break;

    default:
        console.log("Invalid Month");
        break;
}