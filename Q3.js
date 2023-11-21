//Wrt. code to find palindrome string in JavaScript/typescript

function checkPalindrome(inputStr) {
  var strArr = inputStr.split("");
  var strRevArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    strRevArr.push(strArr[i]);
  }
  if (inputStr == strRevArr.join("")) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
}
checkPalindrome("madam");
checkPalindrome("ravi");
