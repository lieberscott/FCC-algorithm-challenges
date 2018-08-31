/*

Create a function that takes two or more arrays
and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
the mathematical term "symmetric difference" of two sets is the set of
elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).

For every additional symmetric difference you take (say on a set D = {2, 3}),
you should get the set with elements which are in either of the two the sets
but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

The resulting array must contain only unique values (no duplicates).

*/



function sym(args) {
  let argsCopy = []; // copy the arguments (since we don't know how many arrays will be passed in
  let x; // each argument without duplicates
  let argsCopy0; // this will hold the first arguments array (index 0) without duplicates
  for (let i = 0; i < arguments.length; i++) {
    x = arguments[i].filter((elem, ind) => {
      return arguments[i].indexOf(elem) == ind; // eliminates duplicates within each array up front
    });
    if (i == 0) {
      argsCopy0 = x; // first array without duplicates (will be used as "base" array)
    }
    argsCopy.push(x);
  }
  let arr = [];
  for (let i = 0; i < argsCopy0.length; i++) {
    arr.push(argsCopy0[i]); // arr is base array upon which all others will be concat'd
  }

  while (argsCopy[1]) { // while argsCopy[1] exists (we will splice it later)
    for (let i = argsCopy[1].length - 1; i >= 0; i--) {
      let item = argsCopy[1][i]; // i is the index the argsCopy array
      if (arr.includes(item)) { // if base array includes item in array we are checking
        let ind = arr.indexOf(item);
        arr.splice(ind, 1); // remove it from the base array
        argsCopy[1].splice(i, 1); // remove it from the array we are checking
      }
    }
    arr = arr.concat(argsCopy[1]); // concat the two arrays
    argsCopy.splice(1, 1); // splice out the array we just checked, next one slides in to become argsCopy[1]
  }
  // once this process is complete, we will have eliminated all items that appear in more than one of the given arrays
  return arr;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
