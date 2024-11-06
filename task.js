//1
var carprice=1200000
var ismember=prompt("enter true or false")
if(ismember==="true"){
    discount=20/100*carprice
    console.log(discount+""+"u will get");
    
}
else{
    console.log("pay full amount"+" "+carprice);
}

//2
platinum=30
gold=15
silver=10
regular=5
bigbi=false
if(bigbi){
    console.log("platinum discount is increased by"+" "+(platinum+5));
    console.log("gold discount is increased by"+" "+(gold+5));
    console.log("silver discount is increased by"+" "+(silver+5));
    console.log("regular discount is increased by"+" "+(regular+5));
}
else{
    console.log("platinum discount is not increased "+" "+(platinum));
    console.log("gold discount is not increased "+" "+(gold));
    console.log("silver discount is not increased"+" "+(silver));
    console.log("regular discount is not increased "+" "+(regular));
}

//1
var l1=+prompt("enter side1 length: ")
var l2=+prompt("enter side2 length: ")
var l3=+prompt("enter side3 length: ")
if(l1+l2>l3 || l2+l3>l1){
    console.log("its a valid triangle")
}
else if(l1+l3>l2){
        console.log("its a valid triangle")
}
else{
    console.log("invalid triangle ")
}

//2

var a=7
let isprime=true
if(a<=1) return false
if(a<=2) return true
else{
    for(let i = 2; i <= Math.sqrt(a); i++){
        if(a%i==0){
            isprime=false
            break;
        }
    }
}
if(isprime){
    console.log("its a prime number")
}
else{
    console.log("its not a prime number")
}

//3
var a=[70,20,50]
var lar=a[0]
for(var i=1;i<a.length;i++){
    if(a[i]>lar){
        lar=a[i]
    }
     
}
console.log(`${lar}is a largest number`)

//4
var year=+prompt("enter the year: ")
if(year%4==0){
    console.log(`${year} is a leap year`)
}
else{
    console.log(`${year} is not a leap year`)
}

//5
var n=+prompt("enter a number")
if(n%3==0 && n%5==0){
    console.log("FizzBuzz")
}
else if(n%3==0){
    console.log("Fizz")
}
else if(n%5==0){
    console.log("Buzz")
}
else{
    console.log(n)
}

//6
var a=48
var b=18
var originalA=a
var originalB=b
while(b!==0){
    var temp=b
    b=a%b
    var a=temp
}
lcm=originalA*originalB/a
console.log(lcm)

//7
let a = 48;
let b = 18;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log(a); 

//8

let num1 = 10;
let num2 = 5;
let operation = "multiply";  

let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero is not allowed.";
        }
        break;
    default:
        result = "Invalid operation";
        break;
}

console.log(result);
