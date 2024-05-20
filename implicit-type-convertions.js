// In JavaScript we can perform mathematical operation in between different data types

console.log('50' + '3') // 503
console.log('4' - '3') // 1
console.log('4' * '3') // 12
console.log('4' / '2') // 2
console.log('4' % '3') // 1
console.log('c' - '2') // NaN
console.log('5' - 1) // 4

// comparisation '==' and '==='

console.log(5 == '5') // true, check only values
console.log(5 === '5') // false, checks value and data type also

console.log(typeof NaN) // number 

// convert string into a number

console.log(typeof Number("12")) // number
console.log(typeof +"12") // number
console.log(typeof +"Hi", +"Hi") // number, NaN
console.log(NaN === NaN) // false, because NaN can come from any string.


console.log(1 < 2 < 3) // true
/* 
    1 < 2 < 3
    operator precedence < > both are same so js evalutes expression from left to right
    1 < 2 => which is true
    true < 3 now js converts true into number in order to perform check the expression
    true === 1 and false === 0 
    1 < 3 =>  true
    result is true

*/
console.log(3 > 2 > 1) // false

/*
    3 > 2 => true
    true > 1
    i.e., 1 > 1 false
    result is false

*/
