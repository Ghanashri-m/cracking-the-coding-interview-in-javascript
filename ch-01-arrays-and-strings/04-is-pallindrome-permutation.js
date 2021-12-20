// Determine whether or not a string is a permutation of a palindrome,
// ignoring spaces.

const canBePallindrome = (input) => {
  let str = input.toLowerCase().split(" ").join("");
  let charMap = {};
  let hasOddCount = false;
  
  for (let char of str) {
  	charMap[char] = charMap[char] ? charMap[char] + 1 : 1
  }
  
  for (let char in charMap) {
    if (charMap[char] % 2 !== 0) {
    	if (hasOddCount) {
      	console.log("not a permutation of a pallindrome");
        return;
      }
      hasOddCount = true;
    }
  }
  console.log("String is a permutation of a pallindrome")
}

canBePallindrome(str="Tact Coaa")
