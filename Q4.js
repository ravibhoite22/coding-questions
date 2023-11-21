//Q4. Wrt code to find the longest repeating letter in a string
//i/p NNNeewwwwpageeeeee o/p should be [e:6]

function longestRepetition(str) {
  if (str.length === 0) {
    return ["", 0];
  }
  let longest = "";
  let chunk = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (str[i] === str[i + 1]) {
        chunk += str[i];
      }
    }
    if (i > 0) {
      if (str[i] === str[i - 1]) {
        chunk += str[i];
        console.log("chunk 2", chunk);
      }
      if (str[i] !== str[i - 1]) {
        chunk = str[i];
      }
      if (chunk.length > longest.length) {
        longest = chunk;
      }
    }
  }
  return [longest[0], longest.length];
}
console.log(longestRepetition("NNNeewwwwpageeeeee"));
