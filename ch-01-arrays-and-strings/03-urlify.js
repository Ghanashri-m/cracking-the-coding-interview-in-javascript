// Replace spaces in the middle of a string with "%20" assuming the end of the 
// string contains twice as many spaces as are in the middle.

const urlify = (input) => {
  let spaceCount = input.split(" ").length - 1;
  let outcome = input.split(" ").join("%20");
  
  for (let i = 0; i < (spaceCount * 2); i++) {
  	outcome += '%20';
  }
  
  console.log(outcome);
}

urlify(str="Hello World!!")
