/*

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.

*/

function updateInventory(arr1, arr2) {
  let arr3 = arr1.concat(arr2); // STEP 1: concat arrays into one array

  let obj = {}; // STEP 2: convert array to obj to consolidate duplicate items
  arr3.forEach((item) => {
    if (obj[item[1]]) { // if obj "key" already exists
      obj[item[1]] += item[0]; // add its value to the prev value
    }
    else { // if it doesn't exist
      obj[item[1]] = item[0]; // create it and set it equal to its value
    }
  });
  
  let arr4 = []; // STEP 3: convert back to array with item name first
  for (let i in obj) {
    let item = [i, obj[i]]; // ["Bowling Ball", 88]
    arr4.push(item);
  }

  arr4.sort(); // STEP 4: sort the array so it's alphabetical

  let arr = []; // STEP 5: reverse sub-array items so number is first
  arr4.forEach((item) => {
    arr.push([item[1], item[0]]); // [88, "Bowling Ball"]
  });

  // All inventory must be accounted for or you're fired!
  return arr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
