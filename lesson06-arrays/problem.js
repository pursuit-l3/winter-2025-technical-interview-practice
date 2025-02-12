/* Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

QUESTIONS: 
1. what is considered the largest element?
- Is the largest element the length or the value of the element?
*/

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums) {
    let largestNumber = 0;
    nums.map((num) => {
        if(largestNumber < num){
            largestNumber = num;
        }
    })


    nums.forEach((num, i) => {
        nums[i] = num * 2;
    })


    nums.forEach((num, i) => {
        if(num <= largestNumber){
            nums[i] = "true";            
        }else{
            nums[i] = "false";
        }
    })

    nums.map((wrd) => {
        if(wrd === "false"){
            return -1;
        }else {
            return largestNumber;
        }
    })
}
console.log(checkLargestElement([12, 2, 3, 4, 6, 11, 13]))
module.exports = checkLargestElement;
