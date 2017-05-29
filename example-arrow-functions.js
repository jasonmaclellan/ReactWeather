var names = ['Jason', 'Ali', 'Matt', 'Bob'];
//
// names.forEach(function(name) {
//   console.log('forEach ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunction', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jason'));

var person = {
  name: 'Jason',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }

};

person.greet();


function add(a,b) {
  return a+b;
}

console.log(add(1,3));
console.log(add(9,0));


// addStatement - use curly braces
var addStatement = (a,b) => {
  return a+b;
}

console.log(addStatement(2,5));

// addExpression - use experssion syntax
var addExpression = (a,b) => a+b;

console.log(addExpression(5,6));
