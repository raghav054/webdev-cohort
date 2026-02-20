function gradeCalculation(marks) {
    if(marks >= 90){
        return `A`;
    }else if(marks >= 80){
        return `B`;
        
    }else if(marks >= 70){
        return `C`;

    }else if(marks >= 60){
        return `D`;
        
    }else{
        return `F`;
    }
}

let grade = gradeCalculation(90);
console.log(grade);












// function gradeCalculation(marks) {
//     if(marks >= 90){
//         console.log("your grade is A");
//     }else if(marks >= 80){
//         console.log("your grade is B");
//     }else if(marks >= 70){
//         console.log("your grade is C");
//     }else if(marks >= 60){
//         console.log("your grade is D");
//     }else{
//         console.log("sorry, you are fail in exam");
//     }
// }

// let marks = 80;
// gradeCalculation(marks);
