function removeDummy() {
    var fruits = [
      "banana",
      "apple",
      "orange",
      "watermelon",
      "apple",
      "orange",
      "grape",
      "apple",
    ];
    const arr = [...new Set(fruits)];
    console.log(arr);
    const a1 = Array.from(new Set(fruits));
    console.log(a1);
    const takeWYU = fruits.splice(2, 1, "Love");
    console.log(takeWYU, fruits);
  }
  
  // removeDummy();
  
  function from() {
    var friends = [
      { name: "John", age: 22 },
      { name: "Peter", age: 23 },
      { name: "Mark", age: 24 },
      { name: "Maria", age: 22 },
      { name: "Monica", age: 21 },
      { name: "Martha", age: 19 },
    ];
    Array.from(friends, ({ name }) => {
      console.log(name);
    });
  }
  
  // from();
  
  function emptyArray() {
    var friends = [
      { name: "John", age: 22 },
      { name: "Peter", age: 23 },
      { name: "Mark", age: 24 },
      { name: "Maria", age: 22 },
      { name: "Monica", age: 21 },
      { name: "Martha", age: 19 },
    ];
    friends.length = 0;
    console.log(friends);
  }
  
  // emptyArray();
  
  function convertArrTObject() {
    var fruits = [
      "banana",
      "apple",
      "orange",
      "watermelon",
      "apple",
      "orange",
      "grape",
      "apple",
    ];
    console.log({ ...fruits });
  }
  
  // convertArrTObject();
  
  function fillArray() {
    const arr = new Array(10).fill(10);
    console.log(arr);
  }
  
  // fillArray();
  
  function mergeArrays() {
    let a = [1, 2, 3, 4, 5, 6, 7, 8];
    let b = [2, 3, 4, 5, 6];
    console.log([...a, ...b]);
  }
  
  // mergeArrays();
  
  function intersection() {
    console.log(new Date().getMilliseconds());
    var numOne = [0, 2, 4, 6, 8, 8];
    var numTwo = [1, 2, 3, 4, 5, 6];
    let arr = [];
    for (let i = 0; i < numOne.length; i++) {
      for (let j = 0; j < numTwo.length; j++) {
        if (numOne[i] == numTwo[j]) {
          arr.push(numOne[i]);
        }
      }
    }
    console.log(arr);
    console.log(new Date().getMilliseconds());
  
    const inti = numOne.filter((i) => !numTwo.includes(i));
    console.log(inti);
    console.log(new Date().getMilliseconds());
  }
  
  // intersection();
  
  function removeFalsy() {
    let a = ["a", 1, 2, , null, undefined, NaN, 2, "1", "", "", {}];
    let b = a.filter(Boolean);
    console.log(b);
  }
  // removeFalsy();
  
  function getRandom() {
    var fruits = [
      "banana",
      "apple",
      "orange",
      "watermelon",
      "apple",
      "orange",
      "grape",
      "apple",
    ];
    console.log(fruits[Math.floor(Math.random() * fruits.length)]);
  }
  
  // getRandom();
  
  function reverseA() {
    var fruits = [
      "banana",
      "apple",
      "orange",
      "watermelon",
      "apple",
      "orange",
      "grape",
      "apple",
    ];
    console.log(fruits.reverse());
    console.log(fruits.lastIndexOf("apple"));
    var numOne = [0, 2, 4, 6, 8, 8];
    const sum = numOne.reduce((i, j) => i + j);
    console.log(sum);
  }
  // reverseA();
  
  function mostAcc() {
    var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
    console.log(arr);
    let count = 0;
    let item = "";
    for (let i = 0; i < arr.length; i++) {
      let repeated = 1;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          repeated++;
          if (repeated > count) {
            count = repeated;
            item = arr[i];
          }
        }
      }
    }
  }
  
  function swapCase() {
    // console.log(item,count);
    let a = "The Quick Brown Fox";
    let arrAll = a.split(" ");
    let str = "";
    for (let i = 0; i < arrAll.length; i++) {
      let arr = arrAll[i];
      let cas = arr[0].toLowerCase() + arr.slice(1, arr.length).toUpperCase();
      str = str + " " + cas;
    }
    console.log(str);
  }
  // swapCase();
  
  function nestedArray() {
    var a = [
      [1, 2, 1, 24],
      [8, 11, 9, 4],
      [7, 0, 7, 27],
      [7, 4, 28, 14],
      [3, 10, 26, 7],
    ];
    for (let i in a) {
      console.log("row " + i);
      for (let z in a[i]) {
        console.log(a[i][z]);
      }
    }
  }
  
  // nestedArray()
  
  function sumProduct() {
    let array = [1, 2, 3, 4, 5, 6];
    console.log(array.reduce((s, i) => s + i, 0));
    console.log(array.reduce((s, i) => s * i, 1));
  }
  
  // sumProduct()
  
  function removeDuplicate() {
    let a = [1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 111];
    let b = new Set([...a]);
    console.log(b);
  
    let c = a.filter((i, index) => index === a.indexOf(i));
    console.log(c);
  }
  
  // removeDuplicate()
  
  function findIn() {
    const employees = [
      { name: "David Carlson", age: 30 },
      { name: "John Cena", age: 34 },
      { name: "Mike Sheridan", age: 25 },
      { name: "John Carte", age: 50 },
    ];
    const index = employees.findIndex(
      (employee) => employee.name.indexOf("John") > -1,
    );
    console.log(index);
    return index;
  }
  
  // findIn()
  
  function everySome() {
    let a = [10, -30, 20, 50];
    console.log(a.every((i) => i > 2));
    console.log(a.some((i) => i > 2));
  }
  
  // everySome();
  
  function reduceS() {
    const coordinates = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
    ];
    console.log(coordinates);
    const sum = coordinates.reduce((a, i) => {
      return (a += i.y);
    }, 0);
    return sum;
  }
  
  // reduceS()
  
  //sort
  let a = [1, 2, 7, 6, 4, 11, 0, 9];
  
  let b = a.sort((a, b) => a - b);
  
  console.log(b);
  