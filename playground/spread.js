// function add (a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Jon','Gary'];
// var groupB = ['Vikram'];
// var final = [3,...groupA];

var person = ['Andrew',25];
var personTwo = ['Den', 29];

function greet(name,age){
  console.log('Hi '+name+', you are '+age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike','Ben'];
var final = ['Xiang',...names];

final.forEach(function(name){
  console.log('Hi '+ name);
});
