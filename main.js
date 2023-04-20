function findLengthOfTheLongestSubString(UserValue) {
    let longestString = "";
    for (let i = 0; i < UserValue.length; i++) {
        if (longestString.includes(UserValue[i])) {
            return longestString.length
        } else {
            longestString += UserValue[i];
        }
    }
    return longestString.length;
}

console.log(findLengthOfTheLongestSubString("abcabcbb"));
console.log(findLengthOfTheLongestSubString("bbbbb"));
console.log(findLengthOfTheLongestSubString("abcdef"));
console.log(findLengthOfTheLongestSubString(""));




