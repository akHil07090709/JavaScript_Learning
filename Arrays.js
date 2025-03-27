// let name = { first: "ranga", middle: "great", last: "vatti" };
// let details = { first: "ranga", middle: "great", last: "great" };
// let res = { ...name, last: details.last };

// console.log(res);

// 1. Reverse an array.
// 2. Find the maximum number in an array.
// 3. Calculate the sum of all numbers in an array.
// 4. Remove duplicates from an array.
// 5. Implement a custom sorting algorithm for an array.
// 6. Find the intersection of two arrays.
// 7. Rotate an array to the right by a specific number of positions.
// 8. Find the largest contiguous subarray sum.
// 9. Check if an array is a palindrome.
// 10. Implement a function to shuffle an array.
// 11. Merge two objects into one.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//1.Reverse
function reverse() {
  console.log(a.reverse());
  let rev = [];
  for (let i = a.length - 1; i >= 0; i--) {
    rev.push(a[i]);
  }
  console.log(rev);
}
// reverse();

// 2. Find the maximum number in an array.

function findMaxNum() {
  let max = Math.max(...a);
  //   console.log(max);
  let maxn = a.reduce((acc, cur, i, a) => (cur > acc ? cur : acc), 0);
  //   console.log(maxn);
  let maxnum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > maxnum) maxnum = a[i];
  }
  console.log(maxnum);
}
// findMaxNum();

// 3. Calculate the sum of all numbers in an array.

function calSum() {
  const sum = a.reduce((a, c) => a + c);
  //   console.log(sum);
  let sumT = 0;
  for (let i = 0; i < a.length; i++) {
    sumT += a[i];
  }
  console.log(sumT);
}

// calSum();

// 4. Remove duplicates from an array.

function removeDuplicate() {
  let a = [1, 2, 3, 4, 5, 5, 6, 7, 2, 4, 5, 7, 8]; //type 1
  let arr = [...new Set(a)];
  //   console.log(arr);
  let res = a.reduce((acc, cur, i, a) => {
    if (a.indexOf(cur) == i) acc.push(cur);
    return acc;
  }, []);
  //   console.log(res);
  let resFI = a.reduce((acc, cur, i, a) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, []);
  //   console.log(resFI);
  let resF = a.filter((cur, i, a) => a.indexOf(cur) == i);
  //   console.log(resF);
  let e = [{ a: 1 }, { a: 1 }, { a: 1 }, { b: 1 }, { b: 1 }, { c: 1 }];
  let resFO = e.filter(
    (cur, ind, ar) =>
      ar.findIndex((ele) => JSON.stringify(ele) === JSON.stringify(cur)) == ind,
  );
  // console.log(resFO);
  let resObj = e.reduce((acc, cur, ind, arr) => {
    res = acc.some((ele) => JSON.stringify(ele) == JSON.stringify(cur));
    if (!res) acc.push(cur);
    return acc;
  }, []);
  // console.log(resObj);
  let resObj2 = e.reduce((acc, cur, ind, arr) => {
    res = arr.findIndex((ele) => JSON.stringify(ele) == JSON.stringify(cur));
    if (res == ind) acc.push(cur);
    return acc;
  }, []);
  // console.log(resObj2);
}

// removeDuplicate();
// 5. Implement a custom sorting algorithm for an array.
function sorting() {
  let a = [2, 6, 1, 7, 8, 9, 22, 4, 99, 0, -1, 222];
  let b = a.sort((a, b) => a - b);
  // console.log(b);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  console.log(a);
}

// sorting();

// 6. Find the intersection of two arrays.
function intersection() {
  let a = [1, 2, 3, 111, 34, 343, 54545];
  let b = [1, 2, 3, 4, 5, 6, 7];
  const res = a.filter((ele, i) => b.includes(ele));
  // console.log(res);
  const resI = a.filter((ele, i) => b.indexOf(ele) != -1);
  // console.log(resI);
  let e = [{ a: 1 }, { a: 1 }, { a: 1 }, { b: 1 }, { b: 1 }, { c: 1 }];
  let f = [{ b: 1 }, { c: 1 }];
  const resO = e.filter(
    (cur, ind) =>
      f.findIndex((ele) => JSON.stringify(ele) == JSON.stringify(cur)) != -1,
  );
  // console.log(resO);
  const resOI = e.filter((cur, ind) =>
    f.some((ele) => JSON.stringify(ele) == JSON.stringify(cur)),
  );
  console.log(resOI);
}

// intersection();

// 7. Rotate an array to the right by a specific number of positions.

function rotate(numOfPos) {
  for (let i = 0; i < numOfPos; i++) {
    a.unshift(a.pop());
  }
  console.log(a);
}

// rotate(3);

// 8. Find the largest contiguous subarray sum.
function contiguous() {
  let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let max = 0;
  let maxArr = [];
  for (let i = 0; i < a.length; i++) {
    let sum = a[i];
    let arr = [a[i]];
    for (let j = i + 1; j < a.length; j++) {
      sum += a[j];
      arr.push(a[j]);
      if (sum > max) {
        max = sum;
        maxArr = [...arr];
      }
    }
  }
  console.log(max, maxArr);
}
// contiguous();

// 9. Check if an array is a palindrome.

function polindrome() {
  let a = [1, 2, 1];
  let b = [1, 2, 1];
  console.log(a.reverse().join("") == b.join(""));
}
// polindrome();

// 10. Implement a function to shuffle an array.

function shuffle() {
  let arr = [];
  for (let i = a.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    let temp = a[i];
    a[i] = a[randomIndex];
    a[randomIndex] = temp;
  }
  console.log(a);
}

// shuffle();

// 11. Merge two objects into one.

function merge() {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 3, 7, 8, 9];
  let c = [...a, ...b];
  console.log(c);
  let d = { x: 1, y: 2 };
  let e = { z: 3, u: 5 };
  const f = Object.assign({}, d, e);
  console.log(f);
}

// merge();

// Strings
// 21. Reverse a string.
// const a = "ranga";
// console.log(a.split("").reverse().join(""), a);
// 22. Check if a string is a palindrome.
// const a = "rangaagnar";
// console.log(a.split("").reverse().join("") == a);
