function sum(first, second){
    const sum = first + second;
    return sum;
}
function sum1(first, second){
    return first + second;
}

const sum2 = function (first, second){
    return first + second;
}
const sum3 = (first, second) => first + second;
const sumCalculation1 = (num1 = 5, num2 = 0, num3 = 5) =>{
    const sum1 = num1 + num2;
    const sum2 = num2 + num3;
    return sum1+sum2;
}

const sumAns = sumCalculation1();
console.log(sumAns);
const sumCalculation = sum3(45, 15);
// console.log(sumCalculation);