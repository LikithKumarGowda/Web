// let A = { name: "raj", age: 23, mob: 1234567890 };
// console.log(A);
// A.marks = 34;
// console.log(A);
// let { name, age, mob, marks } = A;
// console.log(name);
// console.log(age);
// console.log(B);
// var B = function A() {
//   console.log("i am hoisting");

// };

// function A(X) {
//   let A = 20;
//   return (X) => {
//     console.log(X + A);
//   };
// }

// Res = A();
// Res(20);

// async function display() {
//   let Res = await fetch("  ")
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

function validate() {
  let response = document.getElementById("valid");
  let res = /[8-9]{1}[0-9]{9}/g;
  let result = res.test(response.value);
  if (result == false) {
    alert("user name is wrong");
    return false;
  } else {
    alert("user name is accepted");
    return true;
  }
}
