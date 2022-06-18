function hasTargetSum(array, target) {
  // Write your algorithm here

//create an object to keep track of numbers seen
  const numIdentifier = {};

  for (const num of array) {
    // n steps
    const numValue = target - num;
    if (numValue in numIdentifier) return true;
    numIdentifier[num] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
  Add your pseudocode here

  create an object to keep track of numbers seen
  iterate through each number in the array
    for the current num, identify a numValue that adds to the target (numValue = target - num)
      if any key on our object is the numValue
        return true
      if not, add that number to the object
  if I reached  the end of  array, 
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([8, 2, 32], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 1.5, 100], 15));
}

module.exports = hasTargetSum;

// 
