// ! Question: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// TODO: https://leetcode.com/problems/two-sum/

// * step 1: verify constraints - variables that impact how to solve questions / edge cases
// are all the number positive or can there be negatives - all positive
// are there duplicate numbers in the array - no duplicates
// will there always be a solution available, what to return if no solution (null) - no
// can there be multiple pairs that add up to the target - no

// * step 2: write out some test cases
// best test case, no answer, empty array, an array with only one value, only two numbers which add to target

// * step 3: figure out a solution without code
// try every single combination of pairs inside the array --> two pointer technique

// * step 4: write out our solution in code

var twoSum = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numToFind === nums[p2]) {
        //true
        return [p1, p2];
      }
    }
  }
  return null;
};

// * step 5: double check for errors
// spelling mistakes, typos, variable names are consistent, all cases are correct, all loops are closed and all functions closed.

// * step 6: test code with our test cases
// Input: nums = [2,7,11,15], target = 9

// * step 7: space and time complexity
// if nums array becomes bigger how many more operations will be done
// T: O(N^2) S: O(1)

// * step 8: can we optimize our solution
// if one complexity is drastically better than the other then we can potentially compromise  the complexity of the one which is much better to bring down the other complexity - utilize more space to bring down time complexity

// hash map look up runs at O(1)

var twoSum = function (nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numToFind = target - nums[p];
      numsMap[numToFind] = p;
    }
  }
  return null;
};

// test optimized solutions with test cases
// T: O(N) S: O(N)
