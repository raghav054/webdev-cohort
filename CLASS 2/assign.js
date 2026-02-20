// function shinyDiamondRug(n) {
//     let result = "";
//     for(let i = 0; i < n; i++){
//           for(let j = n-i-1; j > 0; j--){
//               result += " ";
//           }
//           for(let j = 0; j < 2*i+1; j++){
//               result += "*";
//           }
//         //   for(let j = n-i-1; j > 0; j--){
//         //       result += " ";
//         //   }
//           result += "\n";
//     }
//     for(let i = 1; i < n; i++){
//           for(let j = 0; j < i; j++){
//               result += " ";
//           }
//           for(let j = (2*n)-(2*i)-1; j > 0; j--){
//               result += "*";
//           }
//         //   for(let j = 0; j < i; j++){
//         //       result += " ";
//         //   }
//           if(i < n-1){
//             result += "\n";
//           }
//     }
//     return result;
//   }
  
//   console.log(shinyDiamondRug(4));













function shinyDiamondRug(n) {
  let result = "";
  for(let i = 0; i < n; i++){
        for(let j = n-i-1; j > 0; j--){
            result += " ";
        }
        for(let j = 0; j < 2*i+1; j++){
            result += "*";
        }
      //   for(let j = n-i-1; j > 0; j--){
      //       result += " ";
      //   }
        result += "\n";
  }
  for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            result += " ";
        }
        for(let j = (2*n)-(2*i)-1; j > 0; j--){
            result += "*";
        }
      //   for(let j = 0; j < i; j++){
      //       result += " ";
      //   }
        if(i < n-1){
          result += "\n";
        }
  }
  return result;
}

console.log(shinyDiamondRug(4));