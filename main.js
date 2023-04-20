function findLengthOfTheLongestSubString(userValue) {
    let longestString = "";
    for (let i = 0; i < userValue.length; i++) {
        if (longestString.includes(userValue[i])) {
            return longestString.length
        } else {
            longestString += userValue[i];
        }
    }
    return longestString.length;
}

console.log(findLengthOfTheLongestSubString("abcabcbb"));
console.log(findLengthOfTheLongestSubString("bbbbb"));
console.log(findLengthOfTheLongestSubString("abcdef"));
console.log(findLengthOfTheLongestSubString(""));




