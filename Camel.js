function Camel(str) {
  let arry = str.split(" ");
  console.log(arry);
  for (let i = 1; i < arry.length; i++) {
    arry[i] = arry[i].charAt(0).toUpperCase() + arry[i].slice(1);
  }
  return arry.join("")
}
console.log(Camel("JavaScript Exercises"));

