var ArrOfArr = [[]]

var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
console.log(matrix)


for(var i = 1;i <= 10; i++) {
    console.log(i);
}

var number = parseInt(prompt("enter the number for the multiplcation table:"));
var length = parseInt(prompt("Enter the length of the multiplcation table:"));
 
if(isNaN(number) || isNaN(length)){
    console.log( "Invalid input .Please the valid number.");
} else{
    console.log(`Multiplcation the table ${number} up to ${length} multiples:`);
    for(var i =1; i <= length; i++) {
        console.log(`${number} x ${i} =${number * i}`);
    }
}

var fruits = ["apple","banana","orange","mango","strawberry"];
console.log("printing items of the 'friut' array:");
for(var i = 0; i < fruits.length; i++ ){
    console.log(fruits[i]);
}

//a.
 Counting: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

{console.log(" counting:");}
for(var i = 1; i <=15; i++);{
    console.log(i);
}

//b. 
Reversecounting: 10,9,8,7,6,5,4,3,2,1
{console.log("Reversecounting:");
for(var i =10; i >= 1; i--){
    console.log(i);
}}
 
//c.
Even:0,2,4,6,8,10,12,14,16,18,20
{
    console.log("Even:");
    for(var i = 0; i <=20; i+=2){
        console.log(i);
    }
}

//d.
Odd: 1,3,5,7,9,11,13,15,17,19
console.log("Odd:");
for(var i =1;i<=19;i+=2){
    console.log(i);
}

//e.Series: 2k, 4k, 6k, 8k, 10k ,12k, 14k, 18k, 20k
console.log("Series:");
for(var i=2;i<=20;i+=2){
    console.log(i +"k");
}

var A =["cake","apple pie","cookies","chips","patties"];
var userinput=prompt("Enter an item to search");
var found=A.includes(userinput);
if(found){
    console.log(`"${userinput}" is found in tne list.`);
}else{
    console.log(`"${userinput}" is not found in the list. `);
}

var A =[24,53,28,91,12];
var largestnumber =A[0];
for( var i=1;i<A.length;i++){
  if(A[i]>largestnumber){
        largestnumber=A[i];
    }
}
console.log(`The largest number in the array: ${largestnumber}`);

var A =[24,53,28,91,12];
var smallestnumber = A[0];
for(var i=1;i<A.length;i++){
    if(A[i]< smallestnumber){
        smallestnumber =A[i];
    }
} 
console.log(`The smallest number in the array: ${smallestnumber}`);


console.log("multiplies of 5 from 1 to 100:");
for(var i= 1;i<=100;i++) {
    if(i % 5 === 0){
        console.log(i);
    }
}