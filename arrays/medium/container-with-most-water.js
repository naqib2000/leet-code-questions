// ! Question: You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// TODO: https://leetcode.com/problems/container-with-most-water/

// * step 1: verify constraints - variables that impact how to solve questions / edge cases
// does thickness of the line affect the area - no assume they take no space
// do left and right sides of graph count as walls - no sides cannot be used to form container
// does a higher line inside our container affect our area - no lines inside has no effect

// * step 2: write out some test cases
// best test case, empty array so area 0, array of one value also 0, not obvious case

// * step 3: figure out a solution without code
// need to calculate every single value (due to max/min value)
//trying to calculate so area = height x width
//area of a region = (distance between the two lines x lower height of both lines)
//one pointer at first value then a second one that moves
//using these value find area and store number somewhere
//repeat this process until all values complete
// the calculated value should replace the stored number from before if it is bigger only
//then move first pointer and second to next value and then compare with all values again

// * step 4: write out our solution in code
var maxArea = function (height) {
  let maxArea = 0;
  for (let p1 = 0; p1 < height.length; p1++) {
    // do we do anything at p1 that doesn't need anything at p2 (should be done here)
    for (let p2 = p1 + 1; p2 < height.length; p2++) {
      const area = Math.min(height[p1], height[p2]) * (p2 - p1);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};

// * step 5: double check for errors

// * step 6: test code with our test cases

// * step 7: space and time complexity
// T: O(N^2) S: O(1)

// * step 8: can we optimize our solution
var maxArea = function (height) {
  let maxArea = 0;
  let leftVal = 0;
  let rightVal = height.length - 1;

  while (leftVal < rightVal) {
    const area =
      Math.min(height[leftVal], height[rightVal]) * (rightVal - leftVal);
    maxArea = Math.max(maxArea, area);

    if (leftVal < rightVal) {
      leftVal++;
    } else {
      rightVal--;
    }
  }

  return maxArea;
};

// T: O(N) S: O(1)
