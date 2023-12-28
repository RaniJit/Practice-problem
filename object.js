const users = {
  name: "Rani Jit",
  age: 25,
  id: 11989,
  rollno:12
}
console.log(users);
users.gretting = function () {
  return("Hello");
 
}
users.grettingTwo = function () {
  return(`Hello JS Users , ${this.name}`);
}
console.log("1:" + users.gretting());
console.log("2:" + users.grettingTwo());