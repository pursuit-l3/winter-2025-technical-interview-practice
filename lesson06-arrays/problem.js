/* Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.


*/

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums) {
    let largestNumber = Math.max(...nums);

    if(largestNumber < 0){
        return -1;
    }
    

    for (let i = 0; i < nums.length; i++){
        if ((nums[i] * 2) <= largestNumber && i !== nums.indexOf(largestNumber)){
            continue;
        }else if(i === nums.indexOf(largestNumber)){
            continue;
        }else{
            return -1;
        }
    }

    return largestNumber;

}
// console.log(checkLargestElement([ 2, 3, 4, 6, 13]));

module.exports = checkLargestElement;
