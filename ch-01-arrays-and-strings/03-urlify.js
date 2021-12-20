// Replace spaces in the middle of a string with "%20" assuming the end of the 
// string contains twice as many spaces as are in the middle.

// example: input: "Mr John Smith    "; output: "Mr%20John%20Smith"

const urlify = (input) => {
  console.log(input.trim().split(" ").join("%20"));
}

urlify(str="Mr John Smith    ")
