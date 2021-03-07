/*Given a non-empty string s, you may delete at most one character. 
Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:

*/

/**
 * @param {string} s
 * @return {boolean}
 */

//TC: O(n), SC: O(1)
const validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let leftChar;
  let rightChar;

  while (left < right) {
    leftChar = s.charAt(left);
    rightChar = s.charAt(right);
    if (leftChar === rightChar) {
      return true;
    } else {
      s = s.slice(0, left) + s.slice(right);
      console.log(leftChar, rightChar);
      left++;
      right--;
    }
  }
};
