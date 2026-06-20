// EXERCISE 1
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

//EXERCISE 2
function isAdult(age) {
  if (age >= 18) {
    return 'Adult'
  }
  else 
    return 'Minor'
}
console.log("Exercise 2 Result:", isAdult(21))

//EXERCISE 3
function isCharAVowel(char){
    if (char==='a' || char ==='e' || char ==='i' || char ==='o' || char ==='u' ){
        return true
    }
    else {
        return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"))

//EXERCISE 4
function generateEmail(name,domain){
    return name + domain 
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


//EXERCISE 5
function greetUser(name,timeOfDay){
    if (timeOfDay === 'morning'){
        return 'Good morning, ' + name +"!"
    }
    else if (timeOfDay === 'afternoon'){
        return 'Good afternoon, ' + name +"!"
    }
    else {
        return 'Good evening, ' + name +"!"
    }
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//EXERCISE 6
function maxOfThree(num1,num2,num3){
    if (num1>num2){
        return num1 
    }
    else if (num2>num3){
        return num2
    }
    else {
        return num3
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//EXERCISE 7
function calculateTip(amount,percentage){
    return amount*(percentage/100)
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

//EXERCISE 8
function convertTemperature(temp,tempChar){
    if (tempChar === 'C' || tempChar === 'c'){
        return (temp *1.8) + 32
    }
    else if (tempChar === 'F' || tempChar === 'f'){
        return (temp - 32) / 1.8
    }
    else {
        return `Error, the temperature is not Celsius or Fahrenheit `
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

//EXERCISE 9
function basicCalculator(num1, num2, operation){
    if (operation === 'add'){
        return num1 + num2
    }
    else if (operation === 'subtract'){
        return num1 - num2
    }
    else if (operation === 'multiply'){
        return num1 * num2
    }
    else if (operation === 'divide'){
        return num1 / num2 
    }
    else {
        return 'error!'
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

// EXERCISE 10
function calculateGrade(grade){
    if (grade > 90){
        return 'A'
    }
    else if (grade < 90 && grade >= 80){
        return 'B'
    }
    else if (grade < 80 && grade >=70){
        return 'C'
    }
    else if (grade < 70 && grade >=60){
        return 'D'
    }
    else if (grade < 60){
        return 'F'
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));

//EXERCISE 11
function createUsername(fName , lName){

}