/*Given a string s, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {
  let reversed = "";

  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }

  return s === reversed;
};

/*Comments: O(n)
The time complexity of str.replace() is O(n) since in the worst 
case, it will traverse the entire string to replace the argument. 
Same with toLowerCase().*/
