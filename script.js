// // let stringToNumber = prompt("insert string"); 
// // let number = parseInt(stringToNumber); 

// // alert(number) 

// //________Binary to Decimal Number_________________________________________________________ 

// function binToDec(bin){ 
  
//     return parseInt(bin, 2); 
// } 

//   //______Change string to uppercase___________________________________________________ 

// function makeUpperCase(str) {
    
//   return str.toUpperCase();
// } 

//   //_________Calculate Body Mass Index___________________________________________________ 

// function bmi(weight, height) { 
    
//   let bmi = weight / height ** 2; 
//   if (bmi <= 18.5){ 
//     return "Underweight";
//   } else if (bmi <= 25.0){ 
//       return "Normal";
//     } else if (bmi <=30.0){ 
//         return "Overweight"; 
//       } else { 
//           return "Obese";
//         }
// } 

//________________Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.______________________________________________ 



//______________________________________________________________ 

function countBy(x, n) {
    let z = []; 
    
    for (let i = 1; i < n; i++) {
        const element = z[n];
            z.push(element)
    }
  
    return z;
  }

console.log(countBy(1,11));