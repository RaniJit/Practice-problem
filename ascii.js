function ascCode(str)
{
  let ans= "";
  for (let i = 0; i < str.length; i++){
    let asciiNum= str.charCodeAt(i);
    if (asciiNum >= 97 && asciiNum <= 122) {
       
    ans=ans+String.fromCharCode(asciiNum-32)
      
      
    }
    else {
         ans = ans + String.fromCharCode(asciiNum + 32);
       }

  }
  return ans;

}
console.log(ascCode('AaBbc'));
  
