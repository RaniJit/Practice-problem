function camelCase(str, separetor) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      ans = ans + separetor + str[i].toLowerCase();
    } else {
      ans = ans + str[i];
    }
  }
  return ans;
}
console.log(camelCase("javaScriptExercises", "-"));
// console.log(camelCase("javaScriptExercises", "-"));
