// Determine whether or not a given string contains no duplicate characters.

const checkDuplicate = (testString) => {
  
	let outcome = testString.toLowerCase().split('').every((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item));
 
  if (outcome) {
  	console.log('String contains no duplicate')
  } else {
    console.log('String contins duplicates')
  }
  
}
let str = 'String';
checkDuplicate(str);
