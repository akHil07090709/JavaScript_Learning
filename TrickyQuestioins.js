//declaration, assigning, usuage

// 1.question
var variable = 10;
(() => {
  console.log(variable);
  var variable = 20;
  console.log(variable);
})();
//undefined,20

// 2.question
var variable = 10;
(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();
//10,20

// 3.question
var variable = 10;
(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();
var variable = 30;
console.log(variable);
10,20,30

//4
var variable = 10;
(() => {
  console.log(variable); // undefined
  var variable = 20;
  console.log(variable); // 20
})();

console.log(variable);
var variable = 30;
undefined,20,10

//4 conversion always think like this to crake the ans
var variable;
variable = 10;
(() => {
  var variable;
  console.log(variable); // undefined
  variable = 20;
  console.log(variable); // 20
})();
console.log(variable);
variable = 30;

5
var variable = 10;
(() => {
  console.log(variable, "1");
  variable = 20;
  console.log(variable, "2");
})();
console.log(variable, "3");
var variable = 30;
10, 20, 20

6
var variable = 10;
(() => {
  variable_3 = 35;
  console.log(variable_3);
  //   var variable_3 = 45;
  variable_2 = 15;
  console.log(variable);
})();
console.log(variable_2, "2");
console.log(variable_3, "3");
var variable = 30;
35,

7
console.log(y);
y = 1;
-------------------
console.log(y);
var y = 2;
-------------------
y = 3;
console.log(y);
var y;
-------------------

8
var a = 1;
console.log(a);
var a = 2;
console.log(a);

9
var z = 1;
let z;      //syntax error z: already defined
console.log(z);
-----------------
console.log(z); //reference error: z not defined
let z = 1;

10
function hoistExample() {
  var a;
  console.log("Before: ", a);
  a = 10;
  console.log("After: ", a);
}
hoistExample();

11
console.log(typeof foo);
function foo() {
  return "bar";
}
var foo = "bar";

12
function foo() {
  return "bar";
}
var foo;

console.log(typeof foo);

13
if (true) {
  function foo() {
    console.log(1);
  }
} else {
  function foo() {
    console.log(2);
  }
}

foo();

14
function foo() {
  bar();

  return;

  function bar() {
    console.log("bar");
  }
}

foo();

15
function foo(x) {
  x();

  function x() {
    console.log("foo");
  }
}

foo(function() {
  console.log("bar")
});

16
foo();

function foo() {
  console.log(1);
}

var foo = function () {
  console.log(2);
};

function foo() {
  console.log(3);
}

foo();

17;
function foo(x, y, s) {
  x = 11;
  console.log(x);
  y[0] = 111;
  console.log(y);
  s();
  function s() {
    console.log("foo");
  }
}
let x = 10;
let y = [1, 2, 3];
let z = function () {
  console.log("bar");
};
foo(x, y, z);

18
function animal() {
  console.log("Cat");
}

var otherAnimal;

animal();
otherAnimal();

otherAnimal = function () {
  console.log("Dog");
};

19
b = function a() {};
var a = (b = 7);
a = function b() {};
function b() {}
function a() {}
console.log(a);
console.log(b);

20
var a = 10;
console.log("line number 2", a);

function fn() {
  console.log("line number 4", a);
  var a = 20;
  a++;
  console.log("line number 7", a);
  if (a) {
    var a = 30;
    a++;
    console.log("line number 11", a);
  }
  console.log("line number 13", a);
}
fn();
console.log("line number 15", a);

21
function foo() {
  let a = (b = 0);
  a++;
  return a;
}

foo();
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);

21;
x = 5;
var x;
(function fun() {
  {
    let x = 1;
    x++;
    console.log(x);
  }
  console.log(x);
})();

22
setTimeout(() => {
  console.log("Hi");
}, 0)
console.log("Hello");
// output
Hello
Hi
var x = 5;
x = 0;
setTimeout(() => {
  console.log(x);
})
console.log("Hello");
x = x+1;
// output
Hello
1

23;
fun2();
console.log(y);
console.log(x);
fun1();
const fun1 = () => {
  console.log("fun1");
};
function fun2() {
  console.log("fun2");
}
var x = 5;
let y = 7;

function test(x, b, c) {
    x = 11;
    b[0] = 11;
    c.a = false;
  }
  
  var x = 10;
  const y = [1, 2, 5];
  const z = { a: true };
  
  test(x, y, z);
  console.log(x, y, z);
  
  (function test() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(5);
  })();
  
  (function (a) {
    return (() => {
      console.log(a);
      a = 6;
    })();
  })(21);
  