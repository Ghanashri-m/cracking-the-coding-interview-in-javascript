// Determine whether or not one string is a permutation of another.

// A Permutation of a string is another string that contains same characters,
// only the order of characters can be different.
// For example, “abcd” and “dabc” are Permutation of each other.


const isPermutation = (a, b) => {
  if (a.length !== b.length) {
		console.log('Strings are not permutation of each other');
    return;
  } else {
    let outcome = a.toLowerCase().split('').every((item, index, arr) => b.toLowerCase().includes(item));
    if (outcome) {
      console.log('One string is a permutation of another');
    } else {
      console.log('Strings are not permutation of each other');
    }
  }
}

isPermutation(str1='abcd', str2='bcda')
